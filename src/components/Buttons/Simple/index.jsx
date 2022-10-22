import styles from "../../../styles/components/Buttons/Simple.module.css";

const SimpleButton = ({ type, text, handler }) => {
  return (
    <button onClick={handler} className={styles.button} type={type}>
      {text}
    </button>
  );
};

export default SimpleButton;
