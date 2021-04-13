/** @format */

import React, { useState, useCallback, useEffect } from "react";
import classes from "./Navbar.module.css";
import { GoSearch } from "react-icons/go";
import { debounce } from "./Helper";
import { useHistory, useLocation } from "react-router-dom";
import Paths from "../../Constants/paths";
import { LogoutMutation } from "./apollo/Logout";
import { useMutation } from "@apollo/client";
import { cache } from "../../index";

const Navbar = (props) => {
  const [Logout] = useMutation(LogoutMutation);
  const { showSideDrawer } = props;
  const history = useHistory();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [SigninHandler, setSigninHandler] = useState(false);
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  }, 100);
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [prevScrollPos, visible, handleScroll]);

  useEffect(() => {
    let queryParams = {};
    const query = new URLSearchParams(history.location.search);
    for (let param of query?.entries()) {
      queryParams[param[0]] = param[1];
    }
    if (queryParams.q) {
      setSearch(queryParams.q);
    }
    // console.log(queryParams.q, queryParams);
  }, []);

  const buttonHandler = () => {
    setSigninHandler(!SigninHandler);
  };
  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  const navigate = useCallback(() => {
    history.push("/search");
  }, [search]);
  const onKeyUp = (event) => {
    if (event.keyCode === 13) {
      navigate();
    }
  };
  const logoutHandler = async () => {
    try {
      Object.keys(cache.data.data).forEach((key) => cache.data.delete(key));
      console.log(cache.data.data);
      const { data } = await Logout();
      console.log(data);
      history.push("/signin");
    } catch (error) {
      history.push("/signin");
    }
  };
  return (
    <div
      className={classes.Container}
      style={{ top: visible ? "0" : "-100px" }}>
      <div className={classes.searchContainer}>
        <GoSearch size={25} onClick={navigate} style={{ cursor: "pointer" }} />
        {/* <input
          placeholder={"Search"}
          className={classes.input}
          type={"text"}
          value={search}
          onChange={handleChange}
          onSubmit={navigate}
          onSubmitCapture={navigate}
          onKeyUp={onKeyUp}
        /> */}
      </div>
      <div>
        <button onClick={logoutHandler} className={classes.Logoutbtn}>
          Logout
        </button>
      </div>
      <div onClick={() => showSideDrawer(true)} className={classes.hamburger}>
        <div className={classes.lines}></div>
        <div className={classes.lines}></div>
        <div className={classes.lines}></div>
      </div>
    </div>
  );
};

export default Navbar;
