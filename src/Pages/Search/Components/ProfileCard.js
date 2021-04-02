import React, { useEffect } from "react";
import classes from "./ProfileCard.module.css";

const ProfileCard = ({ userData, navigateToProfile }) => {
  let { profilePic, name, bio, id } = userData;
  return (
    <div
      className={classes.container}
      onClick={navigateToProfile.bind(this, id)}
    >
      <img src={profilePic} className={classes.image}></img>
      <div className={classes.textWrapper}>
        <span className={classes.name}>{name}</span>
        {bio && <span className={classes.bio}>{bio}</span>}
      </div>
    </div>
  );
};

export default ProfileCard;
