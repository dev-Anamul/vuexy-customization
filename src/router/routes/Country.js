/* eslint-disable semi */
/* eslint-disable comma-dangle */
import { lazy } from "react";

// const DashboardAnalytics = lazy(() => import('../../views/dashboard/analytics'))
// const DashboardEcommerce = lazy(() => import('../../views/dashboard/ecommerce'))
const Country = lazy(() => import("../../views/apps/country"));
const Provinces = lazy(() => import("../../views/apps/provinces"));
const District = lazy(() => import("../../views/apps/district"));
const Facility = lazy(() => import("../../views/apps/facility"));
import IncidentType from "../../views/apps/incident-types";
import Incidents from "../../views/apps/incidents";
import IncidentStatus from "../../views/apps/incidents-status";
import TusoModule from "../../views/apps/tuso-module";
import TusoRoles from "../../views/apps/tuso-roles";
import TusoPermissions from "../../views/apps/tuso-permissions";

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
];

export default CountryRoutes;
