/** @format */

import React, { useEffect, useState } from "react";
import Page from "../../HOC/Page";
import classes from "./Profile.module.css";
import Header from "../../Components/Dasboard Components/Header/Header";
import Skill from "../../Components/Dasboard Components/Skills/Skill";
import { useParams } from "react-router-dom";
import Experience from "../../Components/Dasboard Components/Experience/Experience";
import Heading from "../../Components/HomePage Components/Headings/Heading";
import Education from "../../Components/Dasboard Components/Education/Education";
import { useLazyQuery } from "@apollo/client";
import { getUserQuery } from "./apollo/Queries";
const Profile = () => {
  const [userData, setUserData] = useState({});
  const [userRelation, setUserRelation] = useState({});
  let [getUser, { loading, data, error }] = useLazyQuery(getUserQuery, {
    variables: { userId: 0 },
  });
  let { userId } = useParams();
  useEffect(() => {
    getUser({
      variables: { userId: userId },
    });
  }, []);
  useEffect(() => {
    if (data?.getUser) {
      let tempdata = { ...data?.getUser };
      let { success, message, error, userRelation, data: queryData } = tempdata;
      if (success) {
        setUserData({ ...queryData });
        setUserRelation({ ...userRelation });
      } else {
        alert(error);
      }
    }
  }, [data]);
  useEffect(() => {
    console.log("erro", JSON.stringify(error, null, 2));
  }, [error]);
  if (loading) return <div>loading</div>;
  console.log(userData);
  return (
    <Page>
      <div className={classes.Padding}>
        <Header
          userData={userData}
          name={"Joe Rogan"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
        />
        {userData?.skills?.length > 0 && (
          <>
            <Heading heading={"Skills"} /> <Skill skills={userData?.skills} />
          </>
        )}
      </div>
    </Page>
  );
};

export default Profile;

{
  /* <div className={classes.ExperienceContainer}>
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
        </div> */
}
