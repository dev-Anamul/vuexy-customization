/* eslint-disable comma-dangle */
/* eslint-disable semi */
// ** React Imports
import { Fragment } from "react";
import { updateUserData } from "./store";
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

const AddPorvinceModal = ({ open, setOpen, selectedData, roles }) => {
  const dispatch = useDispatch();
  // ** Hooks for form
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      const newUser = {
        ...selectedData,
        name: data.name,
        surname: data.surname,
        email: data.email,
        username: data.username,
        password: data.password,
        cellphone: data.cellphone,
        roleID: data.roleID,
        // photoPath: data.photoPath,
      };

      // ** Dispatch action to add new province
      console.log("newUser", newUser);

      dispatch(updateUserData(newUser));

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
          <h1 className="text-center mb-1">Add New Province</h1>
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-1">
                  <Label className="form-label" for="name">
                    Name
                  </Label>
                  <Controller
                    defaultValue={selectedData.name}
                    control={control}
                    id="name"
                    name="name"
                    render={({ field }) => (
                      <Input
                        placeholder="Enter Your Name"
                        invalid={errors.name && true}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="mb-1">
                  <Label className="form-label" for="surname">
                    Surname
                  </Label>
                  <Controller
                    defaultValue={selectedData.surname}
                    control={control}
                    id="surname"
                    name="surname"
                    render={({ field }) => (
                      <Input
                        placeholder="Enter Your Surname"
                        invalid={errors.surname && true}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="mb-1">
                  <Label className="form-label" for="email">
                    Email
                  </Label>
                  <Controller
                    defaultValue={selectedData.email}
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
                    defaultValue={selectedData.username}
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
                    defaultValue={selectedData.password}
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
                    defaultValue={selectedData.cellphone}
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
                  <Label className="form-label" for="roleID">
                    Photo Path
                  </Label>
                  <Controller
                    defaultValue={selectedData.roleID}
                    control={control}
                    id="roleID"
                    name="roleID"
                    render={({ field }) => (
                      <Input
                        type="select"
                        placeholder="Enter Your Photo Path"
                        invalid={errors.photoPath && true}
                        {...field}
                      >
                        {roles &&
                          roles.map((role) => (
                            <option key={role.oid} value={role.oid}>
                              {role.roleName}
                            </option>
                          ))}
                      </Input>
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

export default AddPorvinceModal;
