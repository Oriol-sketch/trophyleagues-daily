export function ScoreCard({ score, explanation, percentile, joke }) {
  return (
    <article className="result-card">
      <p className="kicker">Resultat</p>
      <h2>{score} punts</h2>
      <p>{explanation}</p>
      <p className="muted">Percentil simulat: millor que el {percentile}%.</p>
      <p className="joke">{joke}</p>
    </article>
  );
}
