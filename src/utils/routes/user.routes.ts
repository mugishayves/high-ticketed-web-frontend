import { SideBarRoute } from ".";
import { FaTasks, FaUsers, FaCalendar, FaFolder } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

export const userRoutes: SideBarRoute[] = [
  {
    name: "Dashboard",
    path: "/user",
    // icon: MdDashboard,
  },
  // {
  //   name: "Academics",
  //   path: "",
  //   icon: FaBookReader,
  //   hasSubRoutes: true,
  //   routes: [
  //     {
  //       name: "Academic Year",
  //       path: "/pm/academic-year",
  //       icon: BsFillCalendar2RangeFill,
  //     },
  //     {
  //       name: "Terms",
  //       path: "/pm/terms",
  //       icon: BsFillCalendar2RangeFill,
  //     },
  //     {
  //       name: "Report-Cards",
  //       path: "/pm/report-cards",
  //       icon: GiNotebook,
  //     },
  //     {
  //       name: "Courses",
  //       path: "/pm/courses",
  //       icon: GiNotebook,
  //       iconSize: 23,
  //     },
  //   ],
  // },
  {
    name: "Calendar",
    path: "/user/calendar",
    // icon: FaCalendar,
  },
  {
    name: "My Projects",
    path: "/user/projects",
    // icon: FaFolder,
  },
  {
    name: "Documents",
    path: "/user/documents",
    // icon: IoDocuments,
  },
  {
    name: "Tasks",
    path: "/user/tasks",
    // icon: FaTasks,
  },
  {
    name: "Settings",
    path: "/user/settings",
    // icon: IoIosSettings,
  },
  // {
  //   name: "Staff",
  //   path: "",
  //   icon: GiNotebook,
  //   iconSize: 23,
  //   hasSubRoutes: true,
  //   routes: [
  //     {
  //       name: "Teachers",
  //       path: "/pm/workers/teachers",
  //       icon: BsFillCalendar2RangeFill,
  //     },
  //     {
  //       name: "Discipline",
  //       path: "/pm/workers/discipline",
  //       icon: BsFillCalendar2RangeFill,
  //     },
  //     {
  //       name: "Accountant",
  //       path: "/pm/workers/accountants",
  //       icon: GiNotebook,
  //     },
  //     {
  //       name: "Others",
  //       path: "/pm/workers/others",
  //       icon: GiNotebook,
  //       iconSize: 23,
  //     },
  //   ],
  // },
  // {
  //   name: "Profile",
  //   path: "/pm/profile",
  //   icon: GiNotebook,
  // },
];
