import { useEffect, useState } from "react";
import { useTable } from "@motor-js/engine";
import {
  Card,
  ListGroup,
  ListGroupItem,
  SectionTitle,
} from "../../../components";
import { flattenData } from "../../../methods";
import Item from "./item";
import {
  StyledHeader,
  StyledHeaderRight,
  // StyledIcon,
  // StyledFooter,
  // StyledFooterLink,
} from "./style";

const Transaction = () => {
  const [transaction, setTransaction] = useState(null);
  const cols = [
    {
      dataKey: "id",
      qField: "transaction_id",
      qLabel: "id",
    },
    {
      dataKey: "title",
      qField: "transaction_title",
      qLabel: "title",
    },
    {
      dataKey: "date",
      qField: "transaction_date",
      qLabel: "date",
    },
    {
      dataKey: "count",
      qField: "count",
      // qField: "=num(Sum(count),'$#,##0.00')",
      qLabel: "count",
    },
    {
      dataKey: "status",
      qField: "status",
      qLabel: "status",
    },
    {
      dataKey: "state",
      qField: "transaction_state",
      qLabel: "state",
    },
  ];

  const { dataSet } = useTable({
    cols,
  });

  useEffect(() => {
    const data = dataSet && flattenData(dataSet);
    setTransaction(data);
  }, [dataSet]);
  return (
    <Card height="100%">
      <StyledHeader>
        <SectionTitle title="Transaction History" />
        <StyledHeaderRight>
          {/* <StyledIcon href="#" aria-label="refesh">
            <i className="fa fa-redo" />
          </StyledIcon>
          <StyledIcon href="#" ml="10px" aria-label="more options">
            <i className="fa fa-ellipsis-v" />
          </StyledIcon> */}
        </StyledHeaderRight>
      </StyledHeader>
      <ListGroup flush>
        {transaction &&
          transaction.map((tras) => (
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
      {/* <StyledFooter>
        <StyledFooterLink href="/invoice">
          View All Transactions <i className="icon ion-md-arrow-down mg-l-5" />
        </StyledFooterLink>
      </StyledFooter> */}
    </Card>
  );
};

export default Transaction;
