import styles from "../../../styles/components/Buttons/Simple.module.css";

const SimpleButton = ({ type, text }) => {
  return (
    <button className={styles.button} type={type}>
      {text}
    </button>
  );
};

export default SimpleButton;
