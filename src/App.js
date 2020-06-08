import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';

import Nav from "./components/layout/nav";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

class App extends Component{
  render()  {
    return(
      <Router>
        <div className="App">
          <Nav/>
          <Route exact path="/Register" component={Register}/>
          <Route exact path="/Login" component={Login}/>
            
        </div>
      </Router>
    );
  }
}

export default App;
