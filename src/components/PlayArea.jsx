import '../styles/PlayArea.css';
import { WordForm } from './WordForm.jsx';
import { ResultCard } from './ResultCard.jsx';
import { GAME_STATUS } from '../constants/game.js';

export function PlayArea({
  gameStatus,
  words,
  input,
  feedback,
  isChecking,
  nextLetter,
  inputRef,
  onInputChange,
  onSubmit,
  onStartGame
}) {
  const isFinished = gameStatus === GAME_STATUS.finished;

  return (
    <div className="play-layout">
      <div className="input-zone">
        <div>
          <p className="eyebrow">{words.length === 0 ? 'Primera palabra' : `Siguiente letra: ${nextLetter?.toUpperCase()}`}</p>
          <h1>{isFinished ? 'Partida finalizada' : 'Continua la cadena'}</h1>
        </div>

        <WordForm
          words={words}
          input={input}
          isChecking={isChecking}
          isFinished={isFinished}
          nextLetter={nextLetter}
          inputRef={inputRef}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
        />

        <p className={`feedback ${feedback.type}`} role="status">
          {feedback.text}
        </p>
      </div>

      <ResultCard isFinished={isFinished} wordsCount={words.length} onStartGame={onStartGame} />
    </div>
  );
}