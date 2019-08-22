import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signup from "./Signup";
import LogIn from "../containers/LogIn";
import Home from "../containers/Home";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
