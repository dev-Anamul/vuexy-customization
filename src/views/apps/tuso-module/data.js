/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { useState } from "react";
import ModuleEditModal from "./EditModal";
import ConfirmationModal from "./ConfirmationModal";

import {
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { MoreVertical, Edit, FileText, Archive, Trash } from "react-feather";
export const columns = [
  {
    name: "Module Name",
    minWidth: "250px",
    sortable: (row) => row.moduleName,
    selector: (row) => row.moduleName,
  },
  {
    name: "Module ID",
    sortable: true,
    minWidth: "250px",
    selector: (row) => row.oid,
  },
  {
    name: "Created Date",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.dateCreated,
  },

  {
    name: "description",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.description,
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
      const [editModal, setEditModal] = useState(false);
      return (
        <div className="d-flex">
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
              setEditModal(true);
            }}
          >
            <Edit size={17} />
          </button>
          <ConfirmationModal
            open={confirmModal}
            setOpen={setconfirmModal}
            id={row.oid}
          />
          <ModuleEditModal
            open={editModal}
            setOpen={setEditModal}
            selectedData={row}
          />
        </div>
      );
    },
  },
];
