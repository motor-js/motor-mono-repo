import { Col } from "../../../components";
import { conversions } from "../../../components/data/dashboard-one";
import Conversion from "../../../components/dashboard-one/conversion";

const RowOne = () => {
  return (
    <>
      {conversions.map((data) => (
        <Col sm={6} lg={3} mt={["10px", null, null, "0px"]} key={data.id}>
          <Conversion
            title={data.title}
            rate={data.rate}
            change={data.change}
            chart={data.chart}
          />
        </Col>
      ))}
    </>
  );
};

export default RowOne;
