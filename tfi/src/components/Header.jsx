import './Header.css';

export function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="Palabras Encadenadas">
        <span className="brand-mark" aria-hidden="true">🧠</span>
        <span>Palabras Encadenadas</span>
      </a>
    </header>
  );
}