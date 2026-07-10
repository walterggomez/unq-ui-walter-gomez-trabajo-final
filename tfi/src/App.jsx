import { Header } from './components/Header.jsx';
import { GamePanel } from './components/GamePanel.jsx';
import { ChainSection } from './components/ChainSection.jsx';
import { Leaderboard } from './components/Leaderboard.jsx';
import './styles.css'; 

function App() {
  return (
    <main className="app-shell">
      <Header /> 
      <div className="game-container"> 
        <GamePanel 
          score={0} 
          secondsLeft={15} 
        />
        
        <section className="content-grid">
          <ChainSection words={[]} />
          <Leaderboard leaderboard={[]} onClear={() => {}} />
        </section>
      </div>
    </main>
  );
}

export default App;