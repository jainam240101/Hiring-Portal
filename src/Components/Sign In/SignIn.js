/** @format */

import { Link } from "react-router-dom";
import React from "react";
import { ImCross } from "react-icons/im";
import classes from "./SignIn.module.css";
const SignIn = ({ showSideDrawer }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.box}>
        <div className={classes.cross}>
          <ImCross onClick={showSideDrawer} color={"white"} size={20} />
        </div>
        <h2 className={classes.heading}>Log In</h2>
        <p className={classes.text}>Email</p>
        <input className={classes.input} type={"email"} placeholder={"Email"} />
        <p className={classes.text}>Password</p>
        <input
          className={classes.input}
          type={"password"}
          placeholder={"Password"}
        />
        <p className={classes.Register}>
          New User?{" "}
          <span className={classes.link}>
            <Link to={"/register"}>Register</Link>
          </span>{" "}
          Here
        </p>
        <button className={classes.btn}>Log In</button>
      </div>
    </div>
  );
};

export default SignIn;
