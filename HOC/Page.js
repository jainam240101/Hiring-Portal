/** @format */

import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import SideDrawer from "../Components/Navbar/SideDrawer/Sidedrawer";
import classes from "./Page.module.css";
const Page = ({ children }) => {
  return (
    <div>
      <div className={classes.flex}>
        <div className={classes.SideBar}>
          <SideDrawer />
        </div>
        <div className={classes.children}>
          <Navbar />
          {children}
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Page;
