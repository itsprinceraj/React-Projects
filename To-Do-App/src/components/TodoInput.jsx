import React, { useState, useRef } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { useContext } from "react";
import { ItemContext } from "../store/ToDoItemStore";

//      Main component

function TodoInput() {
  // const [todoName , SetTodoName] = useState("")
  // const [todoDate , setTodoDate] = useState("")
  const {addNewItem} = useContext(ItemContext);
  const {deleteItem} = useContext(ItemContext);
  const todoNameVal = useRef();
  const todoDateVal = useRef();

  // const [disablAdd, setDisable] = useState(true);

  // Event calling function on change in todo *Name input field

  // const onNameChange = (event) => {
  //   SetTodoName(event.target.value);
    

  //   // console.log(event);

  //   // if (event.target.value === "") {
  //   //   setDisable(true);
  //   // } else {
  //   //   setDisable(false);
  //   // }
  // };

  // Event calling function on change in todo *Date input field

  // const onDateChange = (event) => {
  //   setTodoDate(event.target.value);
    
  //   // console.log(`no.of changes :  ${inputVal.current}`);
  //   // console.log(setTodoDate(event));

  //   // if (event.target.value.includes(todoDate) && todoName === "") {
  //   //   setDisable(true);
  //   // }
  // };

  // Handle Add Functionality of to-do list

  const handleAddItem = (event) => {
    // console.log(todoName, todoDate);
    event.preventDefault(); // preventing the default event of browser
    const todoName = todoNameVal.current.value
    const todoDate = todoDateVal.current.value
    todoNameVal.current.value = ""
    todoDateVal.current.value = ""
    addNewItem(todoName, todoDate);
    // setDisable(true);
  };

  return (
    <React.Fragment>
      <form className="row items" onSubmit={handleAddItem}>
        <div className="col-4">
          <input
            type="text"
            ref={todoNameVal}
            required
            // value={todoNameVal}
            placeholder="Enter your To-Do"
            // onChange={onNameChange}
          />
        </div>
        <div className="col-4">
          <label htmlFor="dueDAte"></label>
          <input
            type="date"
            required
            ref={todoDateVal}
            id="dueDAte"
            // onChange={onDateChange}
            // value={todoDate}
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success btn-action"
            // disabled={disablAdd}
            // onKeyDown={handleAddItem}
          >
            <MdAssignmentAdd />
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default TodoInput;
