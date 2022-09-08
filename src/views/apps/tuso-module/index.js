/* eslint-disable semi */
// ** React Imports
// import { useContext } from "react";
import { useEffect } from "react";
import { getModuleData } from "./store";
import { useSelector, useDispatch } from "react-redux";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Styles
import "@styles/react/libs/charts/apex-charts.scss";
import "@styles/base/pages/dashboard-ecommerce.scss";
import DataTableWithButtons from "./DataTableWithButton";

// ** Demo Components

function ModuleInformation() {
  const dispatch = useDispatch();
  const moduleData = useSelector((state) => state.modules.data);

  useEffect(() => {
    dispatch(getModuleData());
  }, [dispatch, getModuleData]);

  console.log(moduleData);

  return (
    <Row>
      <Col sm="12">
        <DataTableWithButtons  data={moduleData} />
      </Col>
    </Row>
  );
}

export default ModuleInformation;
