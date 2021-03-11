import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// pages
import Home from 'pages/Home';
import User from 'pages/User';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:username" component={User} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
