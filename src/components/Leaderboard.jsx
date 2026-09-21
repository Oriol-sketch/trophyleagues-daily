import { initials } from "../lib/catalog.js";
import "./Leaderboard.css";

export function Leaderboard({ entries, me }) {
  const top = entries.slice(0, 3);
  const rest = entries.slice(3);
  const orderedPodium = [top[1], top[0], top[2]].filter(Boolean);

  return (
    <div className="board">
      {top.length >= 3 && (
        <div className="podium">
          {orderedPodium.map((entry) => {
            const rank = entries.indexOf(entry) + 1;
            return (
              <div key={entry.username} className={`podium-item rank-${rank} ${entry.username === me ? "me" : ""}`}>
                <div className="avatar">{initials(entry.username)}</div>
                <strong>{rank}</strong>
                <span>{entry.username}</span>
                <b>{entry.score.toLocaleString("ca-ES")} pts</b>
              </div>
            );
          })}
        </div>
      )}
      <ol className="board-list">
        {(rest.length ? rest : entries).map((entry, index) => {
          const rank = rest.length ? index + 4 : index + 1;
          return (
            <li key={entry.username} className={entry.username === me ? "me" : ""}>
              <span className="rank">{rank}</span>
              <span className="avatar sm">{initials(entry.username)}</span>
              <strong>{entry.username === me ? `Tu (${entry.username})` : entry.username}</strong>
              <span>{entry.score.toLocaleString("ca-ES")}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
