import { Header } from './components/Header.jsx';
import { GamePanel } from './components/GamePanel.jsx';
import { ChainSection } from './components/ChainSection.jsx';
import { Leaderboard } from './components/Leaderboard.jsx';
import { useWordChainGame } from './hooks/useWordChainGame.js';
import './App.css'; 

function App() {
  const game = useWordChainGame();

  return (
    <main className="app-shell">
      <Header />
      
      <GamePanel
        gameStatus={game.gameStatus}
        score={game.score}
        secondsLeft={game.secondsLeft}
        hasStartedTimer={game.hasStartedTimer}
        words={game.words}
        input={game.input}
        feedback={game.feedback}
        isChecking={game.isChecking}
        nextLetter={game.nextLetter}
        inputRef={game.inputRef}
        onInputChange={game.setInput}
        onSubmit={game.handleSubmit}
        onStartGame={game.startGame}
        onResetGame={game.resetGame}
      />

      <section className="content-grid">
        <ChainSection words={game.words} />
        <Leaderboard leaderboard={game.leaderboard} onClear={game.clearLeaderboard} />
      </section>
    </main>
  );
}

export default App;
