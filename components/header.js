export function renderHeader(target, { eyebrow, title }) {
  target.innerHTML = `
    <div>
      <p class="eyebrow">${eyebrow}</p>
      <h1>${title}</h1>
    </div>
  `;
}
