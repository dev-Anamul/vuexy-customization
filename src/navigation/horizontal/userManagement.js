/* eslint-disable semi */
/* eslint-disable comma-dangle */
// ** Icons Import
import {
  Layers,
  Type,
  Eye,
  CreditCard,
  Circle,
  Briefcase,
} from "react-feather";

export default [
  {
    id: "userManagement",
    title: "User Management",
    icon: <Layers />,
    children: [
      {
        id: "addNewUser",
        title: "Add New User",
        icon: <Type />,
        navLink: "/pages/register-basic",
      },
      {
        id: "userList",
        title: "User List",
        icon: <Eye />,
        navLink: "/apps/user/list",
      },
      {
        id: "userGroup",
        title: "User Group",
        icon: <CreditCard />,
        badge: "success",
        badgeText: "New",
        children: [
          {
            id: "addNewGroup",
            title: "Add New Group",
            icon: <Circle />,
            navLink: "/cards/basic",
          },
          {
            id: "groupList",
            title: "Group List",
            icon: <Circle />,
            navLink: "/cards/advance",
          },
        ],
      },
      {
        id: "userRole",
        title: "User Role",
        icon: <Briefcase />,
        children: [
          {
            id: "addNewRole",
            title: "Role List",
            icon: <Circle />,
            navLink: "/apps/user/roles",
          },
          {
            id: "roleList",
            title: "Role Permission Manager",
            icon: <Circle />,
            navLink: "/apps/user/permissions",
          },
        ],
      },
    ],
  },
];
