/* eslint-disable semi */
/* eslint-disable comma-dangle */
import { lazy } from "react";

// const DashboardAnalytics = lazy(() => import('../../views/dashboard/analytics'))
// const DashboardEcommerce = lazy(() => import('../../views/dashboard/ecommerce'))
const Country = lazy(() => import("../../views/apps/country"));
const Provinces = lazy(() => import("../../views/apps/provinces"));
const District = lazy(() => import("../../views/apps/district"));
const Facility = lazy(() => import("../../views/apps/facility"));
const TusoUser = lazy(() => import("../../views/apps/tuso-user"));
// import Incidents from "../../views/apps/incidents";
// import IncidentType from "../../views/apps/incident-types";
// import IncidentStatus from "../../views/apps/incidents-status";
// import TusoRoles from "../../views/apps/tuso-roles";
// import TusoModule from "../../views/apps/tuso-module";
// import TusoPermissions from "../../views/apps/tuso-permissions";
const IncidentType = lazy(() => import("../../views/apps/incident-types"));
const Incidents = lazy(() => import("../../views/apps/incidents"));
const IncidentStatus = lazy(() => import("../../views/apps/incidents-status"));
const TusoModule = lazy(() => import("../../views/apps/tuso-module"));
const TusoRoles = lazy(() => import("../../views/apps/tuso-roles"));
const TusoPermissions = lazy(() => import("../../views/apps/tuso-permissions"));
const Assignment = lazy(() => import("../../views/apps/tuso-assignment"));

const CountryRoutes = [
  {
    path: "/apps/country",
    element: <Country />,
  },
  {
    path: "/apps/provinces",
    element: <Provinces />,
  },
  {
    path: "/apps/district",
    element: <District />,
  },
  {
    path: "/apps/facility",
    element: <Facility />,
  },
  {
    path: "/apps/incident-types",
    element: <IncidentType />,
  },
  {
    path: "/apps/incidents",
    element: <Incidents />,
  },
  {
    path: "/apps/incidents-status",
    element: <IncidentStatus />,
  },
  {
    path: "/apps/module",
    element: <TusoModule />,
  },
  {
    path: "/apps/user/roles",
    element: <TusoRoles />,
  },
  {
    path: "/apps/user/permissions",
    element: <TusoPermissions />,
  },
  {
    path: "/apps/user/tuso-user",
    element: <TusoUser />,
  },
  {
    path: "/apps/assignment",
    element: <Assignment />,
  },
];

export default CountryRoutes;
