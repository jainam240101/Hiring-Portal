/** @format */

import React, { useEffect, useState } from "react";
import classes from "./Skills.module.css";
import Heading from "../../HomePage Components/Headings/Heading";

const Skill = ({ skills }) => {
  return (
    <div className={classes.Container}>
      <Heading heading={"Skills"} />
      <div className={classes.skills}>
        {skills.map((element, index) => (
          <div key={index} className={classes.text}>
            {element}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
