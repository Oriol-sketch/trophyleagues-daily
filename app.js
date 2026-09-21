import { renderHeader } from "./components/header.js";
import { renderBottomNav } from "./components/bottom-nav.js";
import { renderScoreCard } from "./components/score-card.js";
import { renderShareCard } from "./components/share-card.js";
import { renderLeaderboard } from "./components/leaderboard.js";
import { getGameModule } from "./games/registry.js";
import {
  loadState,
  getUser,
  getAttempts,
  useAttempt,
  addScore,
  markChallengeComplete,
  resetTestState
} from "./storage/storage.js";

const headerEl = document.getElementById("header");
const mainEl = document.getElementById("main");
const navEl = document.getElementById("bottom-nav");
const toastEl = document.getElementById("toast");

let data = { games: [], challenges: [], leaderboard: { entries: [] } };
let session = loadState();
let activeGame = null;

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function showToast(message) {
  toastEl.hidden = false;
  toastEl.textContent = message;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toastEl.hidden = true;
  }, 2200);
}

function parseRoute() {
  const raw = window.location.hash || "#/inici";
  const [path, query = ""] = raw.split("?");
  const params = new URLSearchParams(query);
  return { path, params, hash: path };
}

function gameById(id) {
  return data.games.find((game) => game.id === id);
}

function dailyChallenge() {
  return (
    data.challenges.find((item) => item.date === todayISO()) ||
    data.challenges[0] ||
    null
  );
}

function renderError(message, actionLabel, action) {
  mainEl.innerHTML = "";
  const card = document.createElement("article");
  card.className = "card error stack";
  const p = document.createElement("p");
  p.textContent = message;
  const btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.type = "button";
  btn.textContent = actionLabel;
  btn.addEventListener("click", action);
  card.append(p, btn);
  mainEl.appendChild(card);
}

function go(hash) {
  window.location.hash = hash;
}

function renderInici() {
  renderHeader(headerEl, { eyebrow: "TrophyLeagues Daily", title: "Inici" });
  const challenge = dailyChallenge();
  const game = challenge ? gameById(challenge.gameId) : null;
  mainEl.innerHTML = "";
  const stack = document.createElement("div");
  stack.className = "stack";
  stack.innerHTML = `
    <article class="card">
      <h2>${challenge ? challenge.title : "Sense repte"}</h2>
      <p class="muted">${challenge ? challenge.blurb : "No hi ha dades de prova per avui."}</p>
      <p><strong>${game ? game.title : "Joc pendent"}</strong></p>
    </article>
    <div class="stats">
      <div class="stat"><strong>${getAttempts(session.state)}</strong><span>Intents</span></div>
      <div class="stat"><strong>${session.state.streak}</strong><span>Ratxa</span></div>
      <div class="stat"><strong>${session.state.seasonScore}</strong><span>Temporada</span></div>
    </div>
  `;
  const play = document.createElement("button");
  play.className = "btn btn-primary";
  play.type = "button";
  play.textContent = "Jugar";
  play.addEventListener("click", () => {
    if (!challenge || !game) {
      renderError("No s’ha pogut carregar el repte del dia.", "Tornar a Inici", () => go("#/inici"));
      return;
    }
    if (getAttempts(session.state) <= 0) {
      renderError("No et queden intents avui.", "Veure el perfil", () => go("#/perfil"));
      return;
    }
    go(`#/partida?game=${game.id}&challenge=${challenge.id}`);
  });
  stack.appendChild(play);
  mainEl.appendChild(stack);
}

function renderReptes() {
  renderHeader(headerEl, { eyebrow: "Catàleg", title: "Reptes" });
  const challenge = dailyChallenge();
  const current = challenge ? gameById(challenge.gameId) : null;
  mainEl.innerHTML = "";
  const stack = document.createElement("div");
  stack.className = "stack";
  stack.innerHTML = `
    <article class="card">
      <h2>Repte actual</h2>
      <p class="muted">${current ? current.title : "Cap joc assignat."}</p>
    </article>
  `;
  const list = document.createElement("div");
  list.className = "game-list";
  data.games.forEach((game) => {
    const btn = document.createElement("button");
    btn.className = "game-card";
    btn.type = "button";
    btn.innerHTML = `
      <strong>${game.title}</strong>
      <div class="meta">
        <span class="chip">${game.duration}</span>
        <span class="chip ghost">${game.type}</span>
        <span class="chip ghost">${game.difficulty}</span>
      </div>
    `;
    btn.addEventListener("click", () => {
      if (getAttempts(session.state) <= 0) {
        renderError("No et queden intents avui.", "Veure el perfil", () => go("#/perfil"));
        return;
      }
      go(`#/partida?game=${game.id}`);
    });
    list.appendChild(btn);
  });
  const history = document.createElement("article");
  history.className = "card";
  const completed = session.state.completedChallenges;
  history.innerHTML = `
    <h2>Historial</h2>
    <p class="muted">${completed.length ? completed.join(", ") : "Encara no has completat cap repte."}</p>
  `;
  stack.append(list, history);
  mainEl.appendChild(stack);
}

function renderClassificacio() {
  renderHeader(headerEl, { eyebrow: "Temporada", title: "Classificació" });
  mainEl.innerHTML = "";
  const card = document.createElement("article");
  card.className = "card";
  const me = getUser(session.state);
  const entries = [...data.leaderboard.entries, { username: me, score: session.state.seasonScore }]
    .sort((a, b) => b.score - a.score);
  renderLeaderboard(card, { entries, me });
  mainEl.appendChild(card);
}

function renderPerfil() {
  renderHeader(headerEl, { eyebrow: "Compte local", title: "Perfil" });
  mainEl.innerHTML = "";
  const stack = document.createElement("div");
  stack.className = "stack";
  stack.innerHTML = `
    <article class="card">
      <h2>${getUser(session.state)}</h2>
      <p class="muted">Nom generat automàticament. Sense formulari abans de jugar.</p>
      <p class="muted">Intents d’avui: ${getAttempts(session.state)} · Ratxa: ${session.state.streak} · Puntuació: ${session.state.seasonScore}</p>
    </article>
  `;
  const reset = document.createElement("button");
  reset.className = "btn btn-danger";
  reset.type = "button";
  reset.textContent = "Reiniciar estat de prova";
  reset.addEventListener("click", () => {
    session = { state: resetTestState(), recovered: false };
    showToast("Estat de prova reiniciat.");
    render();
  });
  stack.appendChild(reset);
  mainEl.appendChild(stack);
}

function renderTrophyLeagues() {
  renderHeader(headerEl, { eyebrow: "Joc principal", title: "TrophyLeagues" });
  mainEl.innerHTML = `
    <article class="card stack">
      <p>TrophyLeagues és el joc principal. Daily és la porta d’entrada i el canal de reptes curts.</p>
      <a class="link-quiet" href="https://trophyleagues.com" target="_blank" rel="noreferrer">Obrir TrophyLeagues</a>
    </article>
  `;
}

function renderPartida(params) {
  const meta = gameById(params.get("game"));
  if (!meta) {
    renderHeader(headerEl, { eyebrow: "Partida", title: "Error" });
    renderError("Aquest joc no existeix a les dades de prova.", "Tornar a Reptes", () => go("#/reptes"));
    return;
  }
  renderHeader(headerEl, { eyebrow: "Partida", title: meta.title });
  session.state = useAttempt(session.state);
  activeGame = getGameModule(meta);
  activeGame.start();
  mainEl.innerHTML = "";
  const stack = document.createElement("div");
  stack.className = "stack";
  const progress = document.createElement("div");
  progress.className = "progress";
  progress.innerHTML = "<span style=\"width:35%\"></span>";
  const gameMount = document.createElement("div");
  stack.append(progress, gameMount);
  mainEl.appendChild(stack);
  const action = activeGame.render(gameMount);
  action.addEventListener("click", () => {
    const result = activeGame.submitAnswer("tap");
    if (!result.ok) {
      renderError(result.message, "Tornar a Inici", () => go("#/inici"));
      return;
    }
    const challengeId = params.get("challenge");
    if (challengeId) {
      session.state = markChallengeComplete(session.state, challengeId);
    }
    session.state = addScore(session.state, {
      gameId: meta.id,
      score: result.score,
      date: todayISO()
    });
    go(`#/resultat?game=${meta.id}`);
  });
}

function renderResultat(params) {
  const meta = gameById(params.get("game"));
  renderHeader(headerEl, { eyebrow: "Resultat", title: meta ? meta.title : "Resultat" });
  mainEl.innerHTML = "";
  const stack = document.createElement("div");
  stack.className = "stack";
  const score = activeGame ? activeGame.getScore() : 0;
  const shareText = activeGame
    ? activeGame.getShareText()
    : "TrophyLeagues Daily";
  renderScoreCard(stack, {
    score,
    explanation: "Puntuació de la partida genèrica de prova. Els jocs reals encara no hi són.",
    percentile: 62,
    joke: "Ni el VAR discutiria aquest tap."
  });
  renderShareCard(stack, {
    text: shareText,
    onShare: async () => {
      try {
        if (navigator.share) {
          await navigator.share({ text: shareText });
        } else {
          await navigator.clipboard.writeText(shareText);
          showToast("Text copiat.");
        }
      } catch {
        showToast("No s’ha pogut compartir.");
      }
    },
    onCopy: async () => {
      try {
        await navigator.clipboard.writeText(shareText);
        showToast("Text copiat.");
      } catch {
        showToast("No s’ha pogut copiar.");
      }
    }
  });
  const link = document.createElement("a");
  link.className = "link-quiet";
  link.href = "#/trophyleagues";
  link.textContent = "TrophyLeagues";
  stack.appendChild(link);
  mainEl.appendChild(stack);
}

function render() {
  const { path, params } = parseRoute();
  renderBottomNav(navEl, path);
  if (session.recovered) {
    showToast("Dades locals recuperades.");
    session.recovered = false;
  }
  switch (path) {
    case "#/":
    case "#/inici":
      renderInici();
      break;
    case "#/reptes":
      renderReptes();
      break;
    case "#/classificacio":
      renderClassificacio();
      break;
    case "#/perfil":
      renderPerfil();
      break;
    case "#/trophyleagues":
      renderTrophyLeagues();
      break;
    case "#/partida":
      renderPartida(params);
      break;
    case "#/resultat":
      renderResultat(params);
      break;
    default:
      renderHeader(headerEl, { eyebrow: "Ruta desconeguda", title: "Error" });
      renderError("Aquesta pantalla no existeix.", "Anar a Inici", () => go("#/inici"));
  }
}

async function boot() {
  try {
    const [gamesRes, challengesRes, leaderboardRes] = await Promise.all([
      fetch("./data/games.json"),
      fetch("./data/challenges.json"),
      fetch("./data/leaderboard.json")
    ]);
    if (!gamesRes.ok || !challengesRes.ok || !leaderboardRes.ok) {
      throw new Error("fetch");
    }
    data.games = (await gamesRes.json()).games;
    data.challenges = (await challengesRes.json()).challenges;
    data.leaderboard = await leaderboardRes.json();
    if (!window.location.hash) window.location.hash = "#/inici";
    window.addEventListener("hashchange", render);
    render();
  } catch {
    renderHeader(headerEl, { eyebrow: "TrophyLeagues Daily", title: "Error" });
    renderBottomNav(navEl, "#/inici");
    renderError("No s’han pogut carregar les dades de prova.", "Tornar-ho a provar", boot);
  }
}

boot();
