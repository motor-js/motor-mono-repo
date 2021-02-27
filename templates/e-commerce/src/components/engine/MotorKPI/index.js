import React from "react";
import useData from "../../../dev-resources/hooks/useData";

import Widget from "dev-resources/components/Widget";

const ChartCard = ({ prize, title, children, styleName, icon }) => {
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

  const metrics = [
    {
      numberOfCoinTypes: {
        qStringExpression: {
          // This will evaluate to a formatted string.
          qExpr: "Count(distinct coin)",
        },
      },
    },
    {
      salesValue: {
        qValueExpression: {
          // Same as above but will evaluate as number.
          qExpr: "Sum(price)",
        },
      },
    },
  ];
  // const cols = [
  //   // {
  //   //   qField: "[name]",
  //   //   qLabel: "name",
  //   //   // qCondBackgroundFormat: "sum([price])",
  //   // },
  //   {
  //     qField: "=Sum({$<coin={'bitcoin'}>} price)",
  //     qLabel: "price",
  //   },
  // ];

  // qCondBackgroundFormat:'if(sum([Sales Margin Amount])<0, red())',
  //         qCondTextFormat: 'if(sum([Sales Margin Amount])<0, white())',

  const chartTitle = "='There are ' & count(distinct coin) & ' coins'";

  const {
    qLayout,
    qData,
    mData,
    title: desc,
    // endSelections,
    // beginSelections,
    // changePage,
    // selections,
    // select,
    // applyPatches,
  } = useData({
    cols,
    title: chartTitle,
    //qColumnOrder: columnOrder,
    //qCalcCondition: calcCondition,
    // qPage,
    //qInterColumnSortOrder: columnSortOrder,
    // qSupressMissing: true,
    // qSuppressZero: true,
  });

  console.log(qLayout);

  return (
    <Widget styleName="gx-card-full">
      <div className="gx-actchart gx-px-3 gx-pt-3">
        <div className="ant-row-flex">
          <h2 className="gx-mb-0 gx-fs-xxl gx-font-weight-medium">
            {prize}
            <span
              className={`gx-mb-0 gx-ml-2 gx-pt-xl-2 gx-fs-lg gx-chart-${styleName}`}
            >
              {title}% <i className="icon icon-menu-up gx-fs-sm" />
            </span>
          </h2>
          <i
            className={`icon icon-${icon} gx-fs-xl gx-ml-auto gx-text-primary gx-fs-xxxl`}
          />
        </div>
        <p className="gx-mb-0 gx-fs-sm gx-text-grey">{desc}</p>
      </div>
      {/* {children} */}
      {React.cloneElement(children, { data: mData })}
    </Widget>
  );
};

export default ChartCard;
