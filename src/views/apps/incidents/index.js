/* eslint-disable semi */
// ** React Imports
// import { useContext } from "react";
import { useEffect } from "react";
import { getIncidentsData } from "./store";
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
  const incidentsData = useSelector((state) => state.incidents.data);

  useEffect(() => {
    dispatch(getIncidentsData());
  }, [dispatch, getIncidentsData]);

  console.log(incidentsData);

  return (
    <Row>
      <Col sm="12">
        <DataTableWithButtons  data={incidentsData} />
      </Col>
    </Row>
  );
}

export default CountryInformation;
