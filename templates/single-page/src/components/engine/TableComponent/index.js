import React, { useEffect, useState } from "react";
import { Table, Skeleton, Card, PageHeader, Select, Radio } from "antd";
import { useTable } from "@motor-js/engine";
import Widget from "components/Widget";
import { useJsonToCsv } from "react-json-csv";

const TableComponent = ({ tableConfig }) => {
  const [loading, setLoading] = useState(true);
  const {
    qTitle,
    imageRender,
    cols,
    useFormatting,
    qPage = {},
    pagination = false,
    qInterColumnSortOrder,
  } = tableConfig;
  const { saveAsCsv } = useJsonToCsv();
  const { title, mData, headerGroup } = useTable({
    cols,
    useFormatting,
    qPage,
    qInterColumnSortOrder,
    qTitle,
    imageRender,
  });

  useEffect(() => {
    mData && setLoading(false);
  }, [mData]);

  const exportData = () => {
    //File name of the export
    const filename = "Data";
    //Data to be exported
    const data = mData;
    // List fields here for extract
    const fields = {
      Name: "Name",
      Country: "Country",
      Category: "Category",
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

export default TableComponent;
