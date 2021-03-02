/** @format */

import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ImCross } from "react-icons/im";
import classes from "./SignIn.module.css";
import { SIGN_IN } from "./Mutations";
import { useForm } from "../../Hooks/useForm";

const SignIn = ({ showSideDrawer }) => {
  const [state, dispatch] = useReducer(useForm, { email: "", password: "" });
  const [signIn] = useMutation(SIGN_IN);
  const SubmitHandler = async () => {
    const { errors, data } = await signIn({
      variables: { email: state.email, password: state.password },
    });
    console.log(errors);
    console.log(data);
  };
  return (
    <div className={classes.Container}>
      <div className={classes.box}>
        <div className={classes.cross}>
          <ImCross onClick={showSideDrawer} color={"white"} size={20} />
        </div>
        <h2 className={classes.heading}>Log In</h2>
        <p className={classes.text}>Email</p>
        <input
          name='email'
          className={classes.input}
          type={"email"}
          value={state.email}
          placeholder={"Email"}
          onChange={(event) => {
            dispatch({
              type: "change",
              data: { payload: event.target.value, type: event.target.name },
            });
          }}
        />
        <p className={classes.text}>Password</p>
        <input
          onChange={(event) => {
            dispatch({
              type: "change",
              data: { payload: event.target.value, type: event.target.name },
            });
          }}
          name='password'
          value={state.password}
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
        <button onClick={SubmitHandler} className={classes.btn}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
