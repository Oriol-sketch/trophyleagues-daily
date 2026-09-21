export function Icon({ name, size = 22 }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true
  };

  if (name === "home") {
    return (
      <svg {...props}>
        <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />
      </svg>
    );
  }
  if (name === "game") {
    return (
      <svg {...props}>
        <rect x="3" y="8" width="18" height="10" rx="5" />
        <path d="M8 13h4M10 11v4M16.2 12h.01M18 14h.01" />
      </svg>
    );
  }
  if (name === "trophy") {
    return (
      <svg {...props}>
        <path d="M8 5h8v4a4 4 0 0 1-8 0z" />
        <path d="M8 7H5a3 3 0 0 0 3 3M16 7h3a3 3 0 0 1-3 3" />
        <path d="M12 13v3M9 20h6M10 20v-2h4v2" />
      </svg>
    );
  }
  if (name === "user") {
    return (
      <svg {...props}>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5.5 19.5c1.4-3 4-4.5 6.5-4.5s5.1 1.5 6.5 4.5" />
      </svg>
    );
  }
  if (name === "bell") {
    return (
      <svg {...props}>
        <path d="M6 16h12l-1.2-2.2a6.5 6.5 0 0 1-.8-3.2V9a5 5 0 0 0-10 0v1.6c0 1.1-.28 2.2-.8 3.2z" />
        <path d="M10 16v1a2 2 0 0 0 4 0v-1" />
      </svg>
    );
  }
  if (name === "search") {
    return (
      <svg {...props}>
        <circle cx="11" cy="11" r="6" />
        <path d="M16 16l4 4" />
      </svg>
    );
  }
  if (name === "flame") {
    return (
      <svg {...props} fill="currentColor" stroke="none">
        <path d="M12 2s3 3.2 3 6.2c0 1.4-.5 2.6-1.3 3.5 2 .2 4.3 1.8 4.3 5 0 2.8-2.4 5.3-6 5.3s-6-2.5-6-5.3c0-2.4 1.5-4 3-4.8C8.2 8.8 10 5.7 12 2z" />
      </svg>
    );
  }
  if (name === "bolt") {
    return (
      <svg {...props} fill="currentColor" stroke="none">
        <path d="M13 2 4 14h7l-1 8 10-14h-7z" />
      </svg>
    );
  }
  if (name === "settings") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a7.8 7.8 0 0 0 .1-6l-2.1.4a5.8 5.8 0 0 0-1.3-1.3l.4-2.1a7.8 7.8 0 0 0-6 0l.4 2.1A5.8 5.8 0 0 0 8.6 9.4L6.5 9a7.8 7.8 0 0 0 .1 6l2.1-.4a5.8 5.8 0 0 0 1.3 1.3l-.4 2.1a7.8 7.8 0 0 0 6 0l-.4-2.1a5.8 5.8 0 0 0 1.3-1.3z" />
      </svg>
    );
  }
  return null;
}
