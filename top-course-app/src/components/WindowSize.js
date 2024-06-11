import { useEffect, useState } from "react";

function WindoSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const windoHandler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      window.addEventListener("resize", windoHandler);

      return () => {
        window.removeEventListener("resize", windoHandler);
      };
    };
  });

  return (
    <div>
      <h1>windo Size</h1>
      <p>{windowSize.width}</p>
      <p>{windowSize.height}</p>
    </div>
  );
}

export default WindoSize;
