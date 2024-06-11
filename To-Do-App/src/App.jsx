import "./App.css";

import TodoInput from "./components/TodoInput";
import Dates from "./components/Date";
import { Time } from "./components/Time";
import { Todoitems } from "./components/Todoitems";
import styles from "./components/Date.module.css";
import { useState } from "react";
import { EmptyMsg } from "./components/EmptyMsg";
import { ItemContext } from "./store/ToDoItemStore";

function App() {
  let initialTodoItems = [
    // {
    //   todo: "Play Cricket",
    //   dueDate: "2004-02-26",
    // },
    // {
    //   todo: "Go to college Event",
    //   dueDate: "2024-02-16",
    // },
    // {
    //   todo: "Read Books",
    //   dueDate: "2024-02-19",
    // },
  ];

  // Define State For items in to-do list

  const [todoItem, setTodoItem] = useState(initialTodoItems);

  // Calling props on adding Item

  const addNewItem = (item, date) => {
    let addedItems = {
      todo: item,
      dueDate: date,
    };

    // const newTodoItems = [...todoItem, addedItems];

    // Setting State for newly Added items in the list

    // we'll Do functional update instead of using spread operator

    setTodoItem((currVal) => [...currVal, addedItems]);
  };

  // Delete Button functionality

  const deleteItem = (itemName) => {
    const newTodoItems = todoItem.filter((items) => items.todo !== itemName);

    setTodoItem(newTodoItems);
  };

  // const defaultItem = {
  //   todo: "buy Ghee",
  //   dueDate: "Daily",
  // };

  return (
    <ItemContext.Provider
      value={{
        todoItem: todoItem,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <div className="container">
        <div className={styles["date-time"]}>
          <Dates></Dates>
          <Time></Time>
        </div>
        <div className="item">
          {/*  Heading of To do app */}

          <h1 className="heading">To Do App</h1>

          {/* Input component  */}

          <TodoInput></TodoInput>
        </div>

        {/* ToDo Items Componets */}

        <Todoitems></Todoitems>

        {/* Empty message will show when no items in the toDo List */}

        <EmptyMsg></EmptyMsg>
      </div>
    </ItemContext.Provider>
  );
}

export default App;
