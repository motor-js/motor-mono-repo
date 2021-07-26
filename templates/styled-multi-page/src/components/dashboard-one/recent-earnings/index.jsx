import { useEffect, useState } from "react";
import { BarChart2 } from "react-feather";
import { useTable } from "@motor-js/engine";
import {
  Card,
  CardBody,
  ButtonGroup,
  Button,
  Media,
  MediaBody,
  SectionTitle,
} from "../../../components";
import { flattenData } from "../../../methods";
import {
  StyledHeader,
  StyledMediaWrap,
  StyledMedaLeft,
  StyledMediaTitle,
  StyledMediaSub,
  StyledTable,
  StyledTH,
  StyledTD,
  StyledTDRate,
} from "./style";

const RecentEarnings = () => {
  const [recentEarnings, setRecentEarnings] = useState(null);

  const cols = [
    {
      dataKey: "date",
      qField: "date",
      qLabel: "date",
    },
    {
      dataKey: "sales_count",
      // qField: "sales_count",
      qField: "=num(Sum(sales_count),'#,##0')",
      qLabel: "sales_count",
    },
    {
      dataKey: "gross_earnings",
      // qField: "gross_earnings",
      qField: "=num(Sum(gross_earnings),'$#,##0')",
      qLabel: "gross_earnings",
    },
    {
      dataKey: "tax_withheld",
      // qField: "tax_withheld",
      qField: "=num(Sum(tax_withheld),'$#,##0')",
      qLabel: "tax_withheld",
    },
    {
      dataKey: "earning",
      // qField: "net_earinings_earning",
      qField: "=num(Sum(earning),'$#,##0')",
      qLabel: "earning",
    },
    {
      dataKey: "growth",
      // qField: "net_earinings_growth",
      qField: "=num(Avg(net_earinings_growth),'#,##0.0%')",
      qLabel: "growth",
    },
    {
      dataKey: "status",
      qField: "net_earinings_status",
      qLabel: "status",
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
    setRecentEarnings(data);
  }, [dataSet]);

  const keys = [
    "DATE",
    "SALES COUNT",
    "GROSS EARNINGS",
    "TAX WITHHELD",
    "NET EARININGS",
  ];

  return (
    <Card mb="10px">
      <StyledHeader>
        <div>
          <SectionTitle
            title="Your Most Recent Earnings"
            desc="Your sales and referral earnings over the last 30 days"
          />
        </div>
        <ButtonGroup mt={["20px", "0px"]}>
          <Button size="xs" color="white" active>
            Range
          </Button>
          <Button size="xs" color="white">
            Period
          </Button>
        </ButtonGroup>
      </StyledHeader>
      <CardBody py={["30px", "30px"]}>
        <StyledMediaWrap>
          <Media>
            <StyledMedaLeft bg="teal">
              <BarChart2 size="24" />
            </StyledMedaLeft>
            <MediaBody>
              <StyledMediaTitle>Gross Earnings</StyledMediaTitle>
              <StyledMediaSub>$1,958,104</StyledMediaSub>
            </MediaBody>
          </Media>
          <Media mt={["20px", "0px"]} ml={[null, "15px", "40px"]}>
            <StyledMedaLeft bg="pink">
              <BarChart2 size="24" />
            </StyledMedaLeft>
            <MediaBody>
              <StyledMediaTitle>Tax Withheld</StyledMediaTitle>
              <StyledMediaSub>
                $234,769<small>.50</small>
              </StyledMediaSub>
            </MediaBody>
          </Media>
          <Media mt={["20px", "0px"]} ml={[null, "15px", "40px"]}>
            <StyledMedaLeft bg="primary">
              <BarChart2 size="24" />
            </StyledMedaLeft>
            <MediaBody>
              <StyledMediaTitle>Net Earnings</StyledMediaTitle>
              <StyledMediaSub>
                $1,608,469<small>.50</small>
              </StyledMediaSub>
            </MediaBody>
          </Media>
        </StyledMediaWrap>
      </CardBody>

      {recentEarnings && (
        <StyledTable>
          <thead>
            <tr>
              {keys.map((key) => (
                <StyledTH key={key}>{key.replace(/_/g, " ")}</StyledTH>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentEarnings.map((ear) => (
              <tr key={ear.date}>
                <StyledTD color="text3">{ear.date}</StyledTD>
                <StyledTD fontWeight="500">{ear.sales_count}</StyledTD>
                <StyledTD color="teal">+ {ear.gross_earnings}</StyledTD>
                <StyledTD color="pink">- {ear.tax_withheld}</StyledTD>
                <StyledTD fontWeight="500">
                  {ear.earning}{" "}
                  <StyledTDRate
                    color={ear.status === "up" ? "success" : "danger"}
                  >
                    {ear.status === "up" && <i className="fa fa-arrow-up" />}
                    {ear.status === "down" && (
                      <i className="fa fa-arrow-down" />
                    )}{" "}
                    {ear.growth}
                  </StyledTDRate>
                </StyledTD>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
    </Card>
  );
};

export default RecentEarnings;
