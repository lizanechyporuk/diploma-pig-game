import { useState } from "react";

const useDiceState = () => {
  const [dice, setDice] = useState(null);

  const rollDice = () => {
    const diceValue = Math.trunc(Math.random() * 6) + 1;
    setDice(diceValue);
    return diceValue;
  };

  const resetDice = () => {
    setDice(null);
  };

  return { dice, rollDice, resetDice };
};

export default useDiceState;
