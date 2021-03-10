import React, { useState } from "react";
import { Skeleton, PageHeader, Radio } from "antd";
import { useData } from "@motor-js/engine";

import AreaChart from "components/engine/AreaChart";
import LineChart from "components/engine/LineChart";
import BarChart from "components/engine/BarChart";
import PieChart from "components/engine/PieChart";
import Widget from "components/Widget";

const ChartComponent = ({ dataProps }) => {

  const { data, chartConfig } = dataProps;

  const { cols, qTitle, qSubTitle, qMetrics, qLists } = data;
  const { chartType, buttons } = chartConfig;

  const [chartValue, setChartValue] = useState(buttons ? buttons[0].value : []);

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
    dataSet,
    title,
    subTitle,
    handlerChange,
  } = useData({
    cols,
    qTitle,
    qSubTitle,
    qMetrics,
    qLists,
  });

  const onChange = (e) => {
    setChartValue(e.target.value);

    const selectedButton = buttons.filter(
      (button) => button.value === e.target.value
    );

    handlerChange(
      selectedButton[0].value.startsWith("="),
      selectedButton[0].value
    );
  };

  return (
    <>
      {dataSet ? (
        <Widget styleName="gx-card-full">
          {(title || subTitle) && (
            <PageHeader
              className="site-page-header"
              title={title}
              subTitle={subTitle}
            />
          )}
          <div className="ant-row-flex gx-px-4 gx-pt-4">
            <div className="gx-ml-auto">
              {buttons && (
                <Radio.Group
                  options={buttons}
                  onChange={onChange}
                  value={chartValue}
                  optionType="button"
                />
              )}
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
