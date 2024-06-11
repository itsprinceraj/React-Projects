import { useEffect, useState } from "react";

function UseEffectTrial(props) {
  const [val, setVal] = useState("");
  //   const [name, setName] = useState("prince");

  function onChangeHandler(event) {
    setVal(event.target.value);
    console.log(val);
  }

  // useEffect hook is used to manage side effects in our App;

  // Variation 1 --> it will be executed after each redering cycle;
  // useEffect(() => {
  //   // function which is invoked inside useEffect will run after the components render
  //   console.log("UI rendering Done");
  // });

  // variation 2 --> it will be executed on first rendering cycle;

  // useEffect(()=>{
  //   console.log("OnFirst Render");
  // },[])  // it is called depedency array list ,

  // variation 3 --> it will be executed on first render +  when dependency array will commit some changes ;

  // useEffect(() => {
  //   console.log("on first render and when dependecy array changes ");
  // }, [val]);

  // variation 4 --> we can use useEffect for code cleanup also . for example if you apply eventlistener on something and you want to apply another listener to it , but you also want to remove the previous one;

  useEffect(() => {
    console.log("listener added ");

    return () => {
      // this code will run first after first render cycle
      console.log("listener removed");
    };
  }, [val]);

  return (
    <div className="App">
      <input type="text" onChange={onChangeHandler} />
    </div>
  );
}

export default UseEffectTrial;
