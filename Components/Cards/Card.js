import React, { useState, useEffect } from "react";
import classes from "./Card.module.css";
import { MdFavorite, MdFavoriteBorder, MdInsertComment } from "react-icons/md";
const iconSize = 30;
const paddingConstant = "10px";
const Card = (props) => {
  const { name, profilePic, image, description } = props;
  const marginLeft = { marginLeft: "15px" };
  const like = true;
  return (
    <div className={classes.container} >
      <div className={classes.row} style={{borderBottom:'1px solid black',padding:'10px 0'}}>
        <div className={[classes.profileImageContainer]}>
          <img src={profilePic} className={classes.image} />
        </div>
        <span className={classes.profileName} style={marginLeft}>
          {name}
        </span>
      </div>
      {description && (
        <div
          style={{
            paddingTop: paddingConstant,
            paddingBottom: paddingConstant,
          }}
        >
          <span className={classes.caption}>{description}</span>
        </div>
      )}
      {image && (
        <div className={classes.postImageContainer}>
          <img src={image} className={classes.image} />
        </div>
      )}
      <div className={classes.row} style={{ paddingTop: paddingConstant }}>
        {like ? (
          <MdFavorite size={iconSize} style={{ color: "red" }} />
        ) : (
          <MdFavoriteBorder size={iconSize} style={{ fill: "black" }} />
        )}
        <MdInsertComment
          size={iconSize}
          style={{ color: "black", marginLeft: "10px" }}
        />
      </div>
    </div>
  );
};

export default Card;
