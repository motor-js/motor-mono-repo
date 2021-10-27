import React from "react";
import { Row } from "../components";
import Content from "../layouts/content";
import RowOne from "../containers/dashboard-one/row-one";

const DashboardOne = () => {
  return (
    <Content>
      <Row gutters={10}>
        <RowOne />
      </Row>
    </Content>
  );
};

export default DashboardOne;
