/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { useState } from "react";

import {
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import {
  MoreVertical,
  Edit,
  FileText,
  Archive,
  Trash,
  Eye,
} from "react-feather";
import ConfirmationModal from "./ConfirmationModal";
export const columns = [
  {
    name: "Incident Title",
    minWidth: "250px",
    sortable: (row) => row.title,
    selector: (row) => row.title,
  },
  {
    name: "Incident ID",
    sortable: true,
    minWidth: "250px",
    selector: (row) => row.incidentID,
  },
  {
    name: "Created Date",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.dateCreated,
  },

  {
    name: "Assignments",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.assignments,
  },
  {
    name: "Created By",
    sortable: true,
    minWidth: "100px",
    selector: (row) => row.createdBy,
  },
  {
    name: "Modified By",
    minWidth: "150px",
    sortable: (row) => row.modifiedBy,
    cell: (row) => {
      return (
        <Badge color={"light-primary"} pill>
          {row.modifiedBy}
        </Badge>
      );
    },
  },
  {
    name: "Actions",
    allowOverflow: true,
    cell: (row) => {
      const [confirmModal, setconfirmModal] = useState(false);
      return (
        <div className="d-flex">
          <button
            className="border-0 outline-none bg-transparent text-info"
            onClick={() => {
              console.log("View");
            }}
          >
            <Eye size={18} />
          </button>
          <button
            className="border-0 outline-none bg-transparent p-0 text-danger"
            onClick={() => {
              setconfirmModal(true);
            }}
          >
            <Trash size={18} />
          </button>
          <button
            className="border-0 outline-none bg-transparent text-warning fw-bold"
            onClick={() => {
              console.log("Edit");
            }}
          >
            <Edit size={17} />
          </button>
          <ConfirmationModal
            open={confirmModal}
            setOpen={setconfirmModal}
            id={row.incidentID}
          />
        </div>
      );
    },
  },
];
