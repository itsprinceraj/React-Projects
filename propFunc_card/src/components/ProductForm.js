import { useState } from "react";
import styles from "./ProductForm.module.css";

export const ProductForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // useState hook is scheduled , and you can also track the previous state.

  const onTitleChangeHandler = (event, prevState) => {
    // let obj = { ...prevState };

    setTitle(event.target.value);
  };

  const onDateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // console.log("title:", title);
    // console.log("date:", date);

    // return object
    let obj = { title: title, date: date };
    // console.log(obj);
    setDate("");
    setTitle("");
    props.propfunc(obj);
    return obj;
  };

  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.productTitle}>
          <label>Title</label>
          <input
            className={styles.titleInput}
            type="text"
            value={title}
            onChange={onTitleChangeHandler}
          />
        </div>
        <div className={styles.productDate}>
          <label>Date</label>
          <input
            className={styles.dateInput}
            type="date"
            value={date}
            min="2023-10-31"
            max="2023-12-31"
            onChange={onDateChangeHandler}
          />
        </div>
        <div>
          <button className={styles.button} type="submit">
            Add Product
          </button>
        </div>
      </form>
    </>
  );
};
