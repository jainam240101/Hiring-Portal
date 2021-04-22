import classes from "./ProfileCard.module.css";
import React from "react";
const ProfileCard = ({
  userData,
  navigateToProfile,
  acceptFollowRequestHandle,
  declineFollowRequestHandle,
}) => {
  const { name, profilePic, id } = userData;
  const acceptClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    acceptFollowRequestHandle(id);
  };
  const declineClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    declineFollowRequestHandle(id);
  };
  return (
    <div
      className={classes.container}
      onClick={navigateToProfile.bind(this, id)}
    >
      <div className={classes.imageContainer}>
        <img src={profilePic} className={classes.image}></img>
      </div>
      <div style={{padding:'4% 8%'}}>
        <span className={classes.name}>{name}</span>
        <button className={classes.btn} onClickCapture={acceptClick}>
          Accept
        </button>
        <button
          className={classes.btn}
          style={{ color: "red" }}
          onClickCapture={declineClick}
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
