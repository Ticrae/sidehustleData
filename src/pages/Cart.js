import React, { useState } from "react";

const Cart = () => {
  const [inputValue, setinputValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  // console.log(inputValue);

  const [Data, setData] = useState([]);

  const getData = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;

    setinputValue(() => {
      return {
        ...inputValue,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    // console.log(inputValue);

    const { name, email, password } = inputValue;

    if (name === "") {
      alert("Name field is required");
    } else if (email === "") {
      alert("Email field is required");
    } else if (password === "") {
      alert("Password field is required");
    } else if (!email.includes("@")) {
      alert("Email specification not met");
    } else if (password.length < 5) {
      alert("Password cannot be less than 5 characters");
    } else {
      // console.log("Successfully registered");

      localStorage.setItem("User", JSON.stringify([...Data, inputValue]));
    }
  };

  return (
    <div>
      <form onSubmit={addData}>
        <input
          type={"text"}
          placeholder={"Enter your name"}
          onChange={getData}
          name={"name"}
        />
        <input
          type={"text"}
          placeholder={"Enter your email"}
          onChange={getData}
          name={"email"}
        />
        <input
          type={"password"}
          placeholder={"Enter your password"}
          onChange={getData}
          name={"password"}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Cart;
