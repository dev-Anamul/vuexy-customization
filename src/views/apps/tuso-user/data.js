/* eslint-disable comma-dangle */
/* eslint-disable semi */
import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import EditClientModal from "./EditModal";
import Avatar from "@components/avatar";
import { store } from "@store/store";
import { getUser } from "../user/store";
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
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const renderClient = (row) => {
  console.log(row);
  if (!row.photoPath.length) {
    return (
      <Avatar className="me-1" img={row.photoPath} width="32" height="32" />
    );
  } else {
    return (
      <Avatar
        initials
        className="me-1"
        color={row.avatarColor || "light-primary"}
        content={row.fullName || "John Doe"}
      />
    );
  }
};

export const columns = [
  {
    name: "User",
    minWidth: "300px",
    // sortField: "fullName",
    sortable: (row) => row.name,
    selector: (row) => row.name,
    cell: (row) => (
      <div className="d-flex justify-content-left align-items-center">
        {renderClient(row)}
        <div className="d-flex flex-column">
          <Link
            to={`/apps/user/view/${row.oid}`}
            className="user_name text-truncate text-body"
            onClick={() => store.dispatch(getUser(row.oid))}
          >
            <span className="fw-bolder">{row.name}</span>
          </Link>
          <small className="text-truncate text-muted mb-0">{row.email}</small>
        </div>
      </div>
    ),
  },
  {
    name: "Role ID",
    sortable: true,
    minWidth: "250px",
    selector: (row) => row.roleID,
  },
  {
    name: "Surname",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.surname,
  },

  {
    name: "Phone",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.cellphone,
  },
  {
    name: "Status",
    sortable: true,
    minWidth: "100px",
    selector: (row) => (row.isAccountActive ? "Active" : "Inactive"),
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
      const userRoles = useSelector((state) => state.userRoles.data);
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
          <EditClientModal
            open={editModal}
            setOpen={setEditModal}
            selectedData={row}
            roles={userRoles}
          />
        </div>
      );
    },
  },
];
