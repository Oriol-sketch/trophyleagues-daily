export function renderLeaderboard(parent, { entries, me }) {
  const list = document.createElement("ol");
  list.className = "leaderboard";
  entries.forEach((entry, index) => {
    const li = document.createElement("li");
    if (entry.username === me) li.classList.add("me");
    li.innerHTML = `<span>${index + 1}</span><strong>${entry.username}</strong><span>${entry.score}</span>`;
    list.appendChild(li);
  });
  parent.appendChild(list);
  return list;
}
