import './WordFrom.css';

export function WordForm() {
  return (
    <form className="word-form">
      <input
        placeholder="Ej: casa"
        disabled
        aria-label="Palabra"
      />
      <button className="button primary compact" type="button" disabled>
        Enviar
      </button>
    </form>
  );
}
