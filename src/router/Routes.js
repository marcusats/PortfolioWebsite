import React from "react";

import MainHome from "../views/all-home-version/MainHome";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={MainHome} />
          <Route component={NotFound} />
        </Switch>

      </Router>
    </>
  );
};

export default Routes;
