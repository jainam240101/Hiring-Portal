/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";
import Paths from "./Constants/paths";
import HomePage from "./Containers/Homepage/HomePage";
import Register from "./Containers/Register/Register";
import Profile from "./Containers/Profile/Profile";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN, me } from "./Custom Queries/user";
import Feed from "./Containers/Feed/Feed";
import SignIn from "./Containers/Sign In/SignIn";
import { cache } from ".";
const App = () => {
  const { data, error } = useQuery(me);
  console.log(error);
  if (data !== undefined) {
    console.log(data.getMe);

    cache.writeQuery({
      query: IS_LOGGED_IN,
      data: {
        loggedIn: true,
        id: data.getMe.id,
        name: data.getMe.name,
        gender: data.getMe.gender,
        email: data.getMe.email,
        profilePic: data.getMe.profilePic,
        bio: data.getMe.bio,
        userType: data.getMe.userType,
      },
    });
  }
  return (
    <Switch>
      <Route path={Paths.feed} component={Feed} />
      <Route path={Paths.profile} component={Profile} />
      <Route path={Paths.register} component={Register} />
      <Route path={Paths.homepage} exact component={HomePage} />
      <Route path={Paths.signIn} exact component={SignIn} />
    </Switch>
  );
};

export default App;
