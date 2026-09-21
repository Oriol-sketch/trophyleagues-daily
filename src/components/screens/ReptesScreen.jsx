import { useMemo, useState } from "react";
import { Icon } from "../Icon.jsx";
import { GameCard } from "../GameCard.jsx";
import { categoryOf } from "../../lib/catalog.js";
import "./LightScreens.css";

const FILTERS = ["Tots", "Tàctic", "Coneixement", "Estratègia"];

export function ReptesScreen({ games, current, completed, onPlay }) {
  const [tab, setTab] = useState("Disponibles");
  const [filter, setFilter] = useState("Tots");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    let list = games;
    if (tab === "Historial") {
      list = games.filter((game) => completed.some((id) => id.includes(game.id)));
    }
    if (filter !== "Tots") list = list.filter((game) => categoryOf(game.type) === filter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((game) => game.title.toLowerCase().includes(q));
    }
    return list;
  }, [games, tab, filter, query, completed]);

  return (
    <section className="screen light">
      <header className="light-head">
        <div>
          <p className="brand-mini">TrophyLeagues Daily</p>
          <h1>Reptes</h1>
        </div>
        <label className="search">
          <Icon name="search" size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cerca"
            aria-label="Cerca reptes"
          />
        </label>
      </header>

      <div className="tabs">
        {["Disponibles", "Historial", "Tots"].map((item) => (
          <button key={item} className={tab === item ? "on" : ""} type="button" onClick={() => setTab(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="chips-row">
        {FILTERS.map((item) => (
          <button key={item} className={filter === item ? "on" : ""} type="button" onClick={() => setFilter(item)}>
            {item}
          </button>
        ))}
      </div>

      {current && tab !== "Historial" && (
        <p className="current-line">Repte actual: {current.title}</p>
      )}

      <div className="list">
        {visible.length ? (
          visible.map((game) => <GameCard key={game.id} game={game} onPlay={onPlay} />)
        ) : (
          <p className="empty">Cap repte en aquest filtre.</p>
        )}
      </div>
    </section>
  );
}
