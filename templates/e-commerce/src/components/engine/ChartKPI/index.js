import React, { useEffect, useState } from "react";
import { Skeleton } from "antd";
import useData from "../../../dev-resources/hooks/useData";

import Widget from "dev-resources/components/Widget";
import AreaChart from "components/engine/AreaChart";

const ChartKPI = ({ dataProps }) => {
  const [hasData, setHasData] = useState(false);
  const { data, icon, chartConfig } = dataProps;

  const { cols, qTitle, qMetrics } = data;
  const { chartType } = chartConfig;

  let Chart = null;

  switch (chartType) {
    case "area":
      Chart = AreaChart;
      break;
    case "Mangoes":
    case "Papayas":
      console.log("Mangoes and papayas are $2.79 a pound.");
      // expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    default:
      Chart = AreaChart;
  }

  const {
    qLayout,
    qData,
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
        <Widget styleName="gx-card-full">
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
              <i
                className={`icon icon-${icon} gx-fs-xl gx-ml-auto gx-text-primary gx-fs-xxxl`}
              />
            </div>
            <p className="gx-mb-0 gx-fs-sm gx-text-grey">{title}</p>
          </div>
          {/* {React.cloneElement(children, { data: mData })} */}
          <Chart data={mData} config={chartConfig} />
        </Widget>
      ) : (
        <Skeleton active />
      )}
    </>
  );
};

export default ChartKPI;
