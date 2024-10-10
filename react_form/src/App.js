import React, { useState } from "react";
// import { Form } from "./components/Form";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    comment: true,
    candidate: true,
    offer: true,
    pushNotification: "", // radio button
  });

  console.log(formData);

  const changeHandler = (event) => {
    const { name, type, value, checked } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: type === "checkbox" ? checked : value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("the actual and last form data", formData);
  };
  return (
    <div className="wrapper">
      <div className="heading">React Form</div>
      <form className="form-container" onSubmit={submitHandler}>
        {/* the basic info */}

        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          name="firstName"  // name must be same as useState variable;
          placeholder="First Name"
          onChange={changeHandler}
          value={formData.firstName}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          name="lastName"
          placeholder="Last Name"
          onChange={changeHandler}
          value={formData.lastName}
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          value={formData.email}
        />

        {/* select dropdown */}

        <label htmlFor="country">Country</label>

        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="dropdown"
        >
          <option value="India">India</option>
          <option value="Nepal">Nepal</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Canada">Canada</option>
          <option value="China">China</option>
        </select>

        {/* basic info continues */}

        <label htmlFor="address">Street Adress</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Street Adress"
          onChange={changeHandler}
          value={formData.address}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="City"
          onChange={changeHandler}
          value={formData.city}
        />

        <label htmlFor="state">State / Province</label>
        <input
          type="text"
          id="state"
          name="state"
          placeholder="State"
          onChange={changeHandler}
          value={formData.state}
        />

        <label htmlFor="pincode">Zip / Postal code</label>
        <input
          type="text"
          name="pincode"
          id="pincode"
          placeholder="Zip-Code"
          onChange={changeHandler}
          value={formData.pincode}
        />
        <p>By Email</p>

        {/* the checkbox part */}
        <div className="checkbox-container">
          <div className="checkboxx">
            <input
              name="comment"
              id="comment"
              type="checkbox"
              onChange={changeHandler}
              checked={formData.comment}
            />
            <label htmlFor="comment">Comments</label>
            <p>Get Notified when someone posts comment on posting.</p>
          </div>

          <div className="checkboxx">
            <input
              name="candidate"
              id="candidate"
              type="checkbox"
              onChange={changeHandler}
              checked={formData.candidate}
            />
            <label htmlFor="candidate">Candidates</label>
            <p>Get Notified when a candidate apply for a job</p>
          </div>

          <div className="checkboxx">
            <input
              name="offer"
              id="offer"
              type="checkbox"
              onChange={changeHandler}
              checked={formData.offer}
            />
            <label htmlFor="offer">Offers</label>
            <p>Get Notified when a candidate accepts or rejects an offer</p>
          </div>
        </div>

        {/* the radio button part */}

        <p>Push Notifications</p>

        <div className="push-notification">
          <div className="radiobox">
            <input
              name="pushNotification"
              id="everything"
              type="radio"
              onChange={changeHandler}
              value="Everything"
              checked={formData.pushNotification === "Everything"}
            />
            <label htmlFor="everything">Everythig</label>
          </div>

          <div className="radiobox">
            <input
              name="pushNotification"
              type="radio"
              onChange={changeHandler}
              id="same-as-email"
              value="Same as email"
              checked={formData.pushNotification === "Same as email"}
            />
            <label htmlFor="same-as-email">Same as Email</label>
          </div>

          <div className="radiobox">
            <input
              name="pushNotification"
              id="no-push-notification"
              type="radio"
              onChange={changeHandler}
              value="No Push Notification"
              checked={formData.pushNotification === "No Push Notification"}
            />
            <label htmlFor="no-push-notification">No Push Notifications</label>
          </div>
        </div>

        <button className="save-button">Save</button>
      </form>
    </div>
  );
}

export default App;
