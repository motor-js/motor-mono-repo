import { Col } from "../../../components/grid/grid";
import KPI from "../../../components/kpi-placeholder"

const RowOne = () => {

  const cards = [1,2,3,4]
  return (
    <>
    {cards.map((data) => (
    <Col sm={6} lg={3} mt={["10px", null, null, "0px"]} key={data} >
      <KPI data={data}/>
    </Col>
    ))}
    </>
  );
};

export default RowOne;
