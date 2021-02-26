/** @format */

import classes from "./SideDrawer.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiHome } from "react-icons/hi";
import { MdFeedback } from "react-icons/md";
import { IoIosBriefcase } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { MdNotificationsActive } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { FcPrivacy, FcServices, FcContacts } from "react-icons/fc";

const SideDrawer = () => {
  const [state, setstate] = useState("Home");
  const router = useRouter();
  useEffect(() => {
    setstate(router.route.split("/")[1]);
  }, []);
  const onClickHandler = (value) => {
    router.push(value);
  };
  return (
    <div className={classes.Container}>
      <h1 className={classes.heading}>Talent Hunt</h1>
      <div className={classes.subContainer}>
        <h3 className={classes.subHeading}>Feed</h3>
        <div
          onClick={() => onClickHandler("/")}
          className={state === "" ? classes.activeLink : classes.notActive}>
          <HiHome size={20} />
          <div className={classes.link}>
            <Link href={"/"}>Home</Link>
          </div>
        </div>
        <div
          onClick={() => onClickHandler("/feed")}
          className={state === "feed" ? classes.activeLink : classes.notActive}>
          <MdFeedback size={20} />
          <div className={classes.link}>
            <Link href={"/feed"}>Feed</Link>
          </div>
        </div>
        <div
          onClick={() => onClickHandler("/jobs")}
          className={state === "jobs" ? classes.activeLink : classes.notActive}>
          <IoIosBriefcase size={20} />
          <div className={classes.link}>
            <Link href={"/jobs"}>Jobs</Link>
          </div>
        </div>
      </div>
      <div className={classes.subContainer}>
        <h3 className={classes.subHeading}>User Information</h3>
        <div
          onClick={() => onClickHandler("/connections")}
          className={
            state === "connections" ? classes.activeLink : classes.notActive
          }>
          <GrGroup size={20} />
          <div className={classes.link}>
            <Link href={"/connections"}>Connections</Link>
          </div>
        </div>
        <div
          className={
            state === "notifications" ? classes.activeLink : classes.notActive
          }>
          <MdNotificationsActive size={20} />
          <div className={classes.link}>
            <Link href={"/"}>Notifications</Link>
          </div>
        </div>
        <div
          className={
            state === "profile" ? classes.activeLink : classes.notActive
          }>
          <RiProfileLine size={20} />
          <div className={classes.link}>
            <Link href={"/profile"}>Profile</Link>
          </div>
        </div>
      </div>
      <div className={classes.subContainer}>
        <h3 className={classes.subHeading}>Other Information</h3>
        <div
          onClick={() => onClickHandler("/privacypolicy")}
          className={
            state === "privacypolicy" ? classes.activeLink : classes.notActive
          }>
          <FcPrivacy size={20} />
          <div className={classes.link}>
            <Link href={"/privacypolicy"}>Privacy Policy</Link>
          </div>
        </div>
        <div
          className={
            state === "service" ? classes.activeLink : classes.notActive
          }>
          <FcServices size={20} />
          <div className={classes.link}>
            <Link href={"/service"}>Terms Of Service</Link>
          </div>
        </div>
        <div
          className={
            state === "contact" ? classes.activeLink : classes.notActive
          }>
          <FcContacts size={20} />
          <div className={classes.link}>
            <Link href={"/contact"}>Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
