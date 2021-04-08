/** @format */

import React, { useState, useEffect, useCallback } from "react";
import Page from "../../HOC/Page";
import classes from "./Feed.module.css";
import Card from "../../Components/Cards/Card";
import Modal from "../../Components/Modal/Modal";
import AddPostModalBody from "../../Components/Feed Components/AddPostModalBody/AddPostModalBody";

import { useLazyQuery } from "@apollo/client";
import { getProfileData } from "../../commonApollo/Queries/userQuery";
import { Queries } from "./apollo/Queries";
import { cache } from "../../index";

const Feed = () => {
  const [modal, setmodal] = useState(false);
  const [feedData, setFeedData] = useState([]);

  const [getPost, { loading, data, error, fetchMore }] = useLazyQuery(Queries, {
    variables: { pageNo: 0 },
  });
  const profiledata = cache.readQuery({
    query: getProfileData,
  });

  useEffect(() => {
    if (data) {
      const { data: postData } = data?.getPosts;
      console.log(postData);
      console.log("error", JSON.stringify(error, null, 2));

      setFeedData((prevData) => {
        return [...prevData, ...postData];
      });
    }
  }, [data]);
  useEffect(() => {
    if (error) {
      console.log("error", JSON.stringify(error, null, 2));
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          flexDirection: "column",
          padding: "2% 15%",
        }}
      >
        <div className={classes.newPost}>
          <div>
            <img
              src={profiledata?.getMe.profilePic}
              className={classes.images}
              alt="ProfilePic"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={classes.input}>
            <div className={classes.inputBox} onClick={modalHandler}>
              Create new post
            </div>
          </div>
        </div>

        {!loading && feedData.length > 0 && (
          <>
            {feedData.map((item, index) => {
              return (
                <Card data={item} key={item.id} userData={profiledata?.getMe} />
              );
            })}
          </>
        )}

        <Modal displayModal={modal} closeModal={modalHandler}>
          {profiledata?.getMe && (
            <AddPostModalBody
              displayModal={modal}
              closeModal={modalHandler}
              modalHandler={modalHandler}
              userData={profiledata?.getMe}
              addPost={addPost}
            />
          )}
        </Modal>
      </div>
    </Page>
  );
};

export default Feed;
