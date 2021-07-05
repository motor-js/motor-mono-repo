import { Col } from "../../../components";
import CryptoChart from "../../../components/dashboard-three/crypto-chart";
import Cryptcurrencies from "../../../components/dashboard-three/cryptocurrencies";

const RowTwo = () => {
  return (
    <>
      <Col lg={9} mt="10px">
        <CryptoChart />
      </Col>
      <Col lg={3} mt="10px">
        <Cryptcurrencies />
      </Col>
    </>
  );
};

export default RowTwo;
