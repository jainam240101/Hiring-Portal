/** @format */

import React, { useState, useEffect, useCallback } from "react";
import Page from "../../HOC/Page";
import classes from "./Feed.module.css";
import Card from "../../Components/Cards/Card";
import Modal from "../../Components/Feed Components/Modal/Modal";
import Backdrop from "../../Components/Navbar/Backdrop/Backdrop";
import { useLazyQuery } from "@apollo/client";
import { getProfilePic, Queries } from "./Queries";
import { cache } from "../../index";

const Feed = () => {
  const [modal, setmodal] = useState(false);
  const [feedData, setFeedData] = useState([]);
  const [check, setCheck] = useState(1);
  const [getPost, { loading, data, error, fetchMore }] = useLazyQuery(Queries, {
    variables: { pageNo: 0 },
  });
  const profiledata = cache.readQuery({
    query: getProfilePic,
  });

  useEffect(() => {
    if (data) {
      setFeedData((prevData) => {
        return [...prevData, ...data.getPosts.data];
      });
    }
  }, [data]);
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  useEffect(async () => {
    getPost({
      variables: { pageNo: 0 },
    });
  }, []);
  const modalHandler = () => {
    setmodal(!modal);
  };
  const addPost = useCallback(() => {}, []);
  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :</p>;
  return (
    <Page>
      <div className={classes.newPost}>
        <div className={classes.images}>
          <img src={profiledata?.getMe.profilePic} alt='ProfilePic' />
        </div>
        <div className={classes.input}>
          <div className={classes.inputBox} onClick={modalHandler}>
            Create new post
          </div>
        </div>
      </div>
      <div className={classes.Cards}>
        {!loading && feedData.length > 0 && (
          <>
            {feedData.map((item, index) => {
              return <Card data={item} key={item.id} />;
            })}
          </>
        )}
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
