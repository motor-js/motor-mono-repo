import React from "react";
import { Skeleton, Card } from "antd";
import useData from "dev-resources/hooks/useData";

// import Widget from "dev-resources/components/Widget";
import AreaChart from "components/engine/AreaChart";
import LineChart from "components/engine/LineChart";
import BarChart from "components/engine/BarChart";
import PieChart from "components/engine/PieChart";

const ChartComponent = ({ dataProps }) => {
  // const [hasData, setHasData] = useState(false);
  const { data, chartConfig } = dataProps;

  const { cols, qTitle, qMetrics } = data;
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
    // qLayout,
    // qData,
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

  return (
    <>
      {dataSet ? (
        <Card className="gx-card" title={title}>
          <Chart dataSet={dataSet} config={chartConfig} />
        </Card>
      ) : (
        <Skeleton active />
      )}
    </>
  );
};

export default ChartComponent;
