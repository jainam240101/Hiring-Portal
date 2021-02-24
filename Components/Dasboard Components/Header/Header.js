/** @format */

import React from "react";
import classes from "./Header.module.css";
import Contact from "../Contact/Contact";
import Link from "next/link";

const Header = ({ description, name }) => {
  return (
    <div className={classes.flex}>
      <div className={classes.topInfo}>
        <img src='/joeRogan.jpg' />
      </div>
      <div className={classes.Container}>
        <div className={classes.Heading}>{name}</div>
        <div className={classes.Description}>{description}</div>
        <Contact />
        <div className={classes.connection}>
          Total Connections :{" "}
          <span className={classes.Link}>
            <Link href='/connections'>147</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
