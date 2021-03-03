import React from "react";
import {Layout} from "antd";
import HorizontalDefault from "../Topbar/HorizontalDefault/index";
//import Sidebar from "../Sidebar/index";

//import HorizontalDark from "../Topbar/HorizontalDark/index";
//import InsideHeader from "../Topbar/InsideHeader/index";
//import AboveHeader from "../Topbar/AboveHeader/index";
//import BelowHeader from "../Topbar/BelowHeader/index";
//import Topbar from "../Topbar/index";

import { footer } from "settings/index";
import App from 'routes'

const {Content, Footer} = Layout;

const MainApp = (props) => {
  const {match} = props;
  /*
  const getNavStyles = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL :
        return <HorizontalDefault/>;
      default :
        return null;
    }
  };
*/

  return (
    <Layout className="gx-app-layout">
      {/*<Sidebar/>*/}
      <Layout>
        {/*getNavStyles(navStyle)*/}
        <HorizontalDefault/>
        <Content className={`gx-layout-content gx-container-wrap`}>
          <App match={match}/>
          <Footer>
            <div className="gx-layout-footer-content">
              {footer.footerText}
            </div>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  )
};


export default MainApp;

