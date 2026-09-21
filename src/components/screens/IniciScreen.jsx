import { categoryOf, difficultyLabel } from "../../lib/catalog.js";
import "./IniciScreen.css";

export function IniciScreen({
  username,
  challenge,
  game,
  attempts,
  streak,
  seasonScore,
  onPlay,
}) {
  const displayUser = username || "Oriol";
  const displayStreak = streak ?? 5;
  const displayAttempts = attempts ?? 3;
  const displayScore = seasonScore
    ? seasonScore.toLocaleString("ca-ES")
    : "5.830";

  return (
    <section className="screen inici">
      <div className="inici-content">

        <header className="inici-top">
          <div className="brand">
            <span className="brand-ball">⚽</span>

            <div className="brand-text">
              <strong>TrophyLeagues</strong>
              <span>DAILY</span>
            </div>
          </div>

          <button className="bell-btn" aria-label="Avisos">
            <svg viewBox="0 0 24 24">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.7 21a2 2 0 0 1-3.4 0" />
            </svg>
          </button>
        </header>

        <div className="welcome">
          <h1>
            Bon dia,
            <br />
            {displayUser}!
          </h1>

          <p>
            Avui és un bon dia per saber
            <br />
            una mica més de futbol. ⚽
          </p>
        </div>

        <article className="challenge-card">
          <div className="challenge-label">
            <span>🏆</span>
            REPTE DEL DIA
          </div>

          <h2>
            {game?.title || (
              <>
                Onze Històric:
                <br />
                Campions de Lliga
              </>
            )}
          </h2>

          <p className="challenge-description">
            {challenge?.blurb || (
              <>
                Tria els 11 millors jugadors sense
                <br />
                superar el pressupost màxim.
              </>
            )}
          </p>

          <div className="challenge-meta">
            <span>
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              {game?.duration || "90s"}
            </span>

            <span>
              <svg viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M4 9h16M9 9v11" />
              </svg>
              {game ? categoryOf(game.type) : "Tàctic"}
            </span>

            <span className="difficulty">
              {game ? difficultyLabel(game.difficulty) : "Mitjana"}
            </span>
          </div>

          <button className="play-btn" onClick={onPlay}>
            Jugar ara
            <span>→</span>
          </button>
        </article>

        <div className="stats-grid">
          <article className="stat-card">
            <span className="stat-emoji">🔥</span>
            <strong>{displayStreak}</strong>
            <small>dies</small>
            <span className="stat-label">Ratxa</span>
          </article>

          <article className="stat-card">
            <span className="stat-emoji">⚡</span>
            <strong>{displayAttempts} / 3</strong>
            <span className="stat-label">Intents</span>
          </article>

          <article className="stat-card">
            <svg className="chart-icon" viewBox="0 0 24 24">
              <path d="M6 19v-5M12 19V9M18 19V5" />
            </svg>

            <strong>{displayScore}</strong>
            <span className="stat-label">Punts temporada</span>
          </article>
        </div>

        <article className="progress-card">
          <div className="progress-title">
            <strong>El teu progrés</strong>
            <span>›</span>
          </div>

          <div className="progress-info">
            <span>Temporada 2024</span>
            <strong>{displayScore} pts</strong>
          </div>

          <div className="progress-row">
            <div className="progress-track">
              <div className="progress-fill" />
            </div>

            <span className="progress-trophy">🏆</span>
          </div>

          <div className="quote">
            <p>
              “El talent guanya partits,
              <br />
              però el treball en equip guanya lligues.”
            </p>
            <span>— Michael Jordan</span>
          </div>
        </article>

      </div>
    </section>
  );
}