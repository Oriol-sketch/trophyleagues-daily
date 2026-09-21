import { categoryOf, difficultyLabel, pointsHint } from "../lib/catalog.js";
import "./GameCard.css";

const ART = {
  draft: "art-cup",
  identitat: "art-pitch",
  scouting: "art-arrows",
  decisió: "art-crisis",
  predició: "art-pitch",
  estratègia: "art-market",
  humor: "art-chaos",
  gestió: "art-crisis",
  geografia: "art-globe",
  mix: "art-cup"
};

export function GameCard({ game, onPlay }) {
  return (
    <button type="button" className="game-card" onClick={() => onPlay(game)}>
      <span className={`thumb ${ART[game.type] || "art-cup"}`} aria-hidden="true" />
      <span className="game-body">
        <strong>{game.title}</strong>
        <em>{game.hint || "Repte curt de futbol."}</em>
        <span className="meta">
          <span>{game.duration}</span>
          <span>{categoryOf(game.type)}</span>
          <span>{difficultyLabel(game.difficulty)}</span>
        </span>
      </span>
      <span className="pts">{pointsHint(game.difficulty)}</span>
    </button>
  );
}
