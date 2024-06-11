import "./index.css";
import { InputField } from "./components/InputField";
import styles from "./App.module.css";
import { CalcyButton } from "./components/CalcyButton";
import { useState } from "react";

function App() {
  let [displayVal, setDisplay] = useState("");
  // console.log(displayVal);


  // Handling Buttons Value in Calcy

  const handleButtonClick = (buttonText) => {
    // console.log(buttonText);

    if (buttonText === "C") {
      setDisplay("");
    } else if (buttonText === "=") {
      const result = eval(displayVal);
      setDisplay(result);
    } else {
      const newInputVal = displayVal + buttonText;
      setDisplay(newInputVal);
    }
  };

  return (
    <div className={styles.container}>
      <InputField displayValue={displayVal}></InputField>
      <CalcyButton onButtonClick={handleButtonClick}></CalcyButton>
    </div>
  );
}

export default App;
