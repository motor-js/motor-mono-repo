import React from "react";
import useData from "../../../dev-resources/hooks/useData";

import Widget from "dev-resources/components/Widget";

const ChartCard = ({ children, styleName, icon }) => {
  const cols = [
    {
      qField: "[name]",
      qLabel: "name",
      // qCondBackgroundFormat: "sum([price])",
    },
    {
      qField: "=Sum({$<coin={'bitcoin'}>} price)",
      qLabel: "price",
    },
  ];

  const qMetrics = [
    {
      qName: "prize",
      qExpr: "num(Sum(price),'$#,##0')",
      qType: "qStringExpression",
    },
    {
      qName: "desc",
      qExpr: "num(Count(distinct coin)/100,'#,##0%')",
      qType: "qStringExpression",
    },
  ];

  const qTitle = "='There are ' & count(distinct coin) & ' coins'";

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

  return (
    <Widget styleName="gx-card-full">
      {metrics && (
        <div className="gx-actchart gx-px-3 gx-pt-3">
          <div className="ant-row-flex">
            <h2 className="gx-mb-0 gx-fs-xxl gx-font-weight-medium">
              {metrics.prize}
              <span
                className={`gx-mb-0 gx-ml-2 gx-pt-xl-2 gx-fs-lg gx-chart-${styleName}`}
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
      )}
      {React.cloneElement(children, { data: mData })}
    </Widget>
  );
};

export default ChartCard;