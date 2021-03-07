import React, { useState } from "react";
import { Skeleton, Card, PageHeader, Select, Radio } from "antd";
import useData from "dev-resources/hooks/useData";

// import Widget from "dev-resources/components/Widget";
import AreaChart from "components/engine/AreaChart";
import LineChart from "components/engine/LineChart";
import BarChart from "components/engine/BarChart";
import PieChart from "components/engine/PieChart";
import Widget from "dev-resources/components/Widget";

const ChartComponent = ({ dataProps }) => {
  // const [hasData, setHasData] = useState(false);
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
    qLayout,
    qData,
    // measureInfo,
    dataSet,
    title,
    subTitle,
    // mData,

    // metrics,
    // endSelections,
    // beginSelections,
    // changePage,
    // selections,
    // select,
    handlerChange,
    // applyPatches,
  } = useData({
    cols,
    qTitle,
    qSubTitle,
    qMetrics,
    qLists,
    //qColumnOrder: columnOrder,
    //qCalcCondition: calcCondition,
    // qPage,
    //qInterColumnSortOrder: columnSortOrder,
    // qSupressMissing: true,
    // qSuppressZero: true,
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
        // <Card className="gx-card" title={title}>
        <Widget styleName="gx-card-full">
          {/* <h2 className="h4 gx-mb-3">Balance History</h2> */}
          {(title || subTitle) && (
            <PageHeader
              className="site-page-header"
              // onBack={() => null}
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
