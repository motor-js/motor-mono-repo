import React, { useEffect, useCallback } from "react";
import { Table, Icon, Menu } from "semantic-ui-react";
import {
  useTable,
  useApp,
  useLayout,
  useVariable,
  useGlobal,
} from "@motor-js/engine";

const TableExampleCompact = () => {
  const cols = [
    {
      qField: "[Company Name]",
      dataKey: "company",
      qLabel: "Company Name",
    },
    {
      qField: "=sum(Quantity)",
      dataKey: "quantity",
      qLabel: "Quantity Sold",
    },
    {
      qField: "=sum(Quantity * Price)",
      dataKey: "revenue",
      qLabel: "Revenue",
      qNumType: "M",
      qNumFmt: "£#,##0",
    },
  ];

  const {
    dataSet,
    headerGroup,
    select,
    incrementPage,
    decrementPage,
  } = useTable({
    cols,
    qPage: { qTop: 0, qLeft: 0, qWidth: 5, qHeight: 10 },
  });

  // const config = {
  //   //Enter your app config here..
  //   host: "juno-ui.eu.qlikcloud.com",
  //   secure: true,
  //   port: null,
  //   prefix: "",
  //   appId: "0294cf88-eb02-484a-b315-cf06b45ac347",
  //   webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i",
  //   qcs: true,
  // };

  // const { engineVersion, global, globalError } = useGlobal(config);
  // const { app, appProperties, qTitle, qLastReloadTime, evaluate } = useApp();
  // console.log(qTitle);
  // const { getVariablebyID } = useVariable();
  // const { qLayout, value } = useVariable({ qId: "VB99" });
  // const { qLayout, value, error } = useVariable({ qName: "name" });
  // const {
  //   qLayout,
  //   value,
  //   variableList,
  //   error,
  //   qProperties,
  //   setProperties,
  // } = useVariable({
  //   qId: "v460",
  //   // qName: "testmenoyyyyy",
  //   // qDefinition: "=Len(Country)",
  // });

  // setProperties({ qDefinition: "=MaxString(Country)" });
  // const { createdDate } = useLayout();
  // const { doReload } = useApp();
  // // console.log(engineVersion, global);
  // console.log("createdDate", engineVersion, globalError);
  // console.log(app && evaluate("Count(Country)"));
  // console.log(getVariablebyID && getVariablebyID("VB02"));

  // const abc = getVariablebyID("VB02");
  // console.log(abc);

  // const def = getVariablebyID("VB2");
  // console.log(def);

  // const generateQProp = useCallback(() => {
  //   if (!qLayout) return;
  //   const qProp = getValue();

  //   return qProp;
  // }, []);

  // useEffect(() => {
  //   if (!qLayout) return;
  //   // if (qObject.current) return;
  //   // getValue();
  //   const qProp = generateQProp();
  //   console.log("qLayout", qProp);
  //   // (async () => {
  //   //   const qProp = generateQProp();
  //   //   const qDoc = await engine;
  //   //   qObject.current = await qDoc.createSessionObject(qProp);
  //   //   setQLayout(await qObject.current.getLayout());
  //   // })();
  // }, [dataSet]);

  const handleSelect = (c, i) => {
    // console.log(c);
    select(c.columnId, [c.elemNumber], false);
    // console.log("qLayout", getValue());

    // doReload(1, true);
  };

  return (
    <div style={{ padding: "10px" }}>
      {/* {value} */}
      {dataSet && (
        <Table compact celled striped>
          <Table.Header>
            <Table.Row>
              {headerGroup.map((d, i) => (
                <Table.HeaderCell key={i}>{d.title}</Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {dataSet.map((d, i) => (
              <Table.Row key={i}>
                <Table.Cell onClick={() => handleSelect(d.company)}>
                  {d.company.text}
                </Table.Cell>
                <Table.Cell>{d.quantity.text}</Table.Cell>
                <Table.Cell>{d.revenue.text}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon onClick={() => decrementPage()}>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon onClick={() => incrementPage()}>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      )}
    </div>
  );
};

export default TableExampleCompact;
