import './PlayArea.css';
import { WordForm } from './WordForm.jsx';
import { ResultCard } from './ResultCard.jsx';

export function PlayArea({ words, nextLetter }) {
  return (
    <div className="play-layout">
      <div className="input-zone">
        <div>
          <p className="eyebrow">{`Siguiente letra: ${nextLetter?.toUpperCase()}`}</p>
          <h1>Continua la cadena</h1>
        </div>

        <WordForm />

        <p className="feedback" role="status">
          Esperando jugada...
        </p>
      </div>

      <ResultCard wordsCount={words.length} />
    </div>
  );
}