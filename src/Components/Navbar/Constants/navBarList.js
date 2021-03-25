import { HiHome } from "react-icons/hi";
import { MdFeedback } from "react-icons/md";
import { IoIosBriefcase } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { MdNotificationsActive } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { FcPrivacy, FcServices, FcContacts } from "react-icons/fc";
import Paths from "../../../Constants/paths";
const navBar = {
  Feed: [
    { Icon: HiHome, title: "Home", path: Paths.homepage },
    { Icon: MdFeedback, title: "Feed", path: Paths.feed },
    { Icon: IoIosBriefcase, title: "Jobs", path: Paths.temp },
  ],
  "User Information": [
    { Icon: GrGroup, title: "Connections", path: Paths.temp },
    { Icon: MdNotificationsActive, title: "Notifications", path: Paths.temp },
    {
      Icon: RiProfileLine,
      title: "Profile",
      path: Paths.profile,
      createUrlPath: Paths.createProfilePath,
    },
  ],
  "Other Information": [
    { Icon: FcPrivacy, title: "Privacy Policy", path: Paths.temp },
    { Icon: FcServices, title: "Terms Of Service", path: Paths.temp },
    { Icon: FcContacts, title: "Contact Us", path: Paths.temp },
  ],
};

export default navBar;