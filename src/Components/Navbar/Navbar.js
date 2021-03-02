/** @format */

import React, { useState, useEffect, Fragment } from "react";
import classes from "./Navbar.module.css";
import Backdrop from "./Backdrop/Backdrop";
import { GoSearch } from "react-icons/go";
import { debounce } from "./Helper";
import SignIn from "../Sign In/SignIn";

const Navbar = ({ showSideDrawer }) => {
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
  return (
    <div
      className={classes.Container}
      style={{ top: visible ? "0" : "-100px" }}>
      <div className={classes.searchContainer}>
        <GoSearch size={25} />
        <input placeholder={"Search"} className={classes.input} type={"text"} />
      </div>
      <div className={classes.btnArea}>
        <button onClick={buttonHandler} className={classes.btn}>
          Sign In
        </button>
      </div>
      {SigninHandler ? (
        <Fragment>
          <SignIn showSideDrawer={buttonHandler} />
          <Backdrop showSideDrawer={buttonHandler} />
        </Fragment>
      ) : null}
      <div onClick={() => showSideDrawer(true)} className={classes.hamburger}>
        <div className={classes.lines}></div>
        <div className={classes.lines}></div>
        <div className={classes.lines}></div>
      </div>
    </div>
  );
};

export default Navbar;
