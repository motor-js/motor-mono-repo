import React from "react";
import { Row } from "../components";
import Layout from "../layouts";
import Content from "../layouts/content";
import WelcomeArea from "../containers/dashboard-one/welcome-area";
import RowOne from "../containers/dashboard-one/row-one";

const DashboardOne = () => {
  return (
    <Layout>
      <Content>
        <WelcomeArea />
        <Row gutters={10}>
          <RowOne />
        </Row>
      </Content>
    </Layout>
  );
};

export default DashboardOne;
