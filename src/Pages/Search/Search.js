import React, { useEffect, useState, useCallback, memo } from "react";
import { useHistory } from "react-router-dom";
import Page from "../../HOC/Page";
import ProfileCard from "./Components/ProfileCard";
import classes from "./Search.module.css";
import { useLazyQuery } from "@apollo/client";
import { Queries } from "./apollo/Queries";
import Paths from "../../Constants/paths";
const Search = (props) => {
  const history = useHistory();
  const [searchResult, setSearchResult] = useState([]);
  const [searchUsers, { loading, data, error, fetchMore }] = useLazyQuery(
    Queries
  );

  useEffect(() => {
    if (data) {
      const { data: result } = data?.searchUsers;
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
      variables: { search: queryParams.q, skills: [] },
    });
  }, []);
  const navigateToProfile = useCallback((id) => {
    history.push(Paths.createProfilePath(id));
  }, []);
  return (
    <Page>
      <div className={classes.pageContainer}>
        {loading ? (
          <p>Loading</p>
        ) : (
          <div className={classes.profileWrapper}>
            {searchResult.map((item, index) => (
              <ProfileCard
                key={item.id}
                userData={item}
                navigateToProfile={navigateToProfile}
              />
            ))}
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
