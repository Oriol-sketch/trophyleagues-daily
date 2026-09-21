export function ErrorState({ message, actionLabel, onAction }) {
  return (
    <article className="error-card">
      <p>{message}</p>
      <button type="button" className="btn-pitch" onClick={onAction}>
        {actionLabel}
      </button>
    </article>
  );
}
