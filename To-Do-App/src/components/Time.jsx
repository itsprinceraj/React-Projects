import { useEffect } from "react";
import { useState } from "react";

export function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return ()=>{
      clearInterval(timerId)
    }
  }, []);

  return (
    <>
      <p>Current Time: {time.toLocaleTimeString()}</p>
    </>
  );
}
