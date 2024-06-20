import { useState } from "react";
import styles from "./GameSection.module.scss";
import PlayerHalf from "../../../components/PlayerHalf";
import Button from "../../../ui/Button/components/Button";
import Dice from "../../../components/Dice/components/Dice";
import useGameState from "../../../hooks/useGameState";
import usePlayerState from "../../../hooks/usePlayerState";
import useDiceState from "../../../hooks/useDiceState";

function GameSection() {
  const { playing, startNewGame, endGame } = useGameState();

  const {
    scores,
    currentScore,
    activePlayer,
    switchPlayer,
    updateScore,
    holdCurrentScore,
    resetScores,
  } = usePlayerState();

  const { dice, rollDice, resetDice } = useDiceState();

  const init = () => {
    resetScores();
    startNewGame();
    resetDice();
  };

  const handleRollDice = () => {
    if (playing) {
      const diceValue = rollDice();

      if (diceValue !== 1) {
        updateScore(diceValue);
      } else {
        switchPlayer();
      }
    }
  };

  const handleHoldScore = () => {
    if (playing) {
      holdCurrentScore();

      if (scores[activePlayer] + currentScore >= 100) {
        endGame();
        resetDice();
      } else {
        switchPlayer();
      }
    }
  };

  return (
    <section className={styles.game__section}>
      <PlayerHalf
        id="0"
        name="Player 1"
        score={scores[0]}
        current={activePlayer === 0 ? currentScore : 0}
        isActive={activePlayer === 0}
        isWinner={!playing && activePlayer === 0}
      />

      <PlayerHalf
        id="1"
        name="Player 2"
        score={scores[1]}
        current={activePlayer === 1 ? currentScore : 0}
        isActive={activePlayer === 1}
        isWinner={!playing && activePlayer === 1}
      />

      <Dice dice={dice} />

      <Button text="🔁 New game" classBtn="btn__new" onClick={init} />

      <Button
        text="🎲 Roll dice"
        classBtn="btn__roll"
        onClick={handleRollDice}
        disabled={!playing}
      />

      <Button
        text="📥 Hold"
        classBtn="btn__hold"
        onClick={handleHoldScore}
        disabled={!playing}
      />
    </section>
  );
}

export default GameSection;
