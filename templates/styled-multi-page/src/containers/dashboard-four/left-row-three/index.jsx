import { Col } from "../../../components";
import RecentActivities from "../../../components/dashboard-four/recent-activities";
import AgentPoints from "../../../components/dashboard-four/agent-points";

const LeftRowThree = () => {
  return (
    <>
      <Col md={6} mt="10px">
        <RecentActivities />
      </Col>
      <Col md={6} mt="10px">
        <AgentPoints />
      </Col>
    </>
  );
};

export default LeftRowThree;
