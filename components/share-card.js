export function renderShareCard(parent, { text, onShare, onCopy }) {
  const card = document.createElement("article");
  card.className = "card stack";
  const shareBtn = document.createElement("button");
  shareBtn.className = "btn btn-primary";
  shareBtn.type = "button";
  shareBtn.textContent = "Compartir";
  shareBtn.addEventListener("click", onShare);
  const copyBtn = document.createElement("button");
  copyBtn.className = "btn btn-ghost";
  copyBtn.type = "button";
  copyBtn.textContent = "Copiar text";
  copyBtn.addEventListener("click", onCopy);
  const p = document.createElement("p");
  p.className = "muted";
  p.textContent = text;
  card.append(p, shareBtn, copyBtn);
  parent.appendChild(card);
  return card;
}
