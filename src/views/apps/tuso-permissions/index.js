/* eslint-disable semi */
// ** React Imports
// import { useContext } from "react";
import { useEffect } from "react";
import { getPermissionData } from "./store";
import { useSelector, useDispatch } from "react-redux";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Styles
import "@styles/react/libs/charts/apex-charts.scss";
import "@styles/base/pages/dashboard-ecommerce.scss";
import DataTableWithButtons from "./DataTableWithButton";

// ** Demo Components

function CountryInformation() {
  const dispatch = useDispatch();
  const permissionData = useSelector((state) => state.userPermissions.data);

  useEffect(() => {
    dispatch(getPermissionData());
  }, [dispatch, getPermissionData]);

  console.log(permissionData);

  return (
    <Row>
      <Col sm="12">
        <DataTableWithButtons  data={permissionData} />
      </Col>
    </Row>
  );
}

export default CountryInformation;
