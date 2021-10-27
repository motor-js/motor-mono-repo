import React from "react";
import { Row } from "../components";
import Layout from "../layouts";
import Content from "../layouts/content";

import RowOne from "../containers/dashboard-one/row-one";

import SEO from "../components/seo";

const DashboardOne = () => {
  return (
    <Layout>
      <SEO />
      <Content>
        <Row gutters={10}>
          <RowOne />
        </Row>
      </Content>
    </Layout>
  );
};

export default DashboardOne;
