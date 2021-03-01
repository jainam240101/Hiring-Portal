/** @format */

import React from "react";
import classes from "./Action.module.css";
import { BiLike, BiComment, BiShare } from "react-icons/bi";
const Action = ({ showShare }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.flex}>
        <BiLike size={20} />
        <span className={classes.text}>Like</span>
      </div>
      <div className={classes.margin}>
        <BiComment size={20} />
        <span className={classes.text}>Comment</span>
      </div>
      {showShare ? (
        <div className={classes.margin}>
          <BiShare size={20} />
          <span className={classes.text}>Share</span>
        </div>
      ) : null}
    </div>
  );
};

export default Action;
