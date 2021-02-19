/** @format */

import React from "react";
import classes from "./SignIn.module.css";
const SignIn = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.box}>
        <h2 className={classes.heading}>Log In</h2>
        <p className={classes.text}>Email</p>
        <input className={classes.input} type={"email"} placeholder={"Email"} />
        <p className={classes.text}>Password</p>
        <input
          className={classes.input}
          type={"password"}
          placeholder={"Password"}
        />
        <p className={classes.Register}>New User? Register Here</p>
        <button className={classes.btn}>Log In</button>
      </div>
    </div>
  );
};

export default SignIn;
