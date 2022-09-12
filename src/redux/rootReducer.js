/* eslint-disable semi */
/* eslint-disable comma-dangle */
// ** Reducers Imports
import navbar from "./navbar";
import layout from "./layout";
import auth from "./authentication";
import todo from "@src/views/apps/todo/store";
import chat from "@src/views/apps/chat/store";
import users from "@src/views/apps/user/store";
import email from "@src/views/apps/email/store";
import kanban from "@src/views/apps/kanban/store";
import invoice from "@src/views/apps/invoice/store";
import calendar from "@src/views/apps/calendar/store";
import ecommerce from "@src/views/apps/ecommerce/store";
import dataTables from "@src/views/tables/data-tables/store";
import permissions from "@src/views/apps/roles-permissions/store";
import countries from "@src/views/apps/country/store";
import provinces from "@src/views/apps/provinces/store";
import districts from "@src/views/apps/district/store";
import facilities from "@src/views/apps/facility/store";
import incidentTypes from "@src/views/apps/incident-types/store";
import incidents from "@src/views/apps/incidents/store";
import incidentStatus from "@src/views/apps/incidents-status/store";
import modules from "@src/views/apps/tuso-module/store";
import userRoles from "@src/views/apps/tuso-roles/store";
import userPermissions from "@src/views/apps/tuso-permissions/store";
import userAccounts from "@src/views/apps/tuso-user/store";
import assignment from "@src/views/apps/tuso-assignment/store";
import preview from "@src/views/apps/tuso-preview/store";

const rootReducer = {
  auth,
  todo,
  chat,
  email,
  users,
  kanban,
  navbar,
  layout,
  invoice,
  calendar,
  ecommerce,
  dataTables,
  permissions,
  countries,
  provinces,
  districts,
  facilities,
  incidentTypes,
  incidents,
  incidentStatus,
  modules,
  userRoles,
  userPermissions,
  userAccounts,
  assignment,
  preview,
};

export default rootReducer;
