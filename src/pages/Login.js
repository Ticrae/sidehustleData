import React, { useState } from "react";

const Login = () => {
  const [inputValue, setinputValue] = useState({
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

    const getUserArr = localStorage.getItem("User");
    // console.log(getUserArr);

    const { email, password } = inputValue;

    if (email === "") {
      alert("Email field is required");
    } else if (password === "") {
      alert("Password field is required");
    } else if (!email.includes("@")) {
      alert("Email specification not met");
    } else if (password.length < 5) {
      alert("Password cannot be less than 5 characters");
    } else {
      // console.log("Successfully registered");

      if (getUserArr && getUserArr.length) {
        const userdata = JSON.parse(getUserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        console.log(userlogin);
        if (userlogin.length == 0) {
          alert("Invalid details");
        } else {
          console.log("login successful");
        }
      }
    }
  };

  return (
    <div>
      <form onSubmit={addData}>
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

export default Login;
