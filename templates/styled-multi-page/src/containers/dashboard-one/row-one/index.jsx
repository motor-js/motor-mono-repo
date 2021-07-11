import { Col } from "../../../components";
import { conversions } from "../../../components/data/dashboard-one";
import Conversion from "../../../components/dashboard-one/conversion";
// import { useData } from "@motor-js/engine";

const RowOne = () => {
  // const cols = [
  //   {
  //     qField: "transaction_id",
  //     qLabel: "id",
  //   },
  //   {
  //     qField: "title",
  //     qLabel: "id",
  //   },
  //   {
  //     qField: "=sum(Quantity * Price)",
  //     qLabel: "Revenue",
  //     // useFormatting: true,
  //     // qNumType: "M",
  //     // qNumFmt: "£#,##0",
  //   },
  // ];

  // const { dataSet, select } = useData({
  //   cols,
  // });

  // console.log("conversions", conversions);
  return (
    <>
      {conversions.map((data) => (
        <Col sm={6} lg={3} mt={["10px", null, null, "0px"]} key={data.id}>
          <Conversion
            title={data.title}
            rate={data.rate}
            change={data.change}
            chart={data.chart}
          />
        </Col>
      ))}
    </>
  );
};

export default RowOne;
