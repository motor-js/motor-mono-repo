import { Col } from "../../../components/grid/grid";
import KpiPlaceholder from "../../../components/kpi-placeholder"

//import KPI from "../../../components/kpi"
//import { useData } from "@motor-js/engine"

const RowOne = () => {

  /*
    // Example to get you started....
    const qMetrics = [
      {
        qName: "metric_name",
        qExpr: "metric_expression",
        qType: "qStringExpression", // qStringExpression or qValueExpression (if a pure number is to be returned)
      },
    ];

    const { metrics } = useData({
      qMetrics
    });  
  */

  return (
    <>
        <Col sm={6} lg={3} mt={["10px", null, null, "0px"]}>
          <KpiPlaceholder />
          {/*
            <KPI 
              title={"Example KPI"} 
              rate={"1,000"} 
              change={change}
              chart={false}
            />
          */}
        </Col>
        <Col sm={6} lg={3} mt={["10px", null, null, "0px"]}>
          <KpiPlaceholder />
        </Col>
        <Col sm={6} lg={3} mt={["10px", null, null, "0px"]}>
          <KpiPlaceholder />
        </Col>
        <Col sm={6} lg={3} mt={["10px", null, null, "0px"]}>
          <KpiPlaceholder />
        </Col>
    </>
  );
};

export default RowOne;
