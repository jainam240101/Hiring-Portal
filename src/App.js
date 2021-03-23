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
import Settings from "./Containers/User Settings/Settings";
const App = () => {
  const { data, error } = useQuery(me);
  try {
    console.log(error);
    console.log(data);
    if (data.getMe) {
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
  } catch (error) {
    console.log("erro", JSON.stringify(error, null, 2));
  }
  return (
    <Switch>
      <Route path={Paths.profile} component={Profile} />
      <Route path={Paths.signIn} exact component={SignIn} />
      <Route path={Paths.register} exact component={Register} />
      <Route path={Paths.settings} exact component={Settings} />
      <Route path={Paths.feed} exact component={Feed} />
      {/* <Route path={Paths.homepage} exact component={HomePage} /> */}
    </Switch>
  );
};

export default App;
