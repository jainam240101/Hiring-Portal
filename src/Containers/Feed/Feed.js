/** @format */

import React, { useState } from "react";
import Page from "../../HOC/Page";
import classes from "./Feed.module.css";
import Card from "../../Components/Cards/Card";
import Modal from "../../Components/Feed Components/Modal/Modal";
import Backdrop from "../../Components/Navbar/Backdrop/Backdrop";

const Feed = () => {
  const [modal, setmodal] = useState(false);
  const modalHandler = () => {
    setmodal(!modal);
  };
  return (
    <Page>
      <div className={classes.newPost}>
        <div className={classes.images}>
          <img
            src={
              "https://images.unsplash.com/photo-1610764231870-5290c68d4299?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
            alt="ProfilePic"
          />
        </div>
        <div className={classes.input}>
          <div className={classes.inputBox} onClick={modalHandler}>
            Create new post
          </div>
        </div>
      </div>
      <div className={classes.Cards}>
        <Card
          Name={"John doe"}
          id={"12345"}
          profilePic={
            "https://images.unsplash.com/photo-1610764231870-5290c68d4299?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
          time={"May,2021"}
          likes={"200"}
          comments={"10"}
          Image={
            "https://images.unsplash.com/photo-1614254480533-d2a816781d58?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
        />

        <Card
          Name={"Something something"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          id={"12345"}
          profilePic={
            "https://images.unsplash.com/photo-1610764231870-5290c68d4299?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
          time={"May,2021"}
          likes={"200"}
          comments={"10"}
        />

        <Card
          Name={"kuch bhi"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          id={"12345"}
          profilePic={
            "https://images.unsplash.com/photo-1610764231870-5290c68d4299?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
          Image={
            "https://images.unsplash.com/photo-1614254480533-d2a816781d58?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
          time={"May,2021"}
          likes={"200"}
          comments={"10"}
        />
      </div>
      {modal && (
        <div>
          <Modal
            modalHandler={modalHandler}
            profilePic={
              "https://images.unsplash.com/photo-1610764231870-5290c68d4299?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
            name={"John doe"}
          />
          <Backdrop showSideDrawer={modalHandler} />
        </div>
      )}
    </Page>
  );
};

export default Feed;
