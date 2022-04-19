import React, { useEffect, useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import logo from './logo.svg';
import Home from './pages/Home';
import Node from './pages/Node';

import './App.css';

function App() {
  const [message, setMessage] = useState(null);
  const [text, setText] = useState(null);

  useEffect(() => {
    fetch('/home')
      .then(res => res.json())
      .then(data => setMessage(data.home))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setText(data.text))
      .catch(err => console.log(err));
  }, []);

  return <BrowserRouter>
    <Switch>
      
      <Route path='/' exact>
        <Home onHome={message}/>
      </Route>

      <Route path='/node' exact>
        <Node onNode={text}/>
      </Route>

    </Switch>
  </BrowserRouter>;
}

export default App;
