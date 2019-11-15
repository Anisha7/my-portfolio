import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Home from './components/Home';
// import OurStory from './components/OurStory';

class App extends Component {

  render() {
    return (
          <div className="app">
            <Router>
              <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  {/* <Route path="/ourstory">
                    <OurStory />
                  </Route> */}
                </Switch>
            </Router>
          </div>
    )
  }
}

export default App;
