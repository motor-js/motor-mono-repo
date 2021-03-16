import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useTable } from "@motor-js/engine";
import Widget from "components/Widget";

const MotorTable = ({ tableConfig }) => {
  const [loading, setLoading] = useState(true);
  const { qTitle, cols } = tableConfig;

  // const cols = [
  //   {
  //     qField: "currency",
  //     qLabel: "currency",
  //   },
  //   {
  //     qField: "rate",
  //     qLabel: "rate",
  //   },
  //   {
  //     qField: "date",
  //     qLabel: "date",
  //   },
  //   {
  //     qField: "fee",
  //     qLabel: "fee",
  //   },
  // ];

  const { title, mData, headerGroup } = useTable({
    cols,
    qTitle,
  });

  useEffect(() => {
    mData && setLoading(false);
  }, [mData]);

  return (
    <Widget
      styleName="gx-order-history"
      title={<h2 className="h4 gx-text-capitalize gx-mb-0">Table Component</h2>}
      extra={<p className="gx-text-primary gx-mb-0 gx-pointer">Export Data</p>}
    >
      <div className="gx-table-responsive">
        {loading ? (
          <div>loading</div>
        ) : (
          <Table
            className="gx-table-no-bordered"
            columns={headerGroup}
            dataSource={mData}
            pagination={false}
            bordered={false}
            size="small"
          />
        )}
      </div>
    </Widget>
  );
};

export default MotorTable;
