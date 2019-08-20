import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import Signup from './Signup'


function App() {
  return (
    <BrowserRouter>
        <Route exact path='/' render = {()=> <Signup/>}></Route>
    </BrowserRouter>
  );
}

export default App;
