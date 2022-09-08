/* eslint-disable semi */
// ** React Imports
// import { useContext } from "react";
import { useEffect } from "react";
import { getIncidentTypeData } from "./store";
import { useSelector, useDispatch } from "react-redux";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Styles
import "@styles/react/libs/charts/apex-charts.scss";
import "@styles/base/pages/dashboard-ecommerce.scss";
import DataTableWithButtons from "./DataTableWithButton";

// ** Demo Components

function IncidentTypeInformation() {
  const dispatch = useDispatch();
  const incidentTypeData = useSelector((state) => state.incidentTypes.data);

  useEffect(() => {
    dispatch(getIncidentTypeData());
  }, [dispatch, getIncidentTypeData]);

  console.log(incidentTypeData);

  return (
    <Row>
      <Col sm="12">
        <DataTableWithButtons data={incidentTypeData} />
      </Col>
    </Row>
  );
}

export default IncidentTypeInformation;
