import '../styles/IdleState.css';

export function IdleState({ onStartGame }) {
  return (
    <div className="heroState">
      <span className="gameIcon" aria-hidden="true">🎮</span>
      <h1>¿Listo para jugar?</h1>
      <p>Forma una cadena de palabras lo mas larga posible. Cada turno dura 15 segundos.</p>
      <button className="button primary" type="button" onClick={onStartGame}>
        ▶ Iniciar Juego
      </button>
    </div>
  );
}