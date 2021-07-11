import { useTable } from "@motor-js/engine";
import {
  Card,
  ListGroup,
  ListGroupItem,
  SectionTitle,
} from "../../../components";
// import { customers } from "../../data/dashboard-one";
import Item from "./item";
import {
  StyledHeader,
  StyledHeaderRight,
  StyledIcon,
  StyledFooter,
  StyledFooterLink,
} from "./style";

import img1 from "../../../images/img23.80b3363e.jpg";
import img2 from "../../../images/img16.6a70955e.jpg";
import { useEffect, useState } from "react";
// const customers = [
//   {
//     id: "#00222",
//     name: "Socrates Itumay",
//     bg: "gray600",
//     chat_link: "/apps/chat",
//     profile_link: "/profile-view",
//   },
//   {
//     id: "#00221",
//     name: "Reynante Labares",
//     image: img1,
//     chat_link: "/apps/chat",
//     profile_link: "/profile-view",
//   },
//   {
//     id: "#00220",
//     name: "Marianne Audrey",
//     image: img2,
//     chat_link: "/apps/chat",
//     profile_link: "/profile-view",
//   },
//   {
//     id: "#00219",
//     name: "Owen Bongcaras",
//     bg: "indigo",
//     chat_link: "/apps/chat",
//     profile_link: "/profile-view",
//   },
//   {
//     id: "#00218",
//     name: "Kirby Avendula",
//     bg: "primary",
//     chat_link: "/apps/chat",
//     profile_link: "/profile-view",
//   },
// ];

const flattenData = (d) => {
  let arr = [];
  let newObj = {};
  d.map((res) => {
    Object.keys(res).forEach((item) => {
      if (item === "key") {
        newObj[item] = res[item];
      } else {
        newObj[item] = res[item].text;
      }
    });
    arr.push(newObj);
    newObj = {};
    return null;
  });
  return arr;
};

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
  });
  useEffect(() => {
    const data = dataSet && flattenData(dataSet);
    // dataSet && setLoading(false);
    setCustomers(data);
    // console.log(data);
  }, [dataSet]);
  return (
    <Card height="100%">
      <StyledHeader>
        <SectionTitle title="New Customers" />
        <StyledHeaderRight>
          <StyledIcon href="#" aria-label="refresh">
            <i className="fa fa-redo" />
          </StyledIcon>
          <StyledIcon href="#" ml="10px" aria-label="more options">
            <i className="fa fa-ellipsis-v" />
          </StyledIcon>
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
      <StyledFooter>
        <StyledFooterLink href="/profile-view">
          View More Customers <i className="icon ion-md-arrow-down mg-l-5" />
        </StyledFooterLink>
      </StyledFooter>
    </Card>
  );
};

export default Customers;
