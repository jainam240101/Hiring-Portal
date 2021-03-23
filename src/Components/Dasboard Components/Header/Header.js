/** @format */

import React from "react";
import classes from "./Header.module.css";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
import JoeRogan from "../../../assets/joeRogan.jpg";

const Header = ({ userData }) => {
  const {
    bio,
    email,
    gender,
    id,
    name,
    profilePic,
    skills,
    totalFollowers,
    totalFollowing,
    userType,
  } = userData;
  return (
    <div className={classes.flex}>
      <div>
        <img src={profilePic} alt="Profile Pic" className={classes.img} />
      </div>
      <div className={classes.Container}>
        <div className={classes.Heading}>{name}</div>
        <div className={classes.Description}>{bio}</div>
        <div className={classes.connection}>
          <span>
            Total Followers :{" "}
            <span className={classes.Link}>{totalFollowers}</span>
          </span>
          <span>
            Total Following :{" "}
            <span className={classes.Link}>{totalFollowing}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
