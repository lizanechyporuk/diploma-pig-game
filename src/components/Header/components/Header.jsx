import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <img
        src={`${process.env.PUBLIC_URL}/icons/shared/logo.svg`}
        alt="Logo"
        className={styles.image}
      />
      <p className={styles.heading}>Dice it</p>
    </header>
  );
}

export default Header;
