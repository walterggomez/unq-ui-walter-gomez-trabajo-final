import { LEADERBOARD_KEY } from '../constants/game.js';

export const readLeaderboard = () => {
  try {
    return JSON.parse(localStorage.getItem(LEADERBOARD_KEY)) ?? [];
  } catch {
    return [];
  }
};

export const saveLeaderboardEntry = (entry) => {
  const updated = [...readLeaderboard(), entry]
    .sort((a, b) => b.score - a.score || b.words - a.words || a.date.localeCompare(b.date))
    .slice(0, 10);

  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(updated));
  return updated;
};

export const clearLeaderboardEntries = () => {
  localStorage.removeItem(LEADERBOARD_KEY);
};