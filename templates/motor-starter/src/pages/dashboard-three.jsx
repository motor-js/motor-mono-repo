import React from "react";
import { Row } from "../components";
import Layout from "../layouts";
import Content from "../layouts/content";
import WelcomeArea from "../containers/dashboard-three/welcome-area";
import RowOne from "../containers/dashboard-three/row-one";

const DashboardThree = () => {
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

export default DashboardThree;
