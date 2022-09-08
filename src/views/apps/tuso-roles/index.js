/* eslint-disable semi */
// ** React Imports
// import { useContext } from "react";
import { useEffect } from "react";
import { getRolesData } from "./store";
import { useSelector, useDispatch } from "react-redux";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Styles
import "@styles/react/libs/charts/apex-charts.scss";
import "@styles/base/pages/dashboard-ecommerce.scss";
import DataTableWithButtons from "./DataTableWithButton";

// ** Demo Components

function RoleInformation() {
  const dispatch = useDispatch();
  const roleData = useSelector((state) => state.userRoles.data);

  useEffect(() => {
    dispatch(getRolesData());
  }, [dispatch, getRolesData]);

  console.log(roleData);

  return (
    <Row>
      <Col sm="12">
        <DataTableWithButtons  data={roleData} />
      </Col>
    </Row>
  );
}

export default RoleInformation;
