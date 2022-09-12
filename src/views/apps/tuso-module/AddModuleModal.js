/* eslint-disable comma-dangle */
/* eslint-disable semi */
// ** React Imports
import { Fragment } from "react";
import { addModuleData } from "./store";
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

const AddFacilityModal = ({ open, setOpen }) => {
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
      const newIncident = {
        isDeleted: false,
        moduleName: data.moduleName,
        description: data.description,
        districtID: 1,
      };

      dispatch(addModuleData(newIncident));

      reset({
        moduleName: "",
        description: "",
      });
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
    reset({
      moduleName: "",
      description: "",
    });
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
          <h1 className="text-center mb-1">Add New Module</h1>
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-1">
                  <Label className="form-label" for="moduleName">
                    Module Name
                  </Label>
                  <Controller
                    defaultValue=""
                    control={control}
                    id="moduleName"
                    name="moduleName"
                    render={({ field }) => (
                      <Input
                        placeholder="Enter Module Name"
                        invalid={errors.moduleName && true}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="mb-1">
                  <Label className="form-label" for="description">
                    Description
                  </Label>
                  <Controller
                    defaultValue=""
                    control={control}
                    id="description"
                    name="description"
                    render={({ field }) => (
                      <Input
                        placeholder="Description"
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
                    Reset
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

export default AddFacilityModal;