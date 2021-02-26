/** @format */

import React from "react";
import classes from "./Modal.module.css";
import { ImCross } from "react-icons/im";
const Modal = ({ profilePic, name, modalHandler }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.box}>
        <div className={classes.top}>
          <h3 className={classes.heading}>Create A Post</h3>
          <div className={classes.cross}>
            <ImCross
              className={classes.Cross}
              onClick={modalHandler}
              color={"black"}
              size={20}
            />
          </div>
        </div>
        <div className={classes.info}>
          <img className={classes.pic} src={profilePic} alt={"Profile Pic"} />
          <div className={classes.name}>{name}</div>
        </div>
        <textarea
          className={classes.textArea}
          placeholder={"What Do you want to talk about?"}
        />
        <button className={classes.btn}>Submit</button>
      </div>
    </div>
  );
};

export default Modal;
