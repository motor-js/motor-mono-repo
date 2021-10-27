import { useData } from "@motor-js/engine";
import {
  Card,
  CardBody,
  SectionTitle,
  Text,
  ListGroup,
} from "../../../components";
import {
  StyledHeader,
  StyledTotalWrap,
  StyledTotal,
  StyledTotalStars,
  StyledStar,
  StyledListItem,
  StyledRateText,
  StyledStars,
  StyledRateCount,
  StyledRatePer,
} from "./style";

const Rating = () => {
  const qMetrics = [
    {
      qName: "OverallRating",
      // qExpr: "num(Sum(today),'$#,##0')",
      qExpr: "num(Sum(4.2),'#,##0.0')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
  ];
  const cols = [
    {
      qField: "[RateText]",
      qLabel: "RateText",
    },
    {
      qField: "=sum(RateCount)",
      qLabel: "RateCount",
      qNumType: "M",
      qNumFmt: "#,##0",
    },
    {
      qField: "=sum(RatePer)", // TODO why does today and yesterday not appear in legend
      qLabel: "RatePer",
      qNumType: "M",
      qNumFmt: "#,##0%",
    },
  ];
  const { dataSet, metrics } = useData({
    cols,
    qSortByAscii: 0,
    qMetrics,
  });

  const { data } = dataSet;

  return (
    <Card>
      {dataSet && (
        <>
          <StyledHeader>
            <SectionTitle title="Overall Rating" />
            <Text fontSize="12px" color="text3" mt="5px">
              Measures the quality or your support team’s efforts.
            </Text>
          </StyledHeader>
          <CardBody p={[0, 0]}>
            <StyledTotalWrap>
              <StyledTotal>{metrics && metrics["OverallRating"]}</StyledTotal>
              <StyledTotalStars>
                <StyledStar className="fa fa-star" $status="full" />
                <StyledStar className="fa fa-star" $status="full" />
                <StyledStar className="fa fa-star" $status="full" />
                <StyledStar className="fa fa-star" $status="full" />
                <StyledStar className="fa fa-star" $status="empty" />
              </StyledTotalStars>
            </StyledTotalWrap>
            <ListGroup flush>
              <StyledListItem>
                <StyledRateText>5.0</StyledRateText>
                <StyledStars>
                  <StyledStar className="fa fa-star" $status="full" />
                  <StyledStar className="fa fa-star" $status="full" />
                  <StyledStar className="fa fa-star" $status="full" />
                  <StyledStar className="fa fa-star" $status="full" />
                  <StyledStar className="fa fa-star" $status="full" />
                </StyledStars>
                <StyledRateCount>
                  {data && data[0]["RateCount"]}
                </StyledRateCount>
                <StyledRatePer> {data && data[0]["RatePer"]}</StyledRatePer>
              </StyledListItem>
              <StyledListItem>
                <StyledRateText>4.0</StyledRateText>
                <StyledStars>
                  <StyledStar className="fa fa-star" $status="full" />
                  <StyledStar className="fa fa-star" $status="full" />
                  <StyledStar className="fa fa-star" $status="full" />
                  <StyledStar className="fa fa-star" $status="full" />
                  <StyledStar className="fa fa-star" $status="empty" />
                </StyledStars>
                <StyledRateCount>
                  {data && data[1]["RateCount"]}
                </StyledRateCount>
                <StyledRatePer> {data && data[1]["RatePer"]}</StyledRatePer>
              </StyledListItem>
              <StyledListItem>
                <StyledRateText>3.0</StyledRateText>
                <StyledStars>
                  <StyledStar className="fa fa-star" $status="full" />
                  <StyledStar className="fa fa-star" $status="full" />
                  <StyledStar className="fa fa-star" $status="full" />
                  <StyledStar className="fa fa-star" $status="empty" />
                  <StyledStar className="fa fa-star" $status="empty" />
                </StyledStars>
                <StyledRateCount>
                  {data && data[2]["RateCount"]}
                </StyledRateCount>
                <StyledRatePer> {data && data[2]["RatePer"]}</StyledRatePer>
              </StyledListItem>
              <StyledListItem>
                <StyledRateText>2.0</StyledRateText>
                <StyledStars>
                  <StyledStar className="fa fa-star" $status="full" />
                  <StyledStar className="fa fa-star" $status="full" />
                  <StyledStar className="fa fa-star" $status="empty" />
                  <StyledStar className="fa fa-star" $status="empty" />
                  <StyledStar className="fa fa-star" $status="empty" />
                </StyledStars>
                <StyledRateCount>
                  {data && data[3]["RateCount"]}
                </StyledRateCount>
                <StyledRatePer> {data && data[3]["RatePer"]}</StyledRatePer>
              </StyledListItem>
              <StyledListItem>
                <StyledRateText>1.0</StyledRateText>
                <StyledStars>
                  <StyledStar className="fa fa-star" $status="full" />
                  <StyledStar className="fa fa-star" $status="empty" />
                  <StyledStar className="fa fa-star" $status="empty" />
                  <StyledStar className="fa fa-star" $status="empty" />
                  <StyledStar className="fa fa-star" $status="empty" />
                </StyledStars>
                <StyledRateCount>
                  {data && data[4]["RateCount"]}
                </StyledRateCount>
                <StyledRatePer> {data && data[4]["RatePer"]}</StyledRatePer>
              </StyledListItem>
            </ListGroup>
          </CardBody>
        </>
      )}
    </Card>
  );
};

export default Rating;
