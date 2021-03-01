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
          <img src={"https://imgur.com/VUC5iQY.png"} alt='ProfilePic' />
        </div>
        <div className={classes.input}>
          <input onClick={modalHandler} placeholder={"Create New Post"} />
        </div>
      </div>
      <div className={classes.Cards}>
        <Card
          Name={"Jainam Mehta"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          id={"12345"}
          profilePic={"https://imgur.com/VUC5iQY.png"}
          time={"May,2021"}
          likes={"200"}
          comments={"10"}
        />
      </div>
      {modal ? (
        <div>
          <Modal
            modalHandler={modalHandler}
            profilePic={"https://imgur.com/VUC5iQY.png"}
            name={"Jainam Mehta"}
          />
          <Backdrop showSideDrawer={modalHandler} />
        </div>
      ) : null}
    </Page>
  );
};

export default Feed;
