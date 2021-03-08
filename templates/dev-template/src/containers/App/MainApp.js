import React, { useContext } from "react";
import { Layout } from "antd";
import HorizontalDefault from "../Topbar/HorizontalDefault/index";
//import Sidebar from "../Sidebar/index";

//import HorizontalDark from "../Topbar/HorizontalDark/index";
//import InsideHeader from "../Topbar/InsideHeader/index";
//import AboveHeader from "../Topbar/AboveHeader/index";
//import BelowHeader from "../Topbar/BelowHeader/index";
//import Topbar from "../Topbar/index";

import { footer } from "settings";
import App from "routes";
import { LayoutContext } from "store";
import { appSettings } from "settings";

const { Content, Footer } = Layout;

const MainApp = (props) => {
  const { match } = props;
  const [layoutState] = useContext(LayoutContext);

  const { layout } = layoutState;

  const getNavStyles = (layout) => {
    switch (layout) {
      case "SINGLE_PAGE":
        return <HorizontalDefault />;
      default:
        return null;
    }
  };

  const getSidebar = () => {};

  return (
    <Layout className="gx-app-layout">
      {/*<Sidebar/>*/}
      <Layout>
        {getNavStyles(layout)}
        <Content className={`gx-layout-content gx-container-wrap`}>
          <App match={match} />
          <Footer>
            <div className="gx-layout-footer-content">{footer.footerText}</div>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainApp;
