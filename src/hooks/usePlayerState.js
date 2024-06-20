import { useState } from "react";

const usePlayerState = () => {
  const [scores, setScores] = useState([0, 0]);
  const [currentScore, setCurrentScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);

  const switchPlayer = () => {
    setCurrentScore(0);
    setActivePlayer(activePlayer === 0 ? 1 : 0);
  };

  const updateScore = (score) => {
    setCurrentScore(currentScore + score);
  };

  const holdCurrentScore = () => {
    const newScores = [...scores];
    newScores[activePlayer] += currentScore;
    setScores(newScores);
    setCurrentScore(0);
  };

  const resetScores = () => {
    setScores([0, 0]);
    setCurrentScore(0);
    setActivePlayer(0);
  };

  return {
    scores,
    currentScore,
    activePlayer,
    switchPlayer,
    updateScore,
    holdCurrentScore,
    resetScores,
  };
};

export default usePlayerState;
