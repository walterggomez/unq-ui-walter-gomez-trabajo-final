import '../styles/ChainSection.css';

export function ChainSection({ words }) {
  return (
    <article className="rulesSection">
      <div className="sectionHeading">
        <span aria-hidden="true">⛓️</span>
        <div>
          <h2>Palabras Encadenadas</h2>
          <p>Forma una cadena donde cada palabra comience con la ultima letra de la anterior.</p>
        </div>
      </div>

      <div className="chainList" aria-live="polite">
        {words.length === 0 ? (
          <p className="emptyChain">Todavia no hay palabras en la cadena.</p>
        ) : (
          words.map((word, index) => (
            <span className="wordChip" key={`${word}-${index}`}>
              {word}
            </span>
          ))
        )}
      </div>
    </article>
  );
}
