/** @format */

const path = {
  homepage: "/",
  register: "/register",
  feed: "/feed",
  profile: "/profile/:userId",
  createProfilePath: (id) => {
    return `/profile/${id}`;
  },
  signIn: "/signin",
  settings: "/settings",
  temp: "/Temp",
};

export default path;
