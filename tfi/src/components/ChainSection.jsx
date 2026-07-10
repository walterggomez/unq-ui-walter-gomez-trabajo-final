import './ChainSection.css';

export function ChainSection({ words }) {
  return (
    <article className="rules-section">
      <div className="section-heading">
        <span aria-hidden="true">⛓️</span>
        <div>
          <h2>Palabras Encadenadas</h2>
          <p>Forma una cadena donde cada palabra comience con la ultima letra de la anterior.</p>
        </div>
      </div>

      <div className="chain-list" aria-live="polite">
        {words.length === 0 ? (
          <p className="empty-chain">Todavia no hay palabras en la cadena.</p>
        ) : (
          words.map((word, index) => (
            <span className="word-chip" key={`${word}-${index}`}>
              {word}
            </span>
          ))
        )}
      </div>
    </article>
  );
}
