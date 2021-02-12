/** @format */
/* eslint-disable react/jsx-no-target-blank */

import classes from "./Footer.module.css";
import React from "react";
// import Discord from "../../assets/la_discord.svg";
// import Instagram from "../../assets/dashicons_instagram.svg";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.Container}>
      <p className={classes.heading}>Follow Us</p>
      <div className={classes.socials}>
        <div className={classes.box}>
          <a target='_blank' href='https://discord.gg/XA8Qu9GPyV'>
            <FiTwitter size={30} />
          </a>
        </div>
        <div className={classes.box}>
          <a target='_blank' href='https://instagram.com/hackbash'>
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      <div className={classes.Copyright}>
        Copyright 2021 All rights reserved
      </div>
      {/* <div className={classes.Copyright2}>
        Developed & Designed by DSC Charusat with ❤
      </div> */}
    </div>
  );
};

export default Footer;
