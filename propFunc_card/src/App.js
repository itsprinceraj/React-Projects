import { ProductForm } from "./components/ProductForm";
import "./App.css";

import Products from "./components/Products";

function App() {
  const products = [
    {
      id: "p1",
      title: "Wheel",
      amount: 100,
      date: new Date(2004, 9, 11),
    },
    {
      id: "p2",
      title: "Ariel",
      amount: 250,
      date: new Date(2002, 1, 21),
    },
    {
      id: "p3",
      title: "SurfExcel",
      amount: 200,
      date: new Date(2007, 3, 31),
    },
    {
      id: "p4",
      title: "Tide",
      amount: 170,
      date: new Date(2010, 10, 19),
    },
  ];

  // prop-function for child to parent Communication . this concept is also known as lifting-up ;

  function propFunc1(data) {
    console.log("i am inside app.js");
    console.log(data);
  }
  return (
    <>
      <ProductForm propfunc={propFunc1} />
      <Products items={products} />
    </>
  );
}

export default App;
