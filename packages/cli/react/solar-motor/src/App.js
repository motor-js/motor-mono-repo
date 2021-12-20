import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preloader from "./components/preloader";

const DashboardOne = lazy(() => import("./pages/dashboard-one"));
const DashboardTwo = lazy(() => import("./pages/dashboard-two"));
const DashboardThree = lazy(() => import("./pages/dashboard-three"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Preloader size={"lg"} />}>
        <Switch>
          <Route exact path="/" component={DashboardOne} />
          <Route exact path="/dashboard-two" component={DashboardTwo} />
          <Route exact path="/dashboard-three" component={DashboardThree} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
