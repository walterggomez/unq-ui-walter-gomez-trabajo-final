import '../styles/GamePanel.css'; 
import { Stat } from './Stat.jsx';
import { IdleState } from './IdleState.jsx'
import { GAME_STATUS } from '../constants/game.js';
import { PlayArea } from './PlayArea.jsx';

export function GamePanel({
  gameStatus,
  score,
  secondsLeft,
  hasStartedTimer,
  words,
  input,
  feedback,
  isChecking,
  nextLetter,
  inputRef,
  onInputChange,
  onSubmit,
  onStartGame,
  onResetGame
}) {
  return (
    <section className="gamePanel" aria-label="Juego Palabras Encadenadas">
      <div className="statsRow">
        <Stat label="Puntos" value={score} accent />
        <Stat label="Tiempo" value={`${secondsLeft}s`} danger={secondsLeft <= 5 && hasStartedTimer} />
        <button className="button secondary" type="button" onClick={onResetGame}>
          Reiniciar
        </button>
      </div>

      {gameStatus === GAME_STATUS.idle && <IdleState onStartGame={onStartGame} />}

      {gameStatus !== GAME_STATUS.idle && (
        <PlayArea
          gameStatus={gameStatus}
          words={words}
          input={input}
          feedback={feedback}
          isChecking={isChecking}
          nextLetter={nextLetter}
          inputRef={inputRef}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          onStartGame={onStartGame}
        />
      )}
    </section>
  );
}