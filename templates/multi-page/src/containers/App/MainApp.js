import React, { useContext } from "react";
import { Layout } from "antd";
import Sidebar from "../Sidebar/index";
import HorizontalNav from "../TopBar/HorizontalNav";
import { LayoutContext } from "store";

import Topbar from "../TopBar";
import { footer } from "settings";
import App from "routes/index";

const { Content, Footer } = Layout;

const MainApp = (props) => {
  const { match } = props;

  // console.log(props);

  const [layoutState, layoutDispatch] = useContext(LayoutContext);

  const { layout } = layoutState;

  const getNavStyles = (layout) => {
    switch (layout) {
      case "topbar_nav":
        return <HorizontalNav />;
      case "sidebar_nav":
        return <Topbar />;
      default:
        return <Topbar />;
    }
  };

  const getSidebar = () => {};

  return (
    <Layout className="gx-app-layout">
      <Sidebar />
      <Layout>
        {getNavStyles(layout)}
        <Content className={`gx-layout-content gx-container-wrap`}>
          <App match={match} />
          <Footer style={{ position: "sticky", bottom: "0" }}>
            <div className="gx-layout-footer-content">{footer.footerText}</div>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainApp;
