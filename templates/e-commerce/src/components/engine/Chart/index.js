import React, { useEffect, useState } from "react";
import { Skeleton, Card } from "antd";
import useData from "../../../dev-resources/hooks/useData";

import Widget from "dev-resources/components/Widget";
import AreaChart from "components/engine/AreaChart";
import LineChart from "components/engine/LineChart";

const ChartComponent = ({ dataProps }) => {
  const [hasData, setHasData] = useState(false);
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
    default:
      Chart = AreaChart;
  }

  const {
    // qLayout,
    // qData,
    title,
    mData,
    metrics,
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

  useEffect(() => {
    if (!mData) return;

    setHasData(true);
  }, [mData]);

  return (
    <>
      {hasData ? (
        <Card className="gx-card" title={title}>
          <Chart data={mData} config={chartConfig} />
        </Card>
      ) : (
        <Skeleton active />
      )}
    </>
  );
};

export default ChartComponent;
