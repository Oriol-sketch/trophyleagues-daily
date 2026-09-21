import { ScoreCard } from "../ScoreCard.jsx";
import { ShareCard } from "../ShareCard.jsx";
import "./LightScreens.css";

export function ResultatScreen({ title, score, shareText, onShare, onCopy }) {
  return (
    <section className="screen light">
      <header className="light-head">
        <h1>{title || "Resultat"}</h1>
      </header>
      <ScoreCard
        score={score}
        explanation="Puntuació de la partida genèrica de prova. Els jocs reals encara no hi són."
        percentile={62}
        joke="Ni el crono discutiria aquest tap."
      />
      <ShareCard text={shareText} onShare={onShare} onCopy={onCopy} />
      <p style={{ textAlign: "center", marginTop: 12 }}>
        <a className="brand-mini" href="#/trophyleagues">
          TrophyLeagues
        </a>
      </p>
    </section>
  );
}
