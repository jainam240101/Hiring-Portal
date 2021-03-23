/** @format */

import React, { useState, useEffect, useCallback } from "react";
import Page from "../../HOC/Page";
import classes from "./Feed.module.css";
import Card from "../../Components/Cards/Card";
import Modal from "../../Components/Feed Components/Modal/Modal";
import Backdrop from "../../Components/Navbar/Backdrop/Backdrop";
import { useLazyQuery } from "@apollo/client";
import { getProfileData } from "../../CommonQueries/userQuery";
import {  Queries } from "./apollo/Queries";
import { cache } from "../../index";

const Feed = () => {
  const [modal, setmodal] = useState(false);
  const [feedData, setFeedData] = useState([]);
  const [check, setCheck] = useState(1);
  const [getPost, { loading, data, error, fetchMore }] = useLazyQuery(Queries, {
    variables: { pageNo: 0 },
  });
  const profiledata = cache.readQuery({
    query: getProfileData,
  });

  useEffect(() => {
    if (data) {
     
      setFeedData((prevData) => {
        return [...prevData, ...data?.getPosts?.data];
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
  const addPost = useCallback((data) => {
    setFeedData((prevData) => {
      return [data, ...prevData];
    });
  }, []);
  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :</p>;
  return (
    <Page>
      <div className={classes.newPost}>
        <div className={classes.images}>
          <img src={profiledata?.getMe.profilePic} alt="ProfilePic"  style={{objectFit:'contain'}}/>
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
              return (
                <Card data={item} key={item.id} userData={profiledata?.getMe} />
              );
            })}
          </>
        )}
      </div>
      {modal && (
        <div>
          <Modal
            modalHandler={modalHandler}
            userData={profiledata?.getMe}
            addPost={addPost}
          />
          <Backdrop showSideDrawer={modalHandler} />
        </div>
      )}
    </Page>
  );
};

export default Feed;
