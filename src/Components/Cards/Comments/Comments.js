/** @format */

import React, { memo } from "react";
import { BsThreeDots } from "react-icons/bs";
import Action from "../Action/Action";
import classes from "./Comments.module.css";
const Comments = ({ profilePic, name, time, comment, nested }) => {
  return (
    <div className={nested ? classes.nested : classes.Container}>
      <div className={classes.flex}>
        <div className={classes.img}>
          <img src={profilePic} alt="Profile Pic" />
        </div>
        <div className={classes.topContainer}>
          <div className={classes.name}>{name}</div>
          <div className={classes.options}>
            <span className={classes.margin}>{time}</span>
            {/* <BsThreeDots size={25} /> */}
          </div>
        </div>
      </div>
      <div className={classes.comment}>{comment}</div>
      <Action showShare={false} showComment={false} />
    </div>
  );
};

export default memo(Comments);
