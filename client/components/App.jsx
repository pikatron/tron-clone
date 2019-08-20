import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Signup from './Signup';
import LogIn from '../containers/LogIn';
import Home from '../containers/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
