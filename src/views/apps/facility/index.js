/* eslint-disable semi */
// ** React Imports
// import { useContext } from "react";
import { useEffect } from "react";
import { getFacilityData } from "./store";
import { useSelector, useDispatch } from "react-redux";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Styles
import "@styles/react/libs/charts/apex-charts.scss";
import "@styles/base/pages/dashboard-ecommerce.scss";
import DataTableWithButtons from "./DataTableWithButton";

// ** Demo Components

function FacilityInformation() {
  const dispatch = useDispatch();
  const facilityData = useSelector((state) => state.facilities.data);

  useEffect(() => {
    dispatch(getFacilityData());
  }, [dispatch, getFacilityData]);

  console.log(facilityData);

  return (
    <Row>
      <Col sm="12">
        <DataTableWithButtons  data={facilityData} />
      </Col>
    </Row>
  );
}

export default FacilityInformation;
