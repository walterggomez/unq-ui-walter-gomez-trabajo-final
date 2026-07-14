import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { GAME_STATUS, INITIAL_FEEDBACK, TURN_SECONDS } from '../constants/game.js';
import { validateWordInDictionary } from '../services/dictionaryApi.js';
import { clearLeaderboardEntries, readLeaderboard, saveLeaderboardEntry} from '../services/leaderboardStorage.js';
import { displayWord, getLocalValidationError, normalizeWord, scoreFor } from '../utils/words.js';

export function useWordChainGame() {
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.idle);
  const [words, setWords] = useState([]);
  const [input, setInput] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(TURN_SECONDS);
  const [feedback, setFeedback] = useState(INITIAL_FEEDBACK);
  const [isChecking, setIsChecking] = useState(false);
  const [leaderboard, setLeaderboard] = useState(readLeaderboard);
  
  const inputRef = useRef(null);

  const score = useMemo(() => words.reduce((total, word) => total + scoreFor(word), 0), [words]);
  const lastWord = words.at(-1);
  const nextLetter = lastWord ? normalizeWord(lastWord).at(-1) : null;
  const hasStartedTimer = gameStatus === GAME_STATUS.playing && words.length > 0;

  const startGame = () => {
    setGameStatus(GAME_STATUS.playing);
    setWords([]);
    setInput('');
    setSecondsLeft(TURN_SECONDS);    
    setFeedback({ type: 'info', text: 'Ingresa cualquier palabra valida para iniciar la cadena.' });
  };

  const resetGame = () => {
    setGameStatus(GAME_STATUS.idle);
    setWords([]);
    setInput('');
    setSecondsLeft(TURN_SECONDS);    
    setFeedback(INITIAL_FEEDBACK);
  };

  const finishGame = useCallback(() => {
    setGameStatus(GAME_STATUS.finished);
    const updatedLeaderboard = saveLeaderboardEntry({
      score,
      words: words.length,
      chain: words.join(' -> '),
      date: new Date().toISOString()
    });

    setLeaderboard(updatedLeaderboard);
    setFeedback({ type: 'danger', text: 'Tiempo terminado. La partida finalizo.' });

  }, [score, words]);

  useEffect(() => {
    if (gameStatus === GAME_STATUS.playing) {
      inputRef.current?.focus();
    }
  }, [gameStatus]);

  useEffect(() => {
    if (!hasStartedTimer) return undefined;

    const timerId = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          window.clearInterval(timerId);
          finishGame();
          return 0;
        }
        return current - 1;
      });
    }, 1000);
    return () => window.clearInterval(timerId);
  }, [hasStartedTimer,finishGame]);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (gameStatus !== GAME_STATUS.playing || isChecking) return;

    const candidate = displayWord(input);
    const localError = getLocalValidationError({ word: candidate, words, nextLetter });

    if (localError) {
      setFeedback({ type: 'danger', text: localError });
      return;
    }

    setIsChecking(true);
    setFeedback({ type: 'info', text: 'Validando palabra en el diccionario...' });

    try {
      const exists = await validateWordInDictionary(candidate);

      if (!exists) {
        setFeedback({ type: 'danger', text: 'La palabra no existe en el diccionario.' });
        return;
      }

      setWords((currentWords) => [...currentWords, candidate]);
      setInput('');
      setSecondsLeft(TURN_SECONDS);
      setFeedback({ type: 'success', text: `"${candidate}" suma ${scoreFor(candidate)} puntos. Sigue la cadena.` });
    } catch (error) {
      setFeedback({ type: 'danger', text: error.message });
    } finally {
      setIsChecking(false);
    }
  };

  const clearLeaderboard = () => {
    clearLeaderboardEntries();
    setLeaderboard([]);
  };

  return {
    gameStatus,
    words,
    input,
    setInput,
    secondsLeft,
    feedback,
    isChecking,
    leaderboard,
    inputRef,
    score,
    nextLetter,
    hasStartedTimer,
    startGame,
    resetGame,
    handleSubmit,
    clearLeaderboard
  };
}