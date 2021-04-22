/** @format */

import { HiHome } from "react-icons/hi";
import { MdFeedback } from "react-icons/md";
import { IoIosBriefcase } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { MdNotificationsActive } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { FcPrivacy, FcServices, FcContacts } from "react-icons/fc";
import Paths from "../../../Constants/paths";

/**
 * This object stores our side bar data but in cleanner way
 * Just add icon , title and the path where you want to navigate to that's it
 */
const navBar = [
  { Icon: MdFeedback, title: "Feed", path: Paths.feed },
  {
    Icon: RiProfileLine,
    title: "Profile",
    path: Paths.profile,
    createUrlPath: Paths.createProfilePath,
  },
  { Icon: GrGroup, title: "Requests", path: Paths.requests },
];

export default navBar;
