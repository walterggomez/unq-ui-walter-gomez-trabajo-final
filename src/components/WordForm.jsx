import '../styles/WordForm.css';

export function WordForm({
  words,
  input,
  isChecking,
  isFinished,
  nextLetter,
  inputRef,
  onInputChange,
  onSubmit
}) {
  return (
    <form className="word-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        value={input}
        onChange={(event) => onInputChange(event.target.value)}
        placeholder={words.length === 0 ? 'Ej: casa' : `Debe empezar con ${nextLetter?.toUpperCase()}`}
        disabled={isFinished}
        aria-label="Palabra"
      />
      <button className="button primary compact" type="submit" disabled={isFinished || isChecking}>
        {isChecking ? 'Validando...' : 'Enviar'}
      </button>
    </form>
  );
}