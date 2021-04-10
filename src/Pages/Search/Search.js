/** @format */

import React, { useEffect, useState, useCallback, memo } from "react";
import { useHistory } from "react-router-dom";
import Page from "../../HOC/Page";
import ProfileCard from "./Components/ProfileCard";
import classes from "./Search.module.css";
import { useLazyQuery } from "@apollo/client";
import { Queries } from "./apollo/Queries";
import Paths from "../../Constants/paths";
import InfiniteScroll from "react-infinite-scroll-component";

const Search = (props) => {
  const history = useHistory();
  const [pageNo, setpageNo] = useState(0);
  const [hasMore, sethasMore] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [searchUsers, { loading, data, error, fetchMore }] = useLazyQuery(
    Queries
  );

  useEffect(() => {
    if (data) {
      const { data: result, message } = data?.searchUsers;
      if (message === "No Data") {
        console.log("Firing");
        sethasMore(false);
        return;
      }
      console.log(result.length);
      if (result.length <= 10) {
        sethasMore(false);
      }
      setSearchResult((prevData) => {
        return [...prevData, ...result];
      });
    }
  }, [data]);
  useEffect(() => {
    console.log("erro", JSON.stringify(error, null, 2));
  }, [error]);
  useEffect(() => {
    let queryParams = {};
    const query = new URLSearchParams(props.location.search);
    for (let param of query.entries()) {
      queryParams[param[0]] = param[1];
    }
    console.log(queryParams.q, queryParams);
    searchUsers({
      variables: { search: queryParams.q, skills: [], pageNo: pageNo },
    });
  }, [props.location.search]);

  const fetchMoredata = async () => {
    console.log("Fired");
    var page = pageNo + 1;
    console.log("Page ", page);
    console.log("from fetchMore");
    let result = await fetchMore({
      variables: { pageNo: page },
      updateQuery: (_, { fetchMoreResult }) => {
        return fetchMoreResult;
      },
    });
    setpageNo(page);
  };

  const navigateToProfile = useCallback((id) => {
    history.push(Paths.createProfilePath(id));
  }, []);
  return (
    <Page>
      <div className={classes.pageContainer}>
        {loading ? (
          <p>Loading</p>
        ) : (
          <div style={{ width: "100%" }}>
            <InfiniteScroll
              dataLength={searchResult.length}
              hasMore={hasMore}
              next={fetchMoredata}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
              loader={<h4>Loading....</h4>}>
              <div className={classes.profileWrapper}>
                {searchResult.map((item, index) => (
                  <ProfileCard
                    key={item.id}
                    userData={item}
                    navigateToProfile={navigateToProfile}
                  />
                ))}
              </div>
            </InfiniteScroll>
          </div>
        )}
      </div>
    </Page>
  );
};

function areEqual(prevProps, nextProps) {
  if (prevProps.location.search !== nextProps.location.search) {
    window.location.reload();
  }
  return prevProps.location.search !== nextProps.location.search;
}

export default memo(Search, areEqual);
