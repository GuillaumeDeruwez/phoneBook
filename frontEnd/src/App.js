import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/home.js';
import Edit from './views/edit.js';
import Create from './views/create.js';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/edit/:id">
            <Edit />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
