import "./DarkMode.css";
import { Heading } from "./components/Heading";
import { Testimonial } from "./components/Testimonial";

import data from "./data";
import { useState } from "react";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  return (
    <div className={`wrappper ${isDarkMode ? "" : "light-mode"}`}>
      <div className={`heading ${isDarkMode ? "" : "light-mode"}`}>
        <Heading />
      </div>

      <div className="testimoni">
        <Testimonial reviews={data} isDarkMode={isDarkMode} setDarkMode={setDarkMode}/>
      </div>
    </div>
  );
}

export default App;
