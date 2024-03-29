import { Col } from "../../../components";
import RevenueGrowth from "../../../components/dashboard-one/revenue-growth";
import AccountRetention from "../../../components/dashboard-one/account-retention";

const RowTwo = () => {
  return (
    <>
      <Col lg={8} xl={7} mt="10px">
        <RevenueGrowth />
      </Col>
      <Col lg={4} xl={5} mt="10px">
        <AccountRetention />
      </Col>
    </>
  );
};

export default RowTwo;
