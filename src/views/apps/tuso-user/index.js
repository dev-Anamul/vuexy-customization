/* eslint-disable semi */
// ** React Imports
// import { useContext } from "react";
import { useEffect } from "react";
import { getUserData } from "./store";
import { getRolesData } from "../tuso-roles/store";
import { useSelector, useDispatch } from "react-redux";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Styles
import "@styles/react/libs/charts/apex-charts.scss";
import "@styles/base/pages/dashboard-ecommerce.scss";
import DataTableWithButtons from "./DataTableWithButton";

// ** Demo Components

function ProvincesInformation() {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.userAccounts.data);
  const rolesData = useSelector((state) => state.userRoles.data);

  useEffect(() => {
    // ** dispatch user data
    dispatch(getUserData());

    // ** dispatch roles data
    dispatch(getRolesData());
  }, [dispatch, getUserData, getRolesData]);

  console.log(usersData);

  return (
    <Row>
      <Col sm="12">
        <DataTableWithButtons data={usersData} roles={rolesData}/>
      </Col>
    </Row>
  );
}

export default ProvincesInformation;
