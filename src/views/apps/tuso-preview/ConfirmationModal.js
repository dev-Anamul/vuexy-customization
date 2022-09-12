/* eslint-disable comma-dangle */
/* eslint-disable semi */
// ** React Imports
import { Fragment } from "react";
import { deletePreviewData } from "./store";
import { useDispatch } from "react-redux";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Form,
  CardHeader,
  Modal,
  Label,
  Input,
  Button,
  CardBody,
  CardText,
  CardTitle,
  ModalBody,
  InputGroup,
  ModalHeader,
  FormFeedback,
  InputGroupText,
} from "reactstrap";

// ** Third Party Components

const ConfirmationModal = ({ open, setOpen, id }) => {
  const dispatch = useDispatch();
  console.log(id);
  // ** Hooks for form

  return (
    <Fragment>
      <Modal
        isOpen={open}
        toggle={() => setOpen(!open)}
        className="modal-dialog-centered"
      >
        <ModalBody className="p-3">
          <h1 className="text-center mb-3">Are You Sure...?????</h1>
          <div className="d-flex w-full justify-content-end">
            <Button
              className="me-1"
              color="warning"
              type="button"
              onClick={() => {
                dispatch(deletePreviewData(id));
                setOpen(false);
              }}
            >
              Yes
            </Button>
            <Button
              outline
              color="secondary"
              type="button"
              onClick={() => setOpen(!open)}
            >
              No
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default ConfirmationModal;
