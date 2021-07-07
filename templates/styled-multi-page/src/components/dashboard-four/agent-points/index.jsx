import { Card, CardBody, SectionTitle } from "../../../components";
import img1 from "../../../images/img15.jpg";
import img2 from "../../../images/img14.jpg";
import img3 from "../../../images/img23.jpg";
import img4 from "../../../images/img22.jpg";
import Item from "./item";
import { StyledHeader } from "./style";

const AgentPoints = () => {
  return (
    <Card>
      <StyledHeader>
        <SectionTitle title="Agent Performance Points" />
      </StyledHeader>
      <CardBody pt="25px">
        <Item
          image={img1}
          name="Katherine Lumaad"
          designation="Technical Support"
          points={12312}
        />
        <Item
          mt="25px"
          image={img2}
          name="Adrian Monino"
          designation="Sales Representative"
          points={10044}
        />
        <Item
          mt="25px"
          image={img3}
          name="Rolando Paloso"
          designation="Software Support"
          points={7500}
        />
        <Item
          mt="25px"
          image={img4}
          name="Dyanne Rose Aceron"
          designation="Sales Representative"
          points={6870}
        />
      </CardBody>
    </Card>
  );
};

export default AgentPoints;
