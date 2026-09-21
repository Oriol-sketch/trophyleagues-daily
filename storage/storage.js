const KEY = "tldaily_v1";

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function defaultState() {
  return {
    username: `Jugador ${Math.floor(1000 + Math.random() * 9000)}`,
    attempts: { date: todayISO(), remaining: 3 },
    streak: 0,
    seasonScore: 0,
    scores: [],
    completedChallenges: []
  };
}

function isValidState(value) {
  return Boolean(
    value &&
      typeof value === "object" &&
      typeof value.username === "string" &&
      value.attempts &&
      typeof value.attempts.remaining === "number" &&
      Array.isArray(value.scores) &&
      Array.isArray(value.completedChallenges)
  );
}

export function loadState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      const fresh = defaultState();
      saveState(fresh);
      return { state: fresh, recovered: false };
    }
    const parsed = JSON.parse(raw);
    if (!isValidState(parsed)) {
      const fresh = defaultState();
      saveState(fresh);
      return { state: fresh, recovered: true };
    }
    if (parsed.attempts.date !== todayISO()) {
      parsed.attempts = { date: todayISO(), remaining: 3 };
      saveState(parsed);
    }
    return { state: parsed, recovered: false };
  } catch {
    const fresh = defaultState();
    saveState(fresh);
    return { state: fresh, recovered: true };
  }
}

export function saveState(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function getUser(state) {
  return state.username;
}

export function getAttempts(state) {
  return state.attempts.remaining;
}

export function useAttempt(state) {
  if (state.attempts.remaining <= 0) return state;
  const next = {
    ...state,
    attempts: {
      ...state.attempts,
      remaining: state.attempts.remaining - 1
    }
  };
  saveState(next);
  return next;
}

export function addScore(state, entry) {
  const next = {
    ...state,
    seasonScore: state.seasonScore + (entry.score || 0),
    streak: state.streak + 1,
    scores: [...state.scores, entry]
  };
  saveState(next);
  return next;
}

export function markChallengeComplete(state, challengeId) {
  if (state.completedChallenges.includes(challengeId)) return state;
  const next = {
    ...state,
    completedChallenges: [...state.completedChallenges, challengeId]
  };
  saveState(next);
  return next;
}

export function resetTestState() {
  const fresh = defaultState();
  saveState(fresh);
  return fresh;
}
