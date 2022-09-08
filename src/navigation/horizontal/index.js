/* eslint-disable semi */
/* eslint-disable comma-dangle */
// ** Navigation imports
// import apps from './apps'
// import pages from "./pages";
// import others from "./others";
// import charts from "./charts";
// import uiElements from './ui-elements'
// import formsAndTables from "./forms-tables";
// import dashboards from "./dashboards";
import seviceDesk from "./seviceDesk";
import userManagement from "./userManagement";
import configuration from "./configurations";
import asset from "./asset";
import customDashboard from "./customDashboard";

// ** Merge & Export
export default [
  ...customDashboard,
  ...seviceDesk,
  ...userManagement,
  ...configuration,
  ...asset,
];
