import { useState } from "react";
import { Leaderboard } from "../Leaderboard.jsx";
import { ErrorState } from "../ErrorState.jsx";
import "./LightScreens.css";

const TABS = ["General", "Amics", "País", "Setmana"];

export function ClassificacioScreen({ entries, me, season }) {
  const [tab, setTab] = useState("General");

  return (
    <section className="screen light">
      <header className="light-head">
        <h1>Classificació</h1>
        <span className="brand-mini">Temporada {season || "2026"}</span>
      </header>
      <div className="section-tabs">
        {TABS.map((item) => (
          <button key={item} className={tab === item ? "on" : ""} type="button" onClick={() => setTab(item)}>
            {item}
          </button>
        ))}
      </div>
      {tab === "General" ? (
        <>
          <Leaderboard entries={entries} me={me} />
          <article className="weekly-card">
            <p>Competeix. Millora. Gaudeix.</p>
            <p>
              Completa reptes per pujar posicions. Ara ets{" "}
              <b>#{entries.findIndex((row) => row.username === me) + 1}</b>.
            </p>
          </article>
        </>
      ) : (
        <ErrorState
          message={`La vista “${tab}” encara no té dades. La classificació local de prova és a General.`}
          actionLabel="Tornar a General"
          onAction={() => setTab("General")}
        />
      )}
    </section>
  );
}
