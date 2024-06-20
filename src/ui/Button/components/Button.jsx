import styles from "./Button.module.scss";

function Button({ onClick, text, classBtn, disabled }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${styles[classBtn]} ${disabled ? styles.btn__disabled : ""}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
