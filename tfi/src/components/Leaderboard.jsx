import './Leaderboard.css';

export function Leaderboard({ leaderboard, onClear }) {
  return (
    <aside className="leaderboard">
      <div className="leaderboardTitle">
        <h2>Mejores puntajes</h2>
        {leaderboard.length > 0 && (
          <button className="link-button" type="button" onClick={onClear}>
            Limpiar
          </button>
        )}
      </div>

      {leaderboard.length === 0 ? (
        <p className="empty-chain">Juga una partida para guardar tu primer puntaje.</p>
      ) : (
        <ol>
          {leaderboard.map((entry, index) => (
            <li key={`${entry.date}-${index}`}>
              <span>{entry.score} pts</span>
              <small>{entry.words} palabras</small>
            </li>
          ))}
        </ol>
      )}
    </aside>
  );
}