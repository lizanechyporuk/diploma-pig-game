import { useState } from "react";

const useGameState = () => {
  const [playing, setPlaying] = useState(true);

  const startNewGame = () => {
    setPlaying(true);
  };

  const endGame = () => {
    setPlaying(false);
  };

  return { playing, startNewGame, endGame };
};

export default useGameState;
