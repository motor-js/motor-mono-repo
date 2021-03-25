import React from "react";
import Widget from "components/Widget/index";
import { Button, Skeleton } from "antd";
import { useData } from "@motor-js/engine";

const RewardCard = ({ dataProps }) => {
  const { data } = dataProps;

  const { cols, qTitle, qSubTitle, qMetrics, qLists } = data;

  const { dataSet, metrics, title, subTitle, handlerChange } = useData({
    cols,
    qTitle,
    qSubTitle,
    qMetrics,
    qLists,
  });

  console.log(metrics);

  return (
    <>
      {metrics ? (
        <Widget styleName="gx-bg-dark-primary">
          <div className="gx-flex-row gx-justify-content-center gx-mb-3 gx-mb-md-4">
            <i className={`icon icon-alert gx-fs-xlxl gx-text-white`} />
          </div>
          <div className="gx-text-center">
            <h2 className="h3 gx-mb-3 gx-text-white">Best Selling Product</h2>
            <p className="gx-text-white gx-mb-3">
              {/* Reffer us to your friends and earn bonus when they join. */}
              Our best selling product is {metrics.bestSelling} and is supplied
              by {metrics.companyName} at a a price of {metrics.price}
            </p>
            <Button
              size="large"
              className="gx-btn-secondary gx-mt-md-5 gx-mb-1"
            >
              Invite Friends
            </Button>
          </div>
        </Widget>
      ) : (
        <Skeleton active />
      )}
    </>
  );
};

export default RewardCard;
