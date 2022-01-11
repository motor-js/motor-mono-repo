import { Card, CardBody } from "../";
import {
  StyledCardTitle,
  StyledCardBottom,
  StyledCardRate,
  StyledCardText,
  StyledCardChangePercent,
  StyledChart,
} from "./style";
import PreloaderChart from "../preloader-chart";
import ApexChart from "../charts/apexchart/apexchart";

const KPI = ({ title, rate, change, chart }) => {

  return (
    <Card>
      {rate ? (
        <CardBody>
          <StyledCardTitle>{title}</StyledCardTitle>
          <StyledCardBottom>
            <StyledCardRate>{rate}</StyledCardRate>
            <StyledCardText>
              <StyledCardChangePercent $growth={change.growth}>
                {change?.percentage}{" "}
                {change?.growth === "up" && <i className="fa fa-arrow-up" />}
                {change?.growth === "down" && (
                  <i className="fa fa-arrow-down" />
                )}{" "}
              </StyledCardChangePercent>
              {change?.time && <>{change?.time}</>}
            </StyledCardText>
          </StyledCardBottom>
          <StyledChart>
            {chart && (
              <ApexChart
                type={chart?.type}
                options={chart?.options}
                series={chart?.series}
                height={70}
              />
            )}
          </StyledChart>
        </CardBody>
      ) : (
        <CardBody>
          <PreloaderChart />
        </CardBody>
      )}
    </Card>
  );
};

export default KPI;
