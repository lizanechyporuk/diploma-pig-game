import styles from "./PlayerHalf.module.scss";

function PlayerHalf({ id, name, score, current, isActive, isWinner }) {
  return (
    <section
      className={`${styles.player} ${isActive ? styles.player__active : ""} ${
        isWinner ? styles.player__winner : ""
      }`}
    >
      <h2 className={styles.name} id={`name--${id}`}>
        {name}
      </h2>

      <p className={styles.score} id={`score--${id}`}>
        {score}
      </p>

      <div className={styles.current}>
        <p className={styles.current__label}>Current</p>

        <p className={styles.current__score} id={`current--${id}`}>
          {current}
        </p>
      </div>
    </section>
  );
}

export default PlayerHalf;
