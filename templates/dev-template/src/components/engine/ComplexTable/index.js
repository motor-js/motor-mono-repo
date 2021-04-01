import React, { useEffect, useState } from "react";
import { Table, Skeleton } from "antd";
import useTable from "../../../dev-resources/hooks/useTable";
import Widget from "components/Widget";
import { useJsonToCsv } from "react-json-csv";

const ComplexTable = ({ tableConfig }) => {
  const [loading, setLoading] = useState(true);
  const {
    qTitle,
    imageRender,
    pagination = false,
    cols,
    qPage = {},
    qInterColumnSortOrder,
  } = tableConfig;
  const { saveAsCsv } = useJsonToCsv();
  const { title, mData, headerGroup } = useTable({
    cols,
    qPage,
    qTitle,
    imageRender,
    qInterColumnSortOrder,
  });

  useEffect(() => {
    mData && setLoading(false);
  }, [mData]);

  const exportData = () => {
    const filename = "data";
    const data = mData;
    const fields = {
      image: "image",
      Country: "Country",
    };
    saveAsCsv({ data, fields, filename });
  };

  return (
    <>
      {mData ? (
        <Widget
          styleName="gx-order-history"
          title={
            <h2 className="h4 gx-text-capitalize gx-mb-0">{title || qTitle}</h2>
          }
          extra={
            <p
              className="gx-text-primary gx-mb-0 gx-pointer"
              onClick={exportData}
            >
              Export Data
            </p>
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
                // pagination={{defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}}
                pagination={pagination}
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

export default ComplexTable;
