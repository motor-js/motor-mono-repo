import React from "react";
import { Route, Switch } from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route
        path={`${match.url}crypto`}
        component={asyncComponent(() => import("./Crypto"))}
      />
      <Route
        path={`${match.url}crm`}
        component={asyncComponent(() => import("./CRM"))}
      />
    </Switch>
  </div>
);

export default App;
