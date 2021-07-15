import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preloader from "./components/preloader";

const DashboardOne = lazy(() => import("./pages/dashboard-one"));
const DashboardFour = lazy(() => import("./pages/dashboard-four"));


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Preloader />}>
        <Switch>
          <Route exact path="/" component={DashboardOne} />
          <Route exact path="/helpdesk" component={DashboardFour} />

        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
