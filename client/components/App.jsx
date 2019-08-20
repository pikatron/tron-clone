import React from 'react';
import Signup from './Signup'
import { BrowserRouter as RouteWrapper, Route, Switch } from 'react-router-dom'

import LogIn from '../containers/LogIn';
import Home from '../containers/Home';


function App() {
  return (
  <RouteWrapper>
    <Switch>
      <Route exact path='/' component={LogIn} />
      <Route path ='/' render ={()=> <Signup/>}/>
      <Route path='/Home' component={Home} exact />

    </Switch>
  </RouteWrapper>
  )
}

export default App;
