/** @format */

import React from "react";
import Page from "../../HOC/Page";
import classes from "./Dashboard.module.css";
import Header from "../../Components/Dasboard Components/Header/Header";
import Skill from "../../Components/Dasboard Components/Skills/Skill";

const index = () => {
  return (
    <Page>
      <Header
        name={"Joe Rogan"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      />

      {/* <Skill
        skills={[
          "Actor",
          "Director",
          "Interviewer",
          "Wrestler",
          "Actor",
          "Director",
          "Interviewer",
          "Wrestler",
          "Actor",
          "Director",
          "Interviewer",
          "Wrestler",
        ]}
      /> */}
    </Page>
  );
};

export default index;