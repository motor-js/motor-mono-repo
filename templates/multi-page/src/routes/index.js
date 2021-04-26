import React from "react";
import { Route, Switch } from "react-router-dom";

import asyncComponent from "util/asyncComponent";

// import "assets/vendors/style";
// import "styles/wieldy.less";

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route
        path={`${match.url}home`}
        component={asyncComponent(() => import("./Home"))}
      />
      <Route
        path={`${match.url}components`}
        component={asyncComponent(() => import("./Components"))}
      />
    </Switch>
  </div>
);

export default App;
