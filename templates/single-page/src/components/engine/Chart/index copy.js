import React from "react";
import { Skeleton, Card, PageHeader, Select } from "antd";
import useData from "dev-resources/hooks/useData";

// import Widget from "dev-resources/components/Widget";
import AreaChart from "components/engine/AreaChart";
import LineChart from "components/engine/LineChart";
import BarChart from "components/engine/BarChart";
import PieChart from "components/engine/PieChart";
import Widget from "components/Widget";

const Option = Select.Option;

const ChartComponent = ({ dataProps }) => {
  // const [hasData, setHasData] = useState(false);
  const { data, chartConfig } = dataProps;

  const { cols, qTitle, qMetrics, qDimField } = data;
  const { chartType } = chartConfig;

  let Chart = null;

  switch (chartType) {
    case "area":
      Chart = AreaChart;
      break;
    case "line":
      Chart = LineChart;
      break;
    case "bar":
      Chart = BarChart;
      break;
    case "pie":
      Chart = PieChart;
      break;
    default:
      Chart = AreaChart;
  }

  const {
    qLayout,
    qData,
    // measureInfo,
    dataSet,
    title,
    // mData,

    // metrics,
    // endSelections,
    // beginSelections,
    // changePage,
    // selections,
    // select,
    // applyPatches,
  } = useData({
    cols,
    qTitle,
    qMetrics,
    qDimField,
    //qColumnOrder: columnOrder,
    //qCalcCondition: calcCondition,
    // qPage,
    //qInterColumnSortOrder: columnSortOrder,
    // qSupressMissing: true,
    // qSuppressZero: true,
  });

  // useEffect(() => {
  //   if (!mData) return;

  //   setHasData(true);
  // }, [mData]);
  // console.log(qLayout);
  // console.log(qData);

  return (
    <>
      {dataSet ? (
        // <Card className="gx-card" title={title}>
        <Widget styleName="gx-card-full">
          {/* <h2 className="h4 gx-mb-3">Balance History</h2> */}
          <PageHeader
            className="site-page-header"
            // onBack={() => null}
            title="Title"
            subTitle="This is a subtitle"
          />
          <div className="ant-row-flex gx-px-4 gx-pt-4">
            <div className="gx-ml-auto">
              <Select
                className="gx-mb-2 gx-select-sm"
                defaultValue="10"
                // onChange={handleChange}
              >
                <Option value="10">Last 10 days</Option>
                <Option value="20">Last 20 days</Option>
                <Option value="30">Last 30 days</Option>
              </Select>
            </div>
          </div>

          <Chart dataSet={dataSet} config={chartConfig} />
        </Widget>
      ) : (
        <Skeleton active />
      )}
    </>
  );
};

export default ChartComponent;
