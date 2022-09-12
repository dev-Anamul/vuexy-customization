/* eslint-disable semi */
// ** React Imports
// import { useContext } from "react";
import { useEffect } from "react";
import { getUserData } from "./store";
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

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch, getUserData]);

  console.log(usersData);

  return (
    <Row>
      <Col sm="12">
        <DataTableWithButtons data={usersData} />
      </Col>
    </Row>
  );
}

export default ProvincesInformation;
