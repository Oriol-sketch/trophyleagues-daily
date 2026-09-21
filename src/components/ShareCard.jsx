export function ShareCard({ text, onShare, onCopy }) {
  return (
    <article className="result-card">
      <p className="muted">{text}</p>
      <button type="button" className="btn-pitch" onClick={onShare}>
        Compartir
      </button>
      <button type="button" className="btn-ghost" onClick={onCopy}>
        Copiar text
      </button>
    </article>
  );
}
