export function renderScoreCard(parent, { score, explanation, percentile, joke }) {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <h2>${score} punts</h2>
    <p class="muted">${explanation}</p>
    <p class="muted">Percentil simulat: millor que el ${percentile}% dels jugadors de prova.</p>
    <p>${joke}</p>
  `;
  parent.appendChild(card);
  return card;
}
