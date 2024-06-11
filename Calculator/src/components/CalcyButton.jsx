import styles from "./CalcyButton.module.css";

export const CalcyButton = ({ onButtonClick }) => {
  //  Creating An Array for Calcy Button

  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((button) => (
        <button
          key={button}
          className={styles.buttonItself}
          onClick={() => onButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};
