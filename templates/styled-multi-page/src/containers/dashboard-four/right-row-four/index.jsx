import { Col } from "../../../components";
import Transactions from "../../../components/dashboard-four/transaction";

const RightRowFour = () => {
  return (
    <>
      <Col col={12} md={6} lg={12} mt="10px">
        <Transactions />
      </Col>
    </>
  );
};

export default RightRowFour;
