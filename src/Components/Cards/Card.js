/** @format */

import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import classes from "./card.module.css";
import Action from "./Action/Action";
import Comments from "./Comments/Comments";

const Card = ({ Name, time, profilePic, description, id, likes, comments }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.options}>
        <BsThreeDots size={25} />
      </div>
      <div className={classes.top}>
        <div>
          <img src={profilePic} alt='ProfilePic' />
        </div>
        <div className={classes.Name}>
          <div>{Name}</div>
          <div className={classes.time}>{time}</div>
        </div>
      </div>
      <div className={classes.description}>{description}</div>
      <div className={classes.likeContainer}>
        <div className={classes.like}>
          {likes}
          <div>
            <BiLike size={20} />
          </div>
        </div>
        <div className={classes.comments}>{comments} Comments</div>
      </div>
      <Action showShare={true} />
      <div className={classes.CommentsContainer}>
        <Comments
          profilePic={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qv5buD9HsOntZSvUXVesswHaE8%26pid%3DApi&f=1"
          }
          name={"Aditya Pahilwani"}
          time={"1d"}
          comment={"Good Work!! Congrats"}
        />
        <Comments
          nested={true}
          profilePic={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qv5buD9HsOntZSvUXVesswHaE8%26pid%3DApi&f=1"
          }
          name={"Aditya Pahilwani"}
          time={"1d"}
          comment={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />
      </div>
    </div>
  );
};

export default Card;
