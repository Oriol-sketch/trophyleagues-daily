import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Capçalera superior amb logo i notificacions */}
      <header className="home-header">
        <div className="logo-area">
          <div className="ball-icon">⚽</div>
          <div className="logo-text">
            <span className="brand-title">TrophyLeagues</span>
            <span className="brand-subtitle">DAILY</span>
          </div>
        </div>
        <button className="notif-btn" aria-label="Notificacions">
          🔔
        </button>
      </header>

      {/* Secció de benvinguda amb fons d'estadi */}
      <section className="welcome-section">
        <div className="welcome-text">
          <h1>Bon dia, Oriol!</h1>
          <p>Avui és un bon dia per saber una mica més de futbol. ⚽</p>
        </div>

        {/* Targeta del Repte del Dia */}
        <div className="challenge-card">
          <div className="challenge-badge">
            <span>🏆</span> REPTE DEL DIA
          </div>
          <h2>Onze Històric: Campions de Lliga</h2>
          <p>Tria els 11 millors jugadors sense superar el pressupost màxim.</p>
          
          <div className="challenge-tags">
            <span className="tag">⏱️ 90s</span>
            <span className="tag">🛡️ Tàctic</span>
            <span className="tag gold">Mitjana</span>
          </div>

          <button className="play-btn">
            Jugar ara <span>→</span>
          </button>
        </div>
      </section>

      {/* Targetes d'estadístiques ràpides */}
      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-icon">🔥</span>
          <span className="stat-value">5</span>
          <span className="stat-label">dies<br />Ratxa</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">⚡</span>
          <span className="stat-value">3 / 3</span>
          <span className="stat-label">Intents</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">📊</span>
          <span className="stat-value">5.830</span>
          <span className="stat-label">Punts temporada</span>
        </div>
      </div>

      {/* Targeta de progrés inferior */}
      <div className="progress-section">
        <div className="progress-header">
          <span>El teu progrés</span>
          <span className="arrow">›</span>
        </div>
        <div className="progress-sub">
          <span>Temporada 2024</span>
          <span className="progress-pts">5.830 pts 🏆</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: '65%' }}></div>
        </div>

        <blockquote className="quote-box">
          <p>"El talent guanya partits, però el treball en equip guanya lligues."</p>
          <cite>— Michael Jordan</cite>
        </blockquote>
      </div>

      {/* Barra de navegació inferior */}
      <nav className="bottom-navigation">
        <a href="#inici" className="nav-item active">
          <span className="nav-icon">🏠</span>
          <span>Inici</span>
        </a>
        <a href="#reptes" className="nav-item">
          <span className="nav-icon">🎮</span>
          <span>Reptes</span>
        </a>
        <a href="# classificacio" className="nav-item">
          <span className="nav-icon">🏆</span>
          <span>Classificació</span>
        </a>
        <a href="#perfil" className="nav-item">
          <span className="nav-icon">👤</span>
          <span>Perfil</span>
        </a>
      </nav>
    </div>
  );
}