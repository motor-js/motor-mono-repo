import {
  Card,
  CardBody,
  Media,
  MediaBody,
  ApexRadialChart,
} from "../../../components";

import {
  StyledChart,
  StyledTitle,
  StyledDesc,
  StyledMinutes,
  StyledSec,
} from "./style";

const RadialPercentage = ({ title, desc, min, sec, chart }) => {
  return (
    <Card>
      <CardBody position="relative">
        <Media display={["block", "flex"]} alignItems="center">
          <StyledChart>
            <ApexRadialChart
              options={chart.options}
              series={chart.series}
              width="100%"
              height={140}
            />
          </StyledChart>
          <MediaBody mt={["20px", 0]}>
            <StyledTitle>{title}</StyledTitle>
            <StyledDesc>{desc}</StyledDesc>
            <StyledMinutes>
              {min} <StyledSec>/ {sec}</StyledSec>
            </StyledMinutes>
          </MediaBody>
        </Media>
      </CardBody>
    </Card>
  );
};

export default RadialPercentage;
