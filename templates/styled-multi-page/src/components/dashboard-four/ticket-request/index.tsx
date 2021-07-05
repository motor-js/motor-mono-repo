import { FC } from "react";
import {
    Card,
    CardBody,
    SectionTitle,
    HorizontalBarChart,
} from "@doar/components";
import { ticketRequestChart } from "@doar/shared/data/dashboard-four";
import { StyledHeader, StyledChart } from "./style";

const TicketRequest: FC = () => {
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
