/* eslint-disable semi */
/* eslint-disable comma-dangle */
// ** Icons Import
import { Box, Mail, Calendar, CheckSquare, MessageSquare } from "react-feather";

export default [
  {
    id: "asset",
    title: "Asset",
    icon: <Box />,
    children: [
      {
        id: "addNewDevice",
        title: "Add New Device",
        icon: <Mail />,
        navLink: "/apps/email",
      },
      {
        id: "deviceList",
        title: "Device List",
        icon: <MessageSquare />,
        navLink: "/apps/chat",
      },
      {
        id: "deviceMonitoring",
        title: "Device Monitoring",
        icon: <CheckSquare />,
        navLink: "/apps/todo",
      },
    ],
  },
];
