import '../styles/ResultCard.css';

export function ResultCard({ isFinished, wordsCount }) {
  return (
    <aside className="result-card">
      <span className="game-icon small" aria-hidden="true">{isFinished ? '🏁' : '🔗'}</span>
      <h2>{isFinished ? 'Resultado final' : 'Cadena actual'}</h2>
      <p>{wordsCount} palabras validas</p>
    </aside>
  );
}