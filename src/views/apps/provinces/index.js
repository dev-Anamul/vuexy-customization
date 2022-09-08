/* eslint-disable semi */
// ** React Imports
// import { useContext } from "react";
import { useEffect } from "react";
import { getProvinceData } from "./store";
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
  const provincesData = useSelector((state) => state.provinces.data);

  useEffect(() => {
    dispatch(getProvinceData());
  }, [dispatch, getProvinceData]);

  console.log(provincesData);

  return (
    <Row>
      <Col sm="12">
        <DataTableWithButtons  data={provincesData} />
      </Col>
    </Row>
  );
}

export default ProvincesInformation;
