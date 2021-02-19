/** @format */

import React, { useEffect } from "react";
import classes from "./Skills.module.css";
import Heading from "../../HomePage Components/Headings/Heading";

const Skill = ({ skills }) => {
  return (
    <div className={classes.Container}>
      <Heading heading={"Skills"} />
      <ul className={classes.list}>
        {skills.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
