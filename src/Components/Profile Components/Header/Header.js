/** @format */

import React, { useEffect, useState, useCallback } from "react";
import classes from "./Header.module.css";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
import UserActionHook, {
  UNFOLLOWUSERREQUEST,
  ACCEPTREQUEST,
  REVOKEREQUEST,
  DECLINEREQUEST,
  REQUESTTOFOLLOW,
} from "./Hooks/userActionHooks";
import { useHistory } from "react-router-dom";
import path from "../../../Constants/paths";
const Header = ({ userData, userRelation }) => {
  const history = useHistory();
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
  const [userRelationState, setUserRelationState] = useState({
    ...userRelation,
  });
  const [type, setType] = useState();
  let Navigate = useCallback(() => {
    console.log("called");
    history.push(path.settings);
  }, []);
  useEffect(() => {
    getType();
  }, []);
  const getType = () => {
    const {
      hasReceivedRequest,
      hasSentRequest,
      isAdmin,
      isFollower,
      isFollowing,
    } = userRelationState;
    let actionType;
    if (isAdmin) {
      actionType = "Edit profile";
    } else {
      if (isFollowing) {
        actionType = "Unfollow";
      } else {
        actionType = "Follow";
      }
    }
    setType(actionType);
    return actionType;
  };
  const { loading, getActions } = UserActionHook({ id });
  const handleClick = async () => {
    let action = type;
    let callback;
    console.log(type);
    switch (action) {
      case "Edit profile":
        return Navigate();
      case "Unfollow":
        callback = getActions(UNFOLLOWUSERREQUEST);
        break;
      case "Follow":
        callback = getActions(REQUESTTOFOLLOW);
        break;
    }
    let data = await callback();
    let { success, message, error } = data;
    if (!success) {
      alert(error);
    }
  };
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
        <div style={{ marginTop: "2%" }}>
          <button className={classes.button} onClick={handleClick}>
            <span>{type}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
