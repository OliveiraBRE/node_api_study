import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import logo from './logo.svg';
import Home from './pages/Home';
import Node from './pages/Node';

import './App.css';

function App() {
  return <BrowserRouter>
    <Switch>
      
      <Route path='/' exact>
        <Home />
      </Route>

      <Route path='/node' exact>
        <Node />
      </Route>

    </Switch>
  </BrowserRouter>;
}

export default App;
