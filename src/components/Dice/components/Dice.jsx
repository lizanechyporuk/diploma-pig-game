import styles from "./Dice.module.scss";

function Dice({ dice }) {
  if (!dice) return null;

  return (
    <img
      src={`${process.env.PUBLIC_URL}/img/Dice/dice-${dice}.png`}
      alt="Playing dice"
      className={styles.dice}
    />
  );
}

export default Dice;
