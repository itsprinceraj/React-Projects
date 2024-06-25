import "./ProductItems.css";
import { Card } from "./Card";
import { ProductDate } from "./ProductDate";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
export const ProductItem = (props) => {
  const [val, setVal] = useState(props.title);

  function clickHandler() {
    console.log("button Clicked");
    setVal("Popcorn");
  }

  // useEffect(() => {
  //   flushSync(() => {
  //     setVal("Prince");
  //   });
  // }, []);

  return (
    <Card className="product_item">
      <ProductDate data={props.date} />
      <div>
        <h2 className="title">{val}</h2>
      </div>
      <button onClick={clickHandler}>Add to cart</button>
    </Card>
  );
};
