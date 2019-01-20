import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './../Main';
import CountryContainer from './../CountryContainer';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <div>
              <ul>
                <li><Link to="/main">Main</Link></li>
                <li><Link to="/country">Country</Link></li>
              </ul>
              <Route exact path="/" component={Main}/>
              <Route path="/main" component={Main}/>
              <Route path="/country" component={CountryContainer}/>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
