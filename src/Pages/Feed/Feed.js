/** @format */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect, useCallback } from "react";
import Page from "../../HOC/Page";
import classes from "./Feed.module.css";
import Card from "../../Components/Cards/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Modal from "../../Components/Modal/Modal";
import AddPostModalBody from "../../Components/Feed Components/AddPostModalBody/AddPostModalBody";
import { useLazyQuery } from "@apollo/client";
import { getProfileData } from "../../commonApollo/Queries/userQuery";
import { Queries } from "./apollo/Queries";
import { cache } from "../../index";

const Feed = () => {
  const [modal, setmodal] = useState(false);
  const [feedData, setFeedData] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [pageNo, setpageNo] = useState(0);
  const [getPost, { loading, data, error, fetchMore }] = useLazyQuery(Queries, {
    variables: { pageNo: pageNo },
  });
  const profiledata = cache.readQuery({
    query: getProfileData,
  });

  useEffect(() => {
    if (data) {
      const { data: postData, message } = data?.getPosts;
      if (message === "No Data") {
        console.log("Firing");
        sethasMore(false);
        return;
      }
      if (postData.length <= 10) {
        sethasMore(false);
      }
      setFeedData((prevData) => {
        return [...prevData, ...postData];
      });
      return false;
    }
  }, [data]);

  // useEffect(() => {
  //   if (error) {
  //     console.log("error", JSON.stringify(error, null, 2));
  //     alert(error);
  //   }
  // }, [error]);

  useEffect(async () => {
    getPost({
      variables: { pageNo: 0 },
    });
  }, []);
  const modalHandler = () => {
    setmodal(!modal);
  };

  const fetchMoredata = async () => {
    var page = pageNo + 1;
    await fetchMore({
      variables: { pageNo: page },
      updateQuery: (_, { fetchMoreResult }) => {
        return fetchMoreResult;
      },
    });
    setpageNo(page);
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
<<<<<<< HEAD
          padding: "0% 15%",
        }}>
=======
          padding: "2% 15%",
        }}
      >
>>>>>>> 6109d66d3470ecf43bc6fa19ba92c0fe374b589f
        <div className={classes.newPost}>
          <div>
            <img
              src={profiledata?.getMe.profilePic}
<<<<<<< HEAD
              alt='ProfilePic'
=======
              className={classes.images}
              alt="ProfilePic"
>>>>>>> 6109d66d3470ecf43bc6fa19ba92c0fe374b589f
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
<<<<<<< HEAD
          <div style={{ width: "100%" }}>
            <InfiniteScroll
              dataLength={feedData.length}
              next={fetchMoredata}
              hasMore={hasMore}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
              loader={<h4>Loading....</h4>}>
              {feedData.map((item, index) => {
                return (
                  <Card
                    data={item}
                    key={item.id}
                    userData={profiledata?.getMe}
                  />
                );
              })}
            </InfiniteScroll>
          </div>
=======
          <>
            {feedData.map((item, index) => {
              return (
                <Card data={item} key={item.id} userData={profiledata?.getMe} />
              );
            })}
          </>
>>>>>>> 6109d66d3470ecf43bc6fa19ba92c0fe374b589f
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
