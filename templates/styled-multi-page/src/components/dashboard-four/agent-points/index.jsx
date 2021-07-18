import { useTable } from "@motor-js/engine";
import { Card, CardBody, SectionTitle } from "../../../components";
import Item from "./item";
import { StyledHeader } from "./style";

const AgentPoints = () => {
  const cols = [
    {
      dataKey: "agentImage",
      qField: "agentImage",
      qLabel: "agentImage",
    },
    {
      dataKey: "agentName",
      qField: "agentName",
      qLabel: "agentName",
    },
    {
      dataKey: "designation",
      qField: "designation",
      qLabel: "designation",
    },
    {
      dataKey: "points",
      qField: "points",
      qLabel: "points",
    },
  ];

  const { dataSet } = useTable({
    cols,
  });
  return (
    <Card>
      <StyledHeader>
        <SectionTitle title="Agent Performance Points" />
      </StyledHeader>
      <CardBody pt="25px">
        {dataSet &&
          dataSet.map((data, i) => (
            <Item
              mt="25px"
              image={dataSet[i].agentImage.text}
              name={dataSet[i].agentName.text}
              designation={dataSet[i].designation.text}
              points={dataSet[i].points.text}
            />
          ))}
      </CardBody>
    </Card>
  );
};

export default AgentPoints;
