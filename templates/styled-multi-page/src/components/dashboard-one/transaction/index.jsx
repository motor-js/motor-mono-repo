import {
  Card,
  ListGroup,
  ListGroupItem,
  SectionTitle,
} from "../../../components";
import { transaction } from "../../data/dashboard-one";
import Item from "./item";
import {
  StyledHeader,
  StyledHeaderRight,
  StyledIcon,
  StyledFooter,
  StyledFooterLink,
} from "./style";

const Transaction = () => {
  return (
    <Card height="100%">
      <StyledHeader>
        <SectionTitle title="Transaction History" />
        <StyledHeaderRight>
          <StyledIcon href="#" aria-label="refesh">
            <i className="fa fa-redo" />
          </StyledIcon>
          <StyledIcon href="#" ml="10px" aria-label="more options">
            <i className="fa fa-ellipsis-v" />
          </StyledIcon>
        </StyledHeaderRight>
      </StyledHeader>
      <ListGroup flush>
        {transaction.map((tras) => (
          <ListGroupItem key={tras.id} display="flex" px={[null, "20px"]}>
            <Item
              title={tras.title}
              count={tras.count}
              date={tras.date}
              status={tras.status}
              state={tras.state}
            />
          </ListGroupItem>
        ))}
      </ListGroup>
      <StyledFooter>
        <StyledFooterLink href="/invoice">
          View All Transactions <i className="icon ion-md-arrow-down mg-l-5" />
        </StyledFooterLink>
      </StyledFooter>
    </Card>
  );
};

export default Transaction;
