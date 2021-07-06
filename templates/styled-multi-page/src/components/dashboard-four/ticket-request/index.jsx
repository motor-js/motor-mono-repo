import {
  Card,
  CardBody,
  SectionTitle,
  HorizontalBarChart,
} from "../../../components";
import { ticketRequestChart } from "../../data/dashboard-four";
import { StyledHeader, StyledChart } from "./style";

const TicketRequest = () => {
  return (
    <Card>
      <StyledHeader>
        <SectionTitle title="Tickets By Request Type" />
      </StyledHeader>
      <CardBody>
        <StyledChart>
          <HorizontalBarChart
            data={ticketRequestChart.data}
            options={ticketRequestChart.options}
            width={395}
            height={260}
          />
        </StyledChart>
      </CardBody>
    </Card>
  );
};

export default TicketRequest;
