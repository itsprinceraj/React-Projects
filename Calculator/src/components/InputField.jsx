import styles from "./InputField.module.css";

export const InputField = ({ displayValue }) => {
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        value={displayValue}
        className={styles.inputField}
      />
    </>
  );
};
