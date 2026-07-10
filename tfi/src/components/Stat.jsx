import './Stat.css';
export function Stat({ label, value, accent = false, danger = false }) {
  return (
    <div className="stat">
      <span>{label}</span>
      <strong className={`${accent ? 'accent' : ''} ${danger ? 'danger' : ''}`}>{value}</strong>
    </div>
  );
}