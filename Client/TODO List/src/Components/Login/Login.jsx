import React, { useState } from "react";
import "./Login.css";
import axios from 'axios';
export default function Login({flag , setFlag, homeFlag, setHomeFlag}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange=(e)=> {
    setEmail(e.target.value);
    // console.log(email);
  }
  const handlePasswordChange = (e)=>{
    setPassword(e.target.value);
    // console.log(password);
  }
  const handleSignUpClick = ()=>{
    setFlag(true);
  }

  const handleLoginClick =async (e)=> {
    // console.log("Clicked")
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login',{
        emailId : email,
        password: password,
      });
      // console.log("Login Successful");
      setHomeFlag(true);

    } catch(error) {
      console.log("Error logging in",error);
      alert("An error ocurred",error);
    }
  }

  return (
    <div className="main">  
      <div className="loginParent">
        <a href="#" className="anchor">
          <h2 className="head common">
            Todo <span style={{ color: "blue" }}>List</span>
          </h2>
        </a>
        <p
          className="common"
          style={{
            marginTop: "5%",
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "cursive",
          }}
        >
          Sign in into your account
        </p>
        <p className="common para">
          Don't have an account?{" "}
          <a href="#" onClick={handleSignUpClick} className="anchor">
            Sign Up
          </a>{" "}
          here.
        </p>
        <br />
        <p className="common para">Email Address</p>
        <div className="mb-3 common form">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <br />
        <p className="common para">Password</p>
        <input
          type="password"
          id="inputPassword5"
          className="form-control common form"
          aria-describedby="passwordHelpBlock"
          placeholder="Enter Your Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <br />
        <button onClick={handleLoginClick} type="button" className="btn btn-primary common">
          Sign in {"->"}
        </button>
      </div>
    </div>
  );
}
