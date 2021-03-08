import React, { useContext} from "react";
import HorizontalDefault from "../Topbar/HorizontalDefault/index";
import { Layout } from "antd";
import { ThemeContext } from 'store'
import { footer } from "settings/index";

import "./assets/vendors/style";
import "./styles/wieldy.less";

const {Content, Footer} = Layout;

const App = () => {

  const [state] = useContext(ThemeContext);

  const { theme } = state

  if (theme === 'dark') {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }

  return (
    <Layout className="gx-app-layout">
      {/*<Sidebar/>*/}
      <Layout>
        <HorizontalDefault/>
        <Content className={`gx-layout-content gx-container-wrap`}>
          <Footer>
            <div className="gx-layout-footer-content">
              {footer.footerText}
            </div>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
