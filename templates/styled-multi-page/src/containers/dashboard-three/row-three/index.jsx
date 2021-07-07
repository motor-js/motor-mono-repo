/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  SectionTitle,
} from "../../../components";
import { Watchlists } from "../../../components/data/dashboard-three";
import Watchlist from "../../../components/dashboard-three/watchlist";

const RowThree = () => {
  let borderProps = {
    borderStyle: "solid",
    borderWidth: ["0px"],
    borderColor: "border",
  };

  return (
    <Col col={12} mt="10px">
      <Card>
        <CardHeader>
          <SectionTitle title="Cryptocurrency Watchlist" />
        </CardHeader>
        <CardBody p={["0px", "0px"]}>
          <Row noGutter>
            {Watchlists &&
              Watchlists.map((item, i) => {
                if (i !== 0) {
                  const index = i + 1;
                  if (index % 2 === 0) {
                    borderProps = {
                      ...borderProps,
                      borderLeftWidth: [null, null, 1, 1],
                      borderTopWidth: [1, null, null, 0],
                    };
                  } else {
                    borderProps = {
                      ...borderProps,
                      borderLeftWidth: [null, 1, 0, 1],
                      borderTopWidth: [1, null, null, 0],
                    };
                  }
                  if (i === 1) {
                    borderProps = {
                      ...borderProps,
                      borderTopWidth: [1, 0],
                    };
                  }
                }
                return (
                  <Col key={item.id} col sm={6} lg {...borderProps}>
                    <Watchlist
                      icon={item.icon}
                      title={item.title}
                      subtitle={item.subtitle}
                      coin={item.coin}
                      coinRate={item.coinRate}
                      coinStatus={item.coinStatus}
                      color={item.color}
                      markets={item.markets}
                      chart={item.chart}
                    />
                  </Col>
                );
              })}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RowThree;
