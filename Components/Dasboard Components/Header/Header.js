/** @format */

import React from "react";
import classes from "./Header.module.css";
import Contact from "../Contact/Contact";

const Header = ({ description, name }) => {
  return (
    <div>
      <div className={classes.flex}>
        <div className={classes.topInfo}>
          <img src='/joeRogan.jpg' />
        </div>
        <div className={classes.Container}>
          <div className={classes.Heading}>{name}</div>
          <div className={classes.Description}>{description}</div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Header;
