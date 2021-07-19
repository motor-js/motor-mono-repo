import { useEffect, useState } from "react";
import { Card, CardBody, VectorMap, SectionTitle } from "../../../components";
import { useTable } from "@motor-js/engine";
import usajson from "../../data/maps/usa.json";
import { flattenData } from "../../../methods";
import {
  StyledHeader,
  StyledHeaderRight,
  StyledHeaderRightText,
  StyledHeaderRightIcon,
  StyeldMap,
  StyledTable,
  StyledTH,
  StyledTD,
} from "./style";

const SalesRevenue = () => {
  const [salesRevenues, setSalesRevenues] = useState(null);
  const cols = [
    {
      dataKey: "state",
      qField: "state",
      qLabel: "state",
    },
    {
      dataKey: "order",
      qField: "order",
      qLabel: "order",
    },
    {
      dataKey: "earning",
      qField: "earning",
      qLabel: "earning",
    },
  ];

  const { dataSet } = useTable({
    cols,
    sortCriteria: {
      qSortByAscii: 0,
    },
  });

  useEffect(() => {
    const data = dataSet && flattenData(dataSet);
    setSalesRevenues(data);
  }, [dataSet]);
  const keys = ["STATES", "ORDERS", "EARNINGS"];

  return (
    <Card height={[null, null, null, "100%"]}>
      <StyledHeader>
        <SectionTitle title="Sales Revenue" />
        <StyledHeaderRight>
          <StyledHeaderRightText>Country</StyledHeaderRightText>
          <StyledHeaderRightIcon>
            USA <i className="fa fa-chevron-down" />
          </StyledHeaderRightIcon>
        </StyledHeaderRight>
      </StyledHeader>
      <CardBody p={["0px", "0px"]}>
        <StyeldMap>
          <VectorMap
            data={usajson}
            height="200px"
            width="100%"
            color="#d1e6fa"
            selectedColor="#69b2f8"
            checkedLayers={["us-ca", "us-wy", "us-tx", "us-ny", "us-fl"]}
            tooltip
          />
        </StyeldMap>
        <StyledTable borderless>
          <thead>
            <tr>
              {keys.map((key) => (
                <StyledTH key={key}>{key}s</StyledTH>
              ))}
            </tr>
          </thead>
          <tbody>
            {salesRevenues &&
              salesRevenues.map((rev) => (
                <tr key={rev.state}>
                  <StyledTD>{rev.state}</StyledTD>
                  <StyledTD>{rev.order}</StyledTD>
                  <StyledTD>{rev.earning}</StyledTD>
                </tr>
              ))}
          </tbody>
        </StyledTable>
      </CardBody>
    </Card>
  );
};

export default SalesRevenue;
