import { Col } from "../../../components/grid/grid";
import Chart from "../../../components/chart-placeholder";

const RowOne = () => {
  return (
    <>
      <Col lg={8} xl={9} mt={3}>
        <Chart />
      </Col>
      <Col lg={4} xl={3} mt={3}>
        <Chart />
      </Col>
    </>
  );
};

export default RowOne;
