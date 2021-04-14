import React, { useEffect, useState } from "react";
import { Table, Skeleton, Card, PageHeader, Select, Radio } from "antd";
import useTable from "../../../dev-resources/hooks/useTable";
import Widget from "components/Widget";
import { useJsonToCsv } from "react-json-csv";
import { flattenData } from "util/dataHelpers";

const TableComponent = ({ tableConfig }) => {
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState(null);

  const {
    qTitle,
    cols,
    useFormatting,
    sortCriteria,
    qPage = {},
    pagination = false,
    scroll = null,
    exportFilename,
    exportFields,
  } = tableConfig;

  const { saveAsCsv } = useJsonToCsv();

  console.log('cols: ',cols)
  const { title, dataSet, headerGroup } = useTable({
    cols,
    sortCriteria: {},
    useFormatting,
    qPage,
    qTitle,
    qSuppressMissing: true
  });

  useEffect(() => {
    console.log('ds',dataSet)
    const data = dataSet && flattenData(dataSet);
    dataSet && setLoading(false);
    console.log('d',data)
    setTableData(data);
  }, [dataSet]);

  const exportData = () => {
    //File name of the export
    const filename = exportFilename;
    //Data to be exported
    const data = tableData;
    // List fields here for extract
    const fields = exportFields;
    saveAsCsv({ data, fields, filename });
  };
  
  console.log('hg: ',headerGroup)
  return (
    <>
      {tableData ? (
        <Widget
          styleName="gx-order-history"
          style={{ width: "100%", height: "100px" }}
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
                scroll={scroll}
                className="gx-table-no-bordered"
                columns={headerGroup}
                dataSource={tableData}
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
