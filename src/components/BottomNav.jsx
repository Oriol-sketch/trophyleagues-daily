import "./BottomNav.css";

const HomeIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5Z" />
  </svg>
);

const GamesIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="2" y="6" width="20" height="12" rx="6" />
    <path d="M6 12h4M8 10v4" />
    <circle cx="15" cy="11" r=".8" />
    <circle cx="18" cy="13" r=".8" />
  </svg>
);

const TrophyIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6 4h12v6a6 6 0 0 1-12 0V4Z" />
    <path d="M6 6H3v2a4 4 0 0 0 4 4M18 6h3v2a4 4 0 0 1-4 4M12 16v4M8 21h8" />
  </svg>
);

const ProfileIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21v-1a6.5 6.5 0 0 1 13 0v1" />
  </svg>
);

const items = [
  ["#/inici", "Inici", HomeIcon],
  ["#/reptes", "Reptes", GamesIcon],
  ["#/classificacio", "Classificació", TrophyIcon],
  ["#/perfil", "Perfil", ProfileIcon],
];

export function BottomNav({ path = "#/inici" }) {
  const current = path === "#/" ? "#/inici" : path;

  return (
    <nav className="bottom-nav" aria-label="Navegació principal">
      {items.map(([href, label, Icon]) => (
        <a
          key={href}
          href={href}
          className={current === href ? "active" : ""}
        >
          <span className="nav-icon">
            <Icon />
          </span>

          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}