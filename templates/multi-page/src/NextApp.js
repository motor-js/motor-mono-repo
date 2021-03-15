import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/vendors/style";
import "./styles/wieldy.less";

import App from "containers/App";

const NextApp = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default NextApp;
