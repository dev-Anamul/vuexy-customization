/* eslint-disable comma-dangle */
/* eslint-disable semi */
// ** React Imports
import { Fragment } from "react";
import { addPreviewData } from "./store";
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

const AddPorvinceModal = ({ open, setOpen }) => {
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
      const newPreview = {
        userAccountID: data.userAccountID,
        incidentTypeID: data.incidentTypeID,
      };

      // ** Dispatch action to add new province
      console.log("newUser", newPreview);

      dispatch(addPreviewData(newPreview));

      // ** reset the form
      reset({
        userAccountID: "",
        incidentTypeID: "",
      });

      // ** close the modal
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
      userAccountID: "",
      incidentTypeID: "",
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
          <h1 className="text-center mb-1">Add New Province</h1>
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-1">
                  <Label className="form-label" for="userAccountID">
                    User Account ID
                  </Label>
                  <Controller
                    defaultValue=""
                    control={control}
                    id="userAccountID"
                    name="userAccountID"
                    render={({ field }) => (
                      <Input
                        placeholder="Enter User Account ID"
                        invalid={errors.userAccountID && true}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="mb-1">
                  <Label className="form-label" for="incidentTypeID">
                    Incident Type ID
                  </Label>
                  <Controller
                    defaultValue=""
                    control={control}
                    id="incidentTypeID"
                    name="incidentTypeID"
                    render={({ field }) => (
                      <Input
                        placeholder="Enter Incident Type ID"
                        invalid={errors.incidentTypeID && true}
                        {...field}
                      />
                    )}
                  />
                </div>
                {/* <div className="mb-1">
                  <Label className="form-label" for="email">
                    Email
                  </Label>
                  <Controller
                    defaultValue=""
                    control={control}
                    id="email"
                    name="email"
                    render={({ field }) => (
                      <Input
                        placeholder="Enter Your Email"
                        invalid={errors.email && true}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="mb-1">
                  <Label className="form-label" for="username">
                    Username
                  </Label>
                  <Controller
                    defaultValue=""
                    control={control}
                    id="username"
                    name="username"
                    render={({ field }) => (
                      <Input
                        placeholder="Enter Your Username"
                        invalid={errors.username && true}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="mb-1">
                  <Label className="form-label" for="password">
                    Password
                  </Label>
                  <Controller
                    defaultValue=""
                    control={control}
                    id="password"
                    name="password"
                    render={({ field }) => (
                      <Input
                        placeholder="Enter Your Password"
                        invalid={errors.password && true}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="mb-1">
                  <Label className="form-label" for="cellphone">
                    Cellphone
                  </Label>
                  <Controller
                    defaultValue=""
                    control={control}
                    id="cellphone"
                    name="cellphone"
                    render={({ field }) => (
                      <Input
                        placeholder="Enter Your Cellphone"
                        invalid={errors.cellphone && true}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="mb-1">
                  <Label className="form-label" for="photoPath">
                    Photo Path
                  </Label>
                  <Controller
                    defaultValue=""
                    control={control}
                    id="photoPath"
                    name="photoPath"
                    render={({ field }) => (
                      <Input
                        placeholder="Enter Your Photo Path"
                        invalid={errors.photoPath && true}
                        {...field}
                      />
                    )}
                  />
                </div> */}
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

export default AddPorvinceModal;
