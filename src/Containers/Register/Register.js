/** @format */

import React, { Fragment } from "react";
import classes from "./Register.module.css";
import RegisterSVG from "../../assets/Register.svg";

const Register = () => {
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
                />
              </div>
              <div className={classes.margin}>
                <label className={classes.label}>Email</label>
                <br />
                <input
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
                <input type={"password"} className={classes.input} />
              </div>
              <div className={classes.margin}>
                <label className={classes.label}>Confirm Password</label>
                <br />
                <input type={"password"} className={classes.input} />
              </div>
            </div>
            <div className={classes.flex}>
              <label>Gender</label>
              <select className={classes.select}>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <label className={classes.label}>Bio</label>
            <textarea className={(classes.input, classes.textarea)} />
            <div className={classes.flex}>
              <input type={"checkbox"} className={classes.checkbox} />
              <label className={classes.terms}>
                Yes, I understand the Terms of Service of TalentHunt, including
                the User Agreement and Privacy Policy
              </label>
            </div>
            <div className={classes.btnContainer}>
              <button className={classes.btn}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;