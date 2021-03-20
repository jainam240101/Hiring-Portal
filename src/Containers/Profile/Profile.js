/** @format */

import React from "react";
import Page from "../../HOC/Page";
import classes from "./Profile.module.css";
import Header from "../../Components/Dasboard Components/Header/Header";
import Skill from "../../Components/Dasboard Components/Skills/Skill";
import Experience from "../../Components/Dasboard Components/Experience/Experience";
import Heading from "../../Components/HomePage Components/Headings/Heading";
import Education from "../../Components/Dasboard Components/Education/Education";

const Profile = () => {
  return (
    <Page>
      <div className={classes.Padding}>
        <Header
          name={"Joe Rogan"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
        />
        <Heading heading={"Skills"} />
        <Skill
          skills={[
            "Actor",
            "Podcaster",
            "Wrestler",
            "Actor",
            "Programmer",
            "Actor",
            "Podcaster",
            "Wrestler",
            "Actor",
            "Programmer",
            "Actor",
            "Podcaster",
            "Wrestler",
            "Actor",
            "Programmer",
          ]}
        />
        <div className={classes.ExperienceContainer}>
          <Heading heading={"Experience"} />
          <div className={classes.flex}>
            <Experience
              heading={"Charotar University Of Science And Technology"}
              duration={"May,2020 - June,2021"}
              role={"Software Engineer"}
            />
            <Experience
              heading={"Geeky Ants"}
              duration={"May,2020 - June,2021"}
              role={"Software Engineer"}
            />
            <Experience
              heading={"Geeky Ants"}
              duration={"May,2020 - June,2021"}
              role={"Software Engineer"}
            />
            <Experience
              heading={"Geeky Ants"}
              duration={"May,2020 - June,2021"}
              role={"Software Engineer"}
            />
            <Experience
              heading={"Geeky Ants"}
              duration={"May,2020 - June,2021"}
              role={"Software Engineer"}
            />
          </div>
        </div>
        <div className={classes.ExperienceContainer}>
          <Heading heading={"Education"} />
          <div className={classes.flex}>
            <Education
              name={"Anand Niketan School Of Excellence"}
              type={"SSC"}
              score={"80%"}
              location={"Ahmedabad"}
            />

            <Education
              name={"Charotar University Of Science And Technology"}
              type={"Undergrad"}
              score={"9.8"}
              location={"Anand"}
            />
            <Education
              name={"Charotar University Of Science And Technology"}
              type={"Undergrad"}
              score={"9.8"}
              location={"Anand"}
            />
            <Education
              name={"Charotar University Of Science And Technology"}
              type={"Undergrad"}
              score={"9.8"}
              location={"Anand"}
            />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Profile;
