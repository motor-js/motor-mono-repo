import React from "react";
import { Skeleton } from "antd";
import { useData } from "@motor-js/engine";
import Widget from "components/Widget";

import AreaChart from "components/engine/AreaChart";
import LineChart from "components/engine/LineChart";
import BarChart from "components/engine/BarChart";
import PieChart from "components/engine/PieChart";

const ChartKPI = ({ dataProps }) => {
  // const [hasData, setHasData] = useState(false);
  const { data, icon, chartConfig } = dataProps;

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

  const { dataSet, title, metrics, select } = useData({
    cols,
    qTitle,
    qMetrics,
  });

  chartConfig.showXAxis = chartConfig.showXAxis || false;
  chartConfig.ShowYAxis = chartConfig.ShowYAxis || false;
  chartConfig.showGrid = chartConfig.showGrid || false;
  chartConfig.showLegend = chartConfig.showLegend || false;

  return (
    <>
      {metrics ? (
        <Widget styleName="gx-card-full ant-card-bordered">
          <div className="gx-actchart gx-px-3 gx-pt-3">
            <div className="ant-row-flex">
              <h2 className="gx-mb-0 gx-fs-xxl gx-font-weight-medium">
                {metrics.prize}
                <span
                  className={`gx-mb-0 gx-ml-2 gx-pt-xl-2 gx-fs-lg gx-chart-${metrics.styleName}`}
                >
                  {metrics.desc} <i className="icon icon-menu-up gx-fs-sm" />
                </span>
              </h2>
            </div>
            <p className="gx-mb-0 gx-fs-sm gx-text-grey">{title}</p>
          </div>
          {/* {React.cloneElement(children, { data: mData })} */}
          <Chart dataSet={dataSet} config={chartConfig} select={select} />
        </Widget>
      ) : (
        <Skeleton active />
      )}
    </>
  );
};

export default ChartKPI;
