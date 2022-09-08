/* eslint-disable semi */
// ** React Imports
// import { useContext } from "react";
import { useEffect } from "react";
import { getCountryData } from "./store";
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
  const countryData = useSelector((state) => state.countries.data);

  useEffect(() => {
    dispatch(getCountryData());
  }, [dispatch, getCountryData]);

  console.log(countryData);

  return (
    <Row>
      <Col sm="12">
        <DataTableWithButtons  data={countryData} />
      </Col>
    </Row>
  );
}

export default CountryInformation;
