/* eslint-disable semi */
/* eslint-disable comma-dangle */
// ** Icons Import
import {
  Key,
  User,
  Info,
  Mail,
  File,
  Unlock,
  Circle,
  Square,
  FileText,
  Settings,
  Clipboard,
  DollarSign,
  HelpCircle,
} from "react-feather";

export default [
  {
    id: "configuration",
    title: "Configuration",
    icon: <Settings />,
    children: [
      {
        id: "categories",
        title: "Categories",
        icon: <Unlock />,
        navigator: "/pages/categories",
      },
      {
        id: "healthFacilities",
        title: "Health Facility",
        icon: <Settings />,
        navLink: "/apps/facility",
      },
      {
        id: "healthFacilityDepartment",
        title: "Health Facility Department",
        icon: <User />,
        navLink: "/pages/profile",
        collapsed: true,
      },
      {
        id: "coutnry",
        title: "Country",
        icon: <HelpCircle />,
        navLink: "/apps/country",
      },
      {
        id: "province",
        title: "Province",
        icon: <Info />,
        navLink: "/apps/provinces",
      },
      {
        id: "district",
        title: "District",
        icon: <DollarSign />,
        navLink: "/apps/district",
      },
      {
        id: "operatingHours",
        title: "Operating Hours",
        icon: <FileText />,
        navLink: "/pages/license",
      },
      {
        id: "escalationRules",
        title: "Escalation Rules",
        icon: <Key />,
        navLink: "/pages/api-key",
      },
      {
        id: "sla",
        title: "SLA",
        icon: <Clipboard />,
        navLink: "/pages/blog",
      },

      {
        id: "priority",
        title: "Priority",
        icon: <Mail />,
        navLink: "/pages/blog-detail",
      },

      {
        id: "tierLevel",
        title: "Tier Level",
        icon: <File />,
        navLink: "/pages/faq",
      },
    ],
  },
];
