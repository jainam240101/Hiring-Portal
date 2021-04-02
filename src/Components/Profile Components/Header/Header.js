/** @format */

import React, { useEffect, useState, useCallback } from "react";
import classes from "./Header.module.css";
import { useHistory } from "react-router-dom";
import path from "../../../Constants/paths";
import Modal from "../../../Components/Modal/Modal";
import RevokeRequestModalBody from "./Components/RevokeRequestModalBody/RevokeRequestModalBody";
import {
  acceptFollowRequestMutation,
  declineFollowRequestMutation,
  requestToFollowUserMutation,
  revokeToFollowUserRequestMutation,
  unFollowUserMutation,
} from "../../../commonApollo/Mutation/userRelationMutation";
import { useMutation } from "@apollo/client";
const Header = ({ userData, userRelation }) => {
  const [acceptFollowRequest] = useMutation(acceptFollowRequestMutation);
  const [requestToFollowUser] = useMutation(requestToFollowUserMutation);
  const [revokeToFollowUserRequest] = useMutation(
    revokeToFollowUserRequestMutation
  );
  const [declineFollowRequest] = useMutation(declineFollowRequestMutation);
  const [unFollowUser] = useMutation(unFollowUserMutation);

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
  const [handleApi, setHandleApi] = useState({});
  const [apiResMessage, setApiResMessage] = useState("");
  const [userRelationState, setUserRelationState] = useState({
    ...userRelation,
  });
  const [displayModal, setDisplayModal] = useState(false);
  const [type, setType] = useState();
  const [data, setData] = useState({});
  const [totalFollowersState, setTotalFollowersState] = useState(
    totalFollowers
  );
  const [totalFollowingState, setTotalFollowingState] = useState(
    totalFollowing
  );

  useEffect(() => {
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
      if (hasSentRequest) {
        actionType = "Requested";
      }
    }
    setType(actionType);
  }, [userRelationState]);

  useEffect(() => {
    if (apiResMessage) {
      let tempUserRelationState = { ...userRelationState };
      switch (apiResMessage) {
        case "Request sent":
          tempUserRelationState.hasSentRequest = true;
          break;
        case "Request revoked":
          tempUserRelationState.hasSentRequest = false;
          break;
        case "Request accepted":
          tempUserRelationState.isFollower = true;
          tempUserRelationState.hasReceivedRequest = false;
          setTotalFollowingState(totalFollowingState + 1);
          break;
        case "Request declined":
          tempUserRelationState.hasReceivedRequest = false;
          break;
        case "unfollowed user":
          tempUserRelationState.isFollowing = false;
          setTotalFollowersState(totalFollowersState - 1);
          break;
      }
      setUserRelationState({ ...tempUserRelationState });
    }
  }, [apiResMessage]);

  useEffect(async () => {
    if (handleApi) {
      const { api, apiCallBack } = handleApi;
      try {
        const { errors, data } = await api({
          variables: {
            requestedTo: id,
          },
        });
        const { success, message, error } = data[apiCallBack];
        if (success) {
          setApiResMessage(message);
        }
      } catch (err) {
        console.log("erro", JSON.stringify(err, null, 2));
      }
    }
  }, [handleApi]);

  const handleClick = async () => {
    let action = type;
    switch (action) {
      case "Edit profile":
        return Navigate();
      case "Unfollow":
        setHandleApi({ api: unFollowUser, apiCallBack: "unFollowUser" });
        break;
      case "Follow":
        setHandleApi({
          api: requestToFollowUser,
          apiCallBack: "requestToFollowUser",
        });
        break;
      case "Requested":
        return setDisplayModal(true);
    }
  };
  const revokeRequest = useCallback(async () => {
    closeModal();
    setHandleApi({
      api: revokeToFollowUserRequest,
      apiCallBack: "revokeToFollowUserRequest",
    });
  }, []);

  let Navigate = useCallback(() => {
    history.push(path.settings);
  }, []);

  const closeModal = useCallback(() => {
    setDisplayModal(false);
  }, [displayModal]);
  return (
    <div>
      {userRelationState.hasReceivedRequest && (
        <div className={classes.card}>
          <div>
            <span>{name} wants to follow you</span>
          </div>
          <button
            className={classes.btn}
            onClick={setHandleApi.bind(this, {
              api: acceptFollowRequest,
              apiCallBack: "acceptFollowRequest",
            })}
          >
            Accept
          </button>
          <button
            className={classes.btn}
            style={{ color: "red" }}
            onClick={setHandleApi.bind(this, {
              api: declineFollowRequest,
              apiCallBack: "declineFollowRequest",
            })}
          >
            Decline
          </button>
        </div>
      )}
      <div className={classes.flex}>
        <div>
          <img src={profilePic} alt="Profile Pic" className={classes.img} />
        </div>
        <div className={classes.container}>
          <div className={classes.textContainer}>
            <span className={classes.heading}>{name}</span>
            {userRelationState.isFollower && (
              <span className={classes.followsYou}>Follows you</span>
            )}
          </div>
          <span className={classes.description}>{bio}</span>
          <div className={classes.connection}>
            <span>
              Total Followers :{" "}
              <span className={classes.Link}>{totalFollowersState}</span>
            </span>
            <span>
              Total Following :{" "}
              <span className={classes.Link}>{totalFollowingState}</span>
            </span>
          </div>
          <div style={{ marginTop: "2%" }}>
            <button className={classes.button} onClick={handleClick}>
              <span>{type}</span>
            </button>
          </div>
        </div>
        <Modal displayModal={displayModal} closeModal={closeModal}>
          <RevokeRequestModalBody
            name={name}
            profilePic={profilePic}
            closeModal={closeModal}
            revokeRequest={revokeRequest}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Header;
