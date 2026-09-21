import { Icon } from "../Icon.jsx";
import { go, initials, levelFromScore } from "../../lib/catalog.js";
import "./LightScreens.css";

export function PerfilScreen({ user, attempts, streak, seasonScore, completed, onReset, onShare }) {
  const { level, into, next, ratio } = levelFromScore(seasonScore);

  return (
    <section className="screen light">
      <header className="light-head">
        <h1>Perfil</h1>
        <button type="button" className="icon-btn light" aria-label="Paràmetres">
          <Icon name="settings" />
        </button>
      </header>

      <article className="profile-hero">
        <div className="avatar xl">{initials(user)}</div>
        <h2>{user}</h2>
        <p className="brand-mini">Apassionat del bon futbol</p>
        <div className="level-bar" aria-label={`Nivell ${level}`}>
          <span style={{ width: `${Math.round(ratio * 100)}%` }} />
        </div>
        <small>
          Nivell {level} · {into} / {next} pts
        </small>
      </article>

      <div className="stat-row" style={{ margin: "12px 0" }}>
        <article className="stat-card">
          <strong>{streak}</strong>
          <small>Ratxa actual</small>
        </article>
        <article className="stat-card">
          <strong>{seasonScore.toLocaleString("ca-ES")}</strong>
          <small>Punts totals</small>
        </article>
        <article className="stat-card">
          <strong>{attempts}/3</strong>
          <small>Intents avui</small>
        </article>
      </div>

      <article className="weekly-card">
        <h3>Assoliments</h3>
        <p>{completed.length ? `${completed.length} reptes completats.` : "Encara no has completat cap repte."}</p>
      </article>

      <nav className="menu-card">
        <button type="button" onClick={() => go("#/classificacio")}>
          Estadístiques de temporada
        </button>
        <button type="button" onClick={() => go("#/reptes")}>
          Historial de reptes
        </button>
        <button type="button" onClick={onShare}>
          Compartir l’app
        </button>
        <a href="#/trophyleagues">Sobre TrophyLeagues Daily</a>
        <button type="button" className="danger" onClick={onReset}>
          Reiniciar estat de prova
        </button>
      </nav>
    </section>
  );
}
