import React from 'react';
import "./index.css"
import Home from "./pages/home";
import People from "./pages/people"
import Navbar from './components/navbar';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>
            <Route exact path = "/people">
              <People />
            </Route>
          </Switch>
        </div>
        <div className="h-10"></div>
      </div>
    </Router>
    
  );
}

export default App;
