/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";
import Paths from "./Constants/paths";
import HomePage from "./Containers/Homepage/HomePage";
import Register from "./Containers/Register/Register";
import Profile from "./Containers/Profile/Profile";
import Feed from "./Containers/Feed/Feed";
const App = () => {
  return (
    <Switch>
      <Route path={Paths.feed} component={Feed} />
      <Route path={Paths.profile} component={Profile} />
      <Route path={Paths.register} component={Register} />
      <Route path={Paths.homepage} exact component={HomePage} />
    </Switch>
  );
};

export default App;
