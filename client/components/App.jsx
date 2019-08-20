import React from 'react';
import { BrowserRouter as RouteWrapper, Route, Switch } from 'react-router-dom'

import LogIn from '../containers/LogIn';
import Home from '../containers/Home';


function App() {
  return (
  <RouteWrapper>
    <Switch>
      <Route path='/' component={LogIn} exact />
      <Route path='/Home' component={Home} exact />

    </Switch>
  </RouteWrapper>
  )
}

export default App;
