import React, { useState } from "react";

export const Form = () => {
  const [formData, setFormDAta] = useState({
    firstName: "",
    lastName: "",
    isvisible: true,
    mode: "",
    favCar: "",
  });
//   console.log(formData);

  // function changeHandler(event) {
  //   setFormDAta((prevState) => {
  //     return {
  //       ...prevState, // it is important to put a copy of prevState, so that previous data can not be lost
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // }

  // controlled Component -> the component in which the state is managed inside it , and each and every elemnent has a track of its data

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormDAta((prevState) => {
      // return the object and add value according to name and target
      // return { ...prevState, [event.target.name]: event.target.value };

      // return object and concern checkbox
      return { ...prevState, [name]: type === "checkbox" ? checked : value };
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("The Whole Data of Form is here: ");
    console.log(formData);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="firstName"
        name="firstName"
        value={formData.firstName} // keep track of its own value
        onChange={changeHandler}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="lastName"
        name="lastName"
        value={formData.lastName} // keep track of its own state
        onChange={changeHandler}
      />

      {/* // lets add a checkbox  button  */}

      <br />
      <br />
      <input
        type="checkbox"
        name="isvisible"
        id="isvisible"
        checked={formData.isvisible}
        // checkbox type input does not contain value attribute
        onChange={changeHandler}
      />
      <label htmlFor="isvisible">Check me !</label>

      <br />
      <br />

      {/* // lets add a Radio button  */}

      <fieldset>
        <legend>Mode:</legend>
        <input
          type="radio"
          name="mode"
          id="online-mode"
          onChange={changeHandler}
          value="Online-mode"
          checked={formData.mode === "Online-mode"}
        />
        <label htmlFor="online-mode">Online-Mode</label>

        <br />
        <br />

        <input
          type="radio"
          name="mode"
          id="offline-mode"
          onChange={changeHandler}
          value="Offline-mode"
          checked={formData.mode === "Offline-mode"}
        />
        <label htmlFor="offline-mode">Offline-Mode</label>
      </fieldset>

      <br />
      <br />

      {/* lets Add Select tag */}

      <label htmlFor="favCar">Tell me your Favourite Car: </label>
      <select
        name="favCar"
        value={formData.favCar}
        onChange={changeHandler}
        id="favCar"
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="Scorpio">Scorpio</option>
        <option value="Tharr">Tharr</option>
        <option value="Fortuner">Fortuner</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Rang Rover">Range Rover</option>
      </select>

      {/* <input type="submit" value="submit" /> */}
      <button>Submit</button>

      {/* whenever button is used inside form tag , then a onSubmit listener is invoked  */}
    </form>
  );
};
