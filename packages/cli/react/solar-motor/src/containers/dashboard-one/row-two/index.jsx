import { Col } from "../../../components/grid/grid";
import Chart from "../../../components/chart-placeholder"

const RowTwo = () => {

  return (
    <>
      <Col lg={8} xl={7} mt="10px">
        <Chart />
      </Col>
      <Col lg={4} xl={5} mt="10px">
        <Chart />
      </Col>
    </>
  );
};

export default RowTwo;
