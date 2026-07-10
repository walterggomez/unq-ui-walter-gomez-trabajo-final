import './GamePanel.css'; 
import { Stat } from './Stat.jsx';
import { IdleState } from './IdleState.jsx'

export function GamePanel({ score, secondsLeft }) {
  return (
    <section className="gamePanel" aria-label="Juego Palabras Encadenadas">
      <div className="statsRow">
        <Stat label="Puntos" value={score} accent />
        <Stat label="Tiempo" value={`${secondsLeft}s`} />
        
        
        <button className="button secondary" type="button" disabled>Reiniciar</button>
      </div>
      <IdleState />
    </section>
  );
}