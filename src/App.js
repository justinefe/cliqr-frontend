import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./views/NotFound";
import Dashboard from "./views/Dashboard";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route component={NotFound} />
          {/*
          <Route exact path="/sales" component={ContactSale} />
  <Route exact path="/" component={HomepageOne} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
