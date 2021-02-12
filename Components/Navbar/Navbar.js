/** @format */

import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { debounce } from "./Helper";
import { FiSearch } from "react-icons/fi";

const Navbar = ({ showSideDrawer }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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
  return (
    <div
      className={classes.Container}
      style={{ top: visible ? "0" : "-100px" }}>
      <div className={classes.logo}>
        <img className={classes.img} src='/dsc_logo.ico' />
      </div>
      <div>
        <ul className={classes.Links}>
          <Link href='/'>
            <li className={classes.link1}>Home</li>
          </Link>
          <Link href='/posts'>
            <li className={classes.link}>Feed</li>
          </Link>
          <Link href='/posts'>
            <li className={classes.link}>Jobs</li>
          </Link>
        </ul>
      </div>
      <div className={classes.btnArea}>
        <button className={classes.btn}>Log In</button>
        <button className={classes.btn}>Sign Up</button>
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
