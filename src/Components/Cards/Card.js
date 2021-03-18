/** @format */

import React, { useReducer, memo } from "react";
// import { BsThreeDots } from "react-icons/bs";
// import { BiLike } from "react-icons/bi";
import classes from "./card.module.css";
import Action from "./Action/Action";
import Comments from "./Comments/Comments";
import { useForm, onChangehandler } from "../../Hooks/useForm";
import { useMutation } from "@apollo/client";
import {
  createCommentMutation,
  createLikeMutation,
} from "./Comments/Mutations";

const Card = ({ data }) => {
  const [createComment] = useMutation(createCommentMutation);
  const [likePost] = useMutation(createLikeMutation);

  const { postedBy, description, likes, comments, mediaLink, id } = data;
  const { name, profilePic, bio } = postedBy;
  // console.log(postedBy);
  console.log("render", id);
  const time = "1d";
  const [state, dispatch] = useReducer(useForm, {
    Comment: "",
  });
  const handleChange = (event) => {
    onChangehandler(dispatch, event.target.name, event.target.value);
  };
  const submitHandler = async () => {
    const { data, errors } = await createComment({
      variables: {
        postId: id,
        comment: state.Comment,
      },
    });
    console.log(errors);
    console.log(data);
    state.Comment = "";
  };
  const LikeHandler = async () => {
    const { data, errors } = await likePost({
      variables: {
        postId: id,
      },
    });
    console.log(errors);
    console.log(data);
  };
  return (
    <div className={classes.Container}>
      {/* <div className={classes.options}>
        <BsThreeDots size={25} />
      </div> */}
      <div className={classes.top}>
        <div>
          <img src={profilePic} alt='ProfilePic' />
        </div>
        <div className={classes.Name}>
          <div>{name}</div>
          {/* <div className={classes.time}>{bio}</div> */}
        </div>
      </div>
      <div>
        {description && (
          <div className={classes.description}>{description}</div>
        )}
        <div className={classes.likeContainer}>
          {mediaLink !== "false" && (
            <div className={classes.image}>
              <img
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={mediaLink}
                alt='ProfilePic'
              />
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexGrow: 1,
              width: "100%",
            }}>
            <div className={classes.like}>{likes} likes</div>
            <div className={classes.comments}>
              {comments.length || 0} comments
            </div>
          </div>
          <Action LikeHandler={LikeHandler} showShare={true} />
        </div>
      </div>
      <div className={classes.writeYourCommentContainer}>
        <input
          type={"text"}
          value={state.Comment}
          onChange={handleChange}
          name='Comment'
          placeholder='Write a comment'
          className={classes.inputBox}
        />
        <button onClick={submitHandler} className={classes.btn}>
          Submit
        </button>
      </div>
      {/* <div className={classes.CommentsContainer}>
        <Comments
          profilePic={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qv5buD9HsOntZSvUXVesswHaE8%26pid%3DApi&f=1"
          }
          name={"John doe"}
          time={"1d"}
          comment={"Good Work!! Congrats"}
        />
      </div>
      <div className={classes.CommentsContainer}>
        <Comments
          profilePic={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qv5buD9HsOntZSvUXVesswHaE8%26pid%3DApi&f=1"
          }
          name={"John doe"}
          time={"1d"}
          comment={"Good Work!! Congrats"}
        />
      </div> */}
    </div>
  );
};

export default memo(Card);
