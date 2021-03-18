/** @format */

import React, { memo } from "react";
import classes from "./Action.module.css";
import { BiLike, BiComment, BiShare } from "react-icons/bi";
const Action = ({
  showShare = true,
  showLike = true,
  showComment = true,
  LikeHandler,
}) => {
  console.log(LikeHandler);
  return (
    <div className={classes.Container}>
      {showLike && (
        <div onClick={LikeHandler} className={classes.flex}>
          <BiLike size={22} />
          <span className={classes.text}>Like</span>
        </div>
      )}
      {showComment && (
        <div className={classes.flex}>
          <BiComment size={22} />
          <span className={classes.text}>Comment</span>
        </div>
      )}
      {showShare && (
        <div className={classes.flex}>
          <BiShare size={22} />
          <span className={classes.text}>Share</span>
        </div>
      )}
    </div>
  );
};

export default memo(Action);
