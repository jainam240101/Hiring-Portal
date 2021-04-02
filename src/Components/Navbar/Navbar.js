/** @format */

import React, { useState, useEffect, Fragment, useCallback } from "react";
import classes from "./Navbar.module.css";
import Backdrop from "./Backdrop/Backdrop";
import { GoSearch } from "react-icons/go";
import { debounce } from "./Helper";
import { useHistory } from "react-router-dom";
import Paths from "../../Constants/paths";
import SignIn from "../Sign In/SignIn";

const Navbar = (props) => {
  const { showSideDrawer } = props;
  const history = useHistory();
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
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const buttonHandler = () => {
    setSigninHandler(!SigninHandler);
  };
  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  const navigate = useCallback(() => {
    console.log(search, "iss");
    history.push(Paths.createSearchPath(search));
  }, [search]);
  const onKeyUp = (event) => {
    if (event.keyCode == 13) {
      navigate();
    }
  };
  return (
    <div
      className={classes.Container}
      style={{ top: visible ? "0" : "-100px" }}
    >
      <div className={classes.searchContainer}>
        <GoSearch size={25} onClick={navigate} style={{ cursor: "pointer" }} />
        <input
          placeholder={"Search"}
          className={classes.input}
          type={"text"}
          onChange={handleChange}
          onSubmit={navigate}
          onSubmitCapture={navigate}
          onKeyUp={onKeyUp}
        />
      </div>
      {/* <div className={classes.btnArea}>
        <button onClick={buttonHandler} className={classes.btn}>
          Sign In
        </button>
      </div>
      {SigninHandler ? (
        <Fragment>
          <SignIn showSideDrawer={buttonHandler} />
          <Backdrop showSideDrawer={buttonHandler} />
        </Fragment>
      ) : null} */}
      <div onClick={() => showSideDrawer(true)} className={classes.hamburger}>
        <div className={classes.lines}></div>
        <div className={classes.lines}></div>
        <div className={classes.lines}></div>
      </div>
    </div>
  );
};

export default Navbar;
