/* eslint-disable semi */
// ** React Imports
// import { useContext } from "react";
import { useEffect } from "react";
import { getIncidentsStatusData } from "./store";
import { useSelector, useDispatch } from "react-redux";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Styles
import "@styles/react/libs/charts/apex-charts.scss";
import "@styles/base/pages/dashboard-ecommerce.scss";
import DataTableWithButtons from "./DataTableWithButton";

// ** Demo Components

function IncidentStatusInformation() {
  const dispatch = useDispatch();
  const incidentStatusData = useSelector((state) => state.incidentStatus.data);

  useEffect(() => {
    dispatch(getIncidentsStatusData());
  }, [dispatch, getIncidentsStatusData]);

  console.log(incidentStatusData);

  return (
    <Row>
      <Col sm="12">
        <DataTableWithButtons  data={incidentStatusData} />
      </Col>
    </Row>
  );
}

export default IncidentStatusInformation;
