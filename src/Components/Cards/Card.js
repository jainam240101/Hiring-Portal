/** @format */

import React, { memo } from "react";
// import { BsThreeDots } from "react-icons/bs";
// import { BiLike } from "react-icons/bi";
import classes from "./card.module.css";
import Action from "./Action/Action";
import Comments from "./Comments/Comments";

const Card = ({ data }) => {
  const { postedBy, description, likes, comments, mediaLink, id } = data;
  const { name, profilePic, bio } = postedBy;
  console.log(postedBy);
  console.log("render", id);
  const time = "1d";
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
            <div className={classes.like}>{likes} likes</div>
            <div className={classes.comments}>
              {comments.length || 0} comments
            </div>
          </div>
          <Action showShare={true} />
        </div>
      </div>
      <div className={classes.writeYourCommentContainer}>
        <input placeholder="Write a comment" className={classes.inputBox} />
        <button className={classes.btn}>Submit</button>
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
