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
import { useEffect, useState } from "react";

const Customers = () => {
  const [customers, setCustomers] = useState(null);
  const cols = [
    {
      dataKey: "id",
      qField: "id",
      qLabel: "id",
    },
    {
      dataKey: "name",
      qField: "name",
      qLabel: "name",
    },
    {
      dataKey: "bg",
      qField: "bg",
      qLabel: "bg",
    },
    {
      dataKey: "image",
      qField: "image",
      qLabel: "image",
    },
    {
      dataKey: "chat_link",
      qField: "chat_link",
      qLabel: "chat_link",
    },
    {
      dataKey: "profile_link",
      qField: "profile_link",
      qLabel: "profile_link",
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

    setCustomers(data);
  }, [dataSet]);
  return (
    <Card height="100%">
      <StyledHeader>
        <SectionTitle title="New Customers" />
        <StyledHeaderRight>
          {/* <StyledIcon href="#" aria-label="refresh">
            <i className="fa fa-redo" />
          </StyledIcon>
          <StyledIcon href="#" ml="10px" aria-label="more options">
            <i className="fa fa-ellipsis-v" />
          </StyledIcon> */}
        </StyledHeaderRight>
      </StyledHeader>
      <ListGroup flush>
        {customers &&
          customers.map((cst) => (
            <ListGroupItem key={cst.id} display="flex" px={[null, "20px"]}>
              <Item
                id={cst.id}
                name={cst.name}
                image={cst.image}
                bg={cst.bg}
                chat_link={cst.chat_link}
                profile_link={cst.profile_link}
              />
            </ListGroupItem>
          ))}
      </ListGroup>
      {/* <StyledFooter>
        <StyledFooterLink href="/profile-view">
          View More Customers <i className="icon ion-md-arrow-down mg-l-5" />
        </StyledFooterLink>
      </StyledFooter> */}
    </Card>
  );
};

export default Customers;
