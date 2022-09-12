/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import EditDistrictModal from "./EditModal";
import {
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  MoreVertical,
  Edit,
  Eye,
  FileText,
  Archive,
  Trash,
} from "react-feather";
export const columns = [
  {
    name: "District Name",
    minWidth: "250px",
    sortable: (row) => row.districtName,
    selector: (row) => row.districtName,
  },
  {
    name: "Country ID",
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
    name: "Provinces",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.provinces,
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
    sortable: (row) => row.status.modifiedBy,
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
          <EditDistrictModal
            open={editModal}
            setOpen={setEditModal}
            selectedData={row}
          />
        </div>
      );
    },
  },
];
