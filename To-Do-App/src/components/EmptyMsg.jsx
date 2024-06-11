import { useContext } from "react";
import { ItemContext } from "../store/ToDoItemStore";

export const EmptyMsg = () => {
  const {todoItem} = useContext(ItemContext)
  // const items = contextObj.todoItem
  return (
    <>
      {/* Empty message will show when no items in the toDo List */}

      {todoItem.length === 0 && (
        <center>
          <h3 className="empty-todo-msg">There is nothing to do more</h3>
        </center>
      )}
    </>
  );
};
