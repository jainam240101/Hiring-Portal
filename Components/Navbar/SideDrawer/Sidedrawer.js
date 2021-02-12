/** @format */

import classes from "./SideDrawer.module.css";
import React from "react";
import Link from "next/link";

const SideDrawer = ({ showSideDrawer }) => {
  const handleImageClick = (id) => {
    showSideDrawer(false);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={classes.Container}>
      <div className={classes.heading}>HackBash</div>
      <ul className={classes.Links}>
        <Link className={classes.link} href='/'>
          Home
        </Link>
        <Link className={classes.link} href='/posts'>
          Posts
        </Link>
      </ul>
    </div>
  );
};

export default SideDrawer;
