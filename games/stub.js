export function createStubGame(meta) {
  let started = false;
  let answered = false;
  let score = 0;

  return {
    id: meta.id,
    title: meta.title,
    duration: meta.duration,
    start() {
      started = true;
      answered = false;
      score = 0;
    },
    render(container) {
      container.innerHTML = "";
      const wrap = document.createElement("div");
      wrap.className = "stack";
      wrap.innerHTML = `
        <article class="card">
          <h2>${meta.title}</h2>
          <p class="muted">Instrucció: toca l’acció principal. Els 15 jocs encara no estan construïts; aquesta és la partida genèrica.</p>
        </article>
      `;
      const action = document.createElement("button");
      action.className = "btn btn-primary";
      action.type = "button";
      action.textContent = answered ? "Resposta enviada" : "Acció principal";
      action.disabled = !started || answered;
      wrap.appendChild(action);
      container.appendChild(wrap);
      return action;
    },
    submitAnswer() {
      if (!started || answered) return { ok: false, message: "No hi ha cap acció pendent." };
      answered = true;
      score = 80;
      return { ok: true, score };
    },
    getScore() {
      return score;
    },
    getShareText() {
      return `TrophyLeagues Daily · ${meta.title}: ${score} punts`;
    },
    reset() {
      started = false;
      answered = false;
      score = 0;
    }
  };
}
