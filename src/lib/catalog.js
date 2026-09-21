export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export function greeting() {
  const hour = new Date().getHours();
  if (hour < 14) return "Bon dia";
  if (hour < 20) return "Bona tarda";
  return "Bona nit";
}

export function displayName(username) {
  return String(username || "Jugador").replace(/\s+\d+$/, "");
}

export function categoryOf(type) {
  if (["draft", "decisió", "predició"].includes(type)) return "Tàctic";
  if (["scouting", "estratègia", "gestió"].includes(type)) return "Estratègia";
  return "Coneixement";
}

export function difficultyLabel(value) {
  if (value === "fàcil") return "Fàcil";
  if (value === "difícil") return "Difícil";
  return "Mitjana";
}

export function pointsHint(difficulty) {
  if (difficulty === "fàcil") return "+100 pts";
  if (difficulty === "difícil") return "+200 pts";
  return "+150 pts";
}

export function levelFromScore(score) {
  const safe = Math.max(0, score || 0);
  const level = Math.floor(safe / 200) + 1;
  const into = safe % 200;
  return { level, into, next: 200, ratio: into / 200 };
}

export function initials(name) {
  return String(name)
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function parseHash() {
  const raw = window.location.hash || "#/inici";
  const [path, query = ""] = raw.split("?");
  return { path, params: new URLSearchParams(query) };
}

export function go(hash) {
  window.location.hash = hash;
}
