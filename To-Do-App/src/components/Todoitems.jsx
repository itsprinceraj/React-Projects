import { ItemContext } from "../store/ToDoItemStore";
import { useContext } from "react";

import { Item } from "./Item";

export let Todoitems = () => {
  const {todoItem} = useContext(ItemContext);
  // const items = contextObj.todoItem
  // console.log(items);

  return (
    <>
      {todoItem.map((item) => (
        <Item
          key={item.todo}
          todoName={item.todo}
          todoDate={item.dueDate}
        ></Item>
      ))}
    </>
  );
};
