/* eslint-disable comma-dangle */
/* eslint-disable semi */
// ** React Imports
import { Fragment } from "react";
import { updateRolesData } from "./store";
import { useDispatch } from "react-redux";

// ** form dependencies
import { useForm, Controller } from "react-hook-form";

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

const AddNewRole = ({ open, setOpen, selectedData }) => {
  const dispatch = useDispatch();
  // ** Hooks for form
  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      const newRole = {
        ...selectedData,
        roleName: data.roleName,
        description: data.description,
      };

      // ** Dispatch action to add new role
      dispatch(updateRolesData(newRole));

      // ** Reset form
      reset({
        roleName: "",
        description: "",
      });

      // ** Close modal
      setOpen(false);
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: "manual",
          });
        }
      }
    }
  };

  const handleReset = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Modal
        isOpen={open}
        toggle={() => setOpen(!open)}
        className="modal-dialog-centered"
      >
        <ModalHeader
          className="bg-transparent"
          toggle={() => setOpen(!open)}
        ></ModalHeader>
        {/* <ModalBody className="px-sm-5 mx-50 pb"> */}
        <ModalBody className="">
          <h1 className="text-center mb-1">Add New Role</h1>
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-1">
                  <Label className="form-label" for="roleName">
                    Role Name
                  </Label>
                  <Controller
                    defaultValue={selectedData.roleName}
                    control={control}
                    id="roleName"
                    name="roleName"
                    render={({ field }) => (
                      <Input
                        placeholder="Enter Role Name"
                        invalid={errors.roleName && true}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="mb-1">
                  <Label className="form-label" for="description">
                    Role Description
                  </Label>
                  <Controller
                    defaultValue={selectedData.description}
                    control={control}
                    id="description"
                    name="description"
                    render={({ field }) => (
                      <Input
                        placeholder="Enter Description"
                        invalid={errors.description && true}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="d-flex">
                  <Button className="me-1" color="warning" type="submit">
                    Submit
                  </Button>
                  <Button
                    outline
                    color="secondary"
                    type="reset"
                    onClick={handleReset}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default AddNewRole;
