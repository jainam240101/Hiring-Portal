/** @format */

import React, { Fragment, useReducer } from "react";
import classes from "./Register.module.css";
import RegisterSVG from "../../assets/Register.svg";
import { useMutation } from "@apollo/client";
import { RegisterHandler } from "./Mutation";
import { useForm } from "../../Hooks/useForm";

const Register = () => {
  const [signUp] = useMutation(RegisterHandler);
  const [state, dispatch] = useReducer(useForm, {
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Gender: "",
    Bio: "",
  });
  const SubmitHandler = async () => {
    const { errors, data } = await signUp({
      variables: {
        name: state.Name,
        email: state.Email,
        password: state.Password,
        gender: state.Gender,
        bio: state.Bio,
      },
    });
    console.log(errors);
    console.log(data);
  };
  return (
    <Fragment>
      <div className={classes.background}>
        <div className={classes.Container}>
          <div className={classes.SVGContainer}>
            <img
              height='450px'
              width='500px'
              className={classes.svg}
              src={RegisterSVG}
              alt='register Svg'
            />
          </div>
          <div className={classes.form}>
            <h3 className={classes.heading}>Welcome to Talent Hunt</h3>
            <div className={classes.flex}>
              <div>
                <label className={classes.label}>Name</label>
                <br />
                <input
                  type={"text"}
                  placeholder={"Mark Cuban"}
                  className={classes.input}
                  value={state.Name}
                  name='Name'
                  onChange={(event) => {
                    dispatch({
                      type: "change",
                      data: {
                        payload: event.target.value,
                        type: event.target.name,
                      },
                    });
                  }}
                />
              </div>
              <div className={classes.margin}>
                <label className={classes.label}>Email</label>
                <br />
                <input
                  value={state.Email}
                  name='Email'
                  onChange={(event) => {
                    dispatch({
                      type: "change",
                      data: {
                        payload: event.target.value,
                        type: event.target.name,
                      },
                    });
                  }}
                  type={"email"}
                  placeholder={"mark.cuban@gmail.com"}
                  className={classes.input}
                />
              </div>
            </div>
            <div className={classes.flex}>
              <div>
                <label className={classes.label}>Password</label>
                <br />
                <input
                  value={state.Password}
                  onChange={(event) => {
                    dispatch({
                      type: "change",
                      data: {
                        payload: event.target.value,
                        type: event.target.name,
                      },
                    });
                  }}
                  name='Password'
                  type={"password"}
                  className={classes.input}
                />
              </div>
              <div className={classes.margin}>
                <label className={classes.label}>Confirm Password</label>
                <br />
                <input
                  value={state.ConfirmPassword}
                  name='ConfirmPassword'
                  onChange={(event) => {
                    dispatch({
                      type: "change",
                      data: {
                        payload: event.target.value,
                        type: event.target.name,
                      },
                    });
                  }}
                  type={"password"}
                  className={classes.input}
                />
              </div>
            </div>
            <div className={classes.flex}>
              <label>Gender</label>
              <select
                name='Gender'
                onChange={(event) => {
                  dispatch({
                    type: "change",
                    data: {
                      payload: event.target.value,
                      type: event.target.name,
                    },
                  });
                }}
                className={classes.select}>
                <option disabled={"true"}>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <label className={classes.label}>Bio</label>
            <textarea
              value={state.Bio}
              name='Bio'
              onChange={(event) => {
                dispatch({
                  type: "change",
                  data: {
                    payload: event.target.value,
                    type: event.target.name,
                  },
                });
              }}
              className={(classes.input, classes.textarea)}
            />
            <div className={classes.flex}>
              <input type={"checkbox"} className={classes.checkbox} />
              <label className={classes.terms}>
                Yes, I understand the Terms of Service of TalentHunt, including
                the User Agreement and Privacy Policy
              </label>
            </div>
            <div className={classes.btnContainer}>
              <button onClick={SubmitHandler} className={classes.btn}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
