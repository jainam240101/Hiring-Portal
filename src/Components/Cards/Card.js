/** @format */

import React, { useReducer, memo, useState } from "react";
// import { BsThreeDots } from "react-icons/bs";
// import { BiLike } from "react-icons/bi";
import classes from "./card.module.css";
import Action from "./Action/Action";
import Comments from "./Comments/Comments";
import { useForm, onChangehandler } from "../../Hooks/useForm";
import { useMutation } from "@apollo/client";
import { createCommentMutation } from "./Comments/Mutations";
import ToggleLikeFeedPostHook from "./Hooks/toggleLike";

const Card = ({ data, userData }) => {
  const [createComment] = useMutation(createCommentMutation);

  const {
    postedBy,
    description,
    likes,
    comments,
    mediaLink,
    id,
    doesUserLike,
  } = data;
  const { name, profilePic, bio } = postedBy;
  const [postComments, setPostComments] = useState([...comments]);
  const [state, dispatch] = useReducer(useForm, {
    Comment: "",
  });
  console.log("render", id);
  const { totalLikes, error, toggleLike, userLikes } = ToggleLikeFeedPostHook({
    id,
    doesUserLike: doesUserLike || false,
    likes,
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

    const { id: commentId } = data.createComment.data;
    setPostComments((prevComments) => {
      const newComment = {
        userData: userData,
        comment: state.Comment,
        id: commentId,
      };
      return [...prevComments, newComment];
    });
    console.log(errors);
    console.log(data);
    state.Comment = "";
  };

  return (
    <div className={classes.Container}>
      {/* <div className={classes.options}>
        <BsThreeDots size={25} />
      </div> */}
      <div className={classes.top}>
        <div>
          <img src={profilePic} alt="ProfilePic" />
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
                alt="ProfilePic"
              />
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexGrow: 1,
              width: "100%",
            }}
          >
            <div className={classes.like}>{totalLikes} likes</div>
            <div className={classes.comments}>
              {comments.length || 0} comments
            </div>
          </div>
          <Action
            LikeHandler={toggleLike}
            showShare={true}
            userLikes={userLikes}
          />
        </div>
      </div>
      <div className={classes.writeYourCommentContainer}>
        <input
          type={"text"}
          value={state.Comment}
          onChange={handleChange}
          name="Comment"
          placeholder="Write a comment"
          className={classes.inputBox}
        />
        <button onClick={submitHandler} className={classes.btn}>
          Submit
        </button>
      </div>

      {postComments?.length > 0 &&
        postComments.map((item, index) => {
          const { comment, id, userData } = item;
          const { email, gender, id: userId, name, profilePic } = userData;
          return (
            <div className={classes.CommentsContainer}>
              <Comments
                profilePic={profilePic}
                name={name}
                comment={comment}
                key={id}
              />
            </div>
          );
        })}
    </div>
  );
};

export default memo(Card);
