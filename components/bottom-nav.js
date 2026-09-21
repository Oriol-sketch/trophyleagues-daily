const LINKS = [
  { hash: "#/inici", label: "Inici" },
  { hash: "#/reptes", label: "Reptes" },
  { hash: "#/classificacio", label: "Classificació" },
  { hash: "#/perfil", label: "Perfil" },
  { hash: "#/trophyleagues", label: "TrophyLeagues" }
];

export function renderBottomNav(target, currentHash) {
  target.innerHTML = LINKS.map((link) => {
    const active = currentHash === link.hash || (link.hash === "#/inici" && (currentHash === "#/" || currentHash === ""));
    return `<a href="${link.hash}" class="${active ? "active" : ""}">${link.label}</a>`;
  }).join("");
}
