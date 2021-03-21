import React, { useEffect, useState } from "react";
import { Table, Skeleton, Card, PageHeader, Select, Radio } from "antd";
import { useTable } from "@motor-js/engine";
import Widget from "components/Widget";
import { ConsoleSqlOutlined } from "@ant-design/icons";

const TableComponent = ({ tableConfig }) => {
  const [loading, setLoading] = useState(true);
  const { qTitle, imageRender, cols } = tableConfig;

  const { title, mData, headerGroup } = useTable({
    cols,
    qTitle,
    imageRender,
  });

  useEffect(() => {
    mData && setLoading(false);
  }, [mData]);

  return (
    <>
      {mData ? (
        <Widget
          styleName="gx-order-history"
          title={
            <h2 className="h4 gx-text-capitalize gx-mb-0">{title || qTitle}</h2>
          }
          extra={
            <p className="gx-text-primary gx-mb-0 gx-pointer">Export Data</p>
          }
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
      ) : (
        <Skeleton active />
      )}
    </>
  );
};

export default TableComponent;
