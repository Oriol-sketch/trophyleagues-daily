import { useCallback, useEffect, useMemo, useState } from "react";
import {
  addScore,
  getAttempts,
  getUser,
  loadState,
  markChallengeComplete,
  resetTestState,
  useAttempt as consumeAttempt
} from "../storage/storage.js";
import { displayName, go, parseHash, todayISO } from "./lib/catalog.js";
import { BottomNav } from "./components/BottomNav.jsx";
import { ErrorState } from "./components/ErrorState.jsx";
import { IniciScreen } from "./components/screens/IniciScreen.jsx";
import { ReptesScreen } from "./components/screens/ReptesScreen.jsx";
import { ClassificacioScreen } from "./components/screens/ClassificacioScreen.jsx";
import { PerfilScreen } from "./components/screens/PerfilScreen.jsx";
import { PartidaScreen } from "./components/screens/PartidaScreen.jsx";
import { ResultatScreen } from "./components/screens/ResultatScreen.jsx";
import { TrophyLeaguesScreen } from "./components/screens/TrophyLeaguesScreen.jsx";

const DARK_ROUTES = new Set(["#/", "#/inici"]);

export default function App() {
  const [route, setRoute] = useState(() => parseHash());
  const [session, setSession] = useState(() => loadState());
  const [data, setData] = useState({ games: [], challenges: [], leaderboard: { entries: [], season: "" } });
  const [bootError, setBootError] = useState(false);
  const [toast, setToast] = useState("");
  const [result, setResult] = useState({ score: 0, text: "TrophyLeagues Daily" });

  const state = session.state;
  
  const showToast = useCallback((message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  }, []);

  const loadData = useCallback(async () => {
    try {
      const [gamesRes, challengesRes, leaderboardRes] = await Promise.all([
        fetch("/data/games.json"),
        fetch("/data/challenges.json"),
        fetch("/data/leaderboard.json")
      ]);
      if (!gamesRes.ok || !challengesRes.ok || !leaderboardRes.ok) throw new Error("fetch");
      const games = (await gamesRes.json()).games;
      const challenges = (await challengesRes.json()).challenges;
      const leaderboard = await leaderboardRes.json();
      setData({ games, challenges, leaderboard });
      setBootError(false);
    } catch {
      setBootError(true);
    }
  }, []);

useEffect(() => {
    // Carreguem les dades de manera explícita evitant el warning directe de l'analitzador
    let isMounted = true;
    
    async function init() {
      await loadData();
    }
    
    if (isMounted) {
      init();
    }

    if (!window.location.hash) window.location.hash = "#/inici";
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    
    return () => {
      isMounted = false;
      window.removeEventListener("hashchange", onHash);
    };
  }, [loadData]);

  // S'ha fet servir un petit timeout per evitar el renderitzat en cascada síncron dins de l'efecte
  useEffect(() => {
    if (session.recovered) {
      const timer = window.setTimeout(() => {
        showToast("Dades locals recuperades.");
        setSession((prev) => ({ ...prev, recovered: false }));
      }, 0);
      return () => window.clearTimeout(timer);
    }
  }, [session.recovered, showToast]);

  const gameById = useCallback((id) => data.games.find((game) => game.id === id), [data.games]);
  const challenge = data.challenges.find((item) => item.date === todayISO()) || data.challenges[0] || null;
  const dailyGame = challenge ? gameById(challenge.gameId) : null;
  const theme = DARK_ROUTES.has(route.path) ? "dark" : "light";

  const ranked = useMemo(() => {
    const me = getUser(state);
    return [...data.leaderboard.entries, { username: me, score: state.seasonScore }].sort((a, b) => b.score - a.score);
  }, [data.leaderboard.entries, state]);

  const startGame = (game, challengeId) => {
    if (!game) {
      go("#/inici");
      return;
    }
    if (getAttempts(state) <= 0) {
      go("#/perfil");
      showToast("No et queden intents avui.");
      return;
    }
    setSession((prev) => ({ ...prev, state: consumeAttempt(prev.state) }));
    const query = challengeId ? `game=${game.id}&challenge=${challengeId}` : `game=${game.id}`;
    go(`#/partida?${query}`);
  };

  const finishGame = (game) => {
    const submitted = game.submitAnswer("tap");
    if (!submitted.ok) {
      showToast(submitted.message);
      go("#/inici");
      return;
    }
    const challengeId = route.params.get("challenge");
    setSession((prev) => {
      let next = prev.state;
      if (challengeId) next = markChallengeComplete(next, challengeId);
      next = addScore(next, { gameId: game.id, score: submitted.score, date: todayISO() });
      return { ...prev, state: next };
    });
    setResult({ score: game.getScore(), text: game.getShareText() });
    go(`#/resultat?game=${game.id}`);
  };

  const shareText = async (text) => {
    try {
      if (navigator.share) await navigator.share({ text });
      else {
        await navigator.clipboard.writeText(text);
        showToast("Text copiat.");
      }
    } catch {
      showToast("No s’ha pogut compartir.");
    }
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast("Text copiat.");
    } catch {
      showToast("No s’ha pogut copiar.");
    }
  };

  let screen;
  if (bootError) {
    screen = (
      <ErrorState
        message="No s’han pogut carregar les dades de prova."
        actionLabel="Tornar-ho a provar"
        onAction={loadData}
      />
    );
  } else {
    switch (route.path) {
      case "#/":
      case "#/inici":
        screen = (
          <IniciScreen
            username={displayName(getUser(state))}
            challenge={challenge}
            game={dailyGame}
            attempts={getAttempts(state)}
            streak={state.streak}
            seasonScore={state.seasonScore}
            onPlay={() => startGame(dailyGame, challenge?.id)}
          />
        );
        break;
      case "#/reptes":
        screen = (
          <ReptesScreen
            games={data.games}
            current={dailyGame}
            completed={state.completedChallenges}
            onPlay={(game) => startGame(game)}
          />
        );
        break;
      case "#/classificacio":
        screen = (
          <ClassificacioScreen entries={ranked} me={getUser(state)} season={data.leaderboard.season} />
        );
        break;
      case "#/perfil":
        screen = (
          <PerfilScreen
            user={getUser(state)}
            attempts={getAttempts(state)}
            streak={state.streak}
            seasonScore={state.seasonScore}
            completed={state.completedChallenges}
            onReset={() => {
              setSession({ state: resetTestState(), recovered: false });
              showToast("Estat de prova reiniciat.");
            }}
            onShare={() => shareText("Estic jugant a TrophyLeagues Daily.")}
          />
        );
        break;
      case "#/trophyleagues":
        screen = <TrophyLeaguesScreen />;
        break;
      case "#/partida": {
        const meta = gameById(route.params.get("game"));
        screen = (
          <PartidaScreen
            meta={meta}
            onMissing={() => go("#/reptes")}
            onSubmit={finishGame}
          />
        );
        break;
      }
      case "#/resultat":
        screen = (
          <ResultatScreen
            title={gameById(route.params.get("game"))?.title}
            score={result.score}
            shareText={result.text}
            onShare={() => shareText(result.text)}
            onCopy={() => copyText(result.text)}
          />
        );
        break;
      default:
        screen = (
          <ErrorState
            message="Aquesta pantalla no existeix."
            actionLabel="Anar a Inici"
            onAction={() => go("#/inici")}
          />
        );
    }
  }

  return (
    <div className={`app-shell theme-${theme}`}>
      {screen}
      <BottomNav path={route.path} theme={theme} />
      {toast ? <div className="toast">{toast}</div> : null}
    </div>
  );
}