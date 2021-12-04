import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/privateRoute";
import Dashboard from "./components/dashboard/dashboard";
import { Provider } from "react-redux";
import store from "./store";
import Nav from "./components/layout/nav";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import addProjects from "./components/dashboard/pages/addProjects";
import allProjects from "./components/dashboard/pages/allProjects";
import runningProjects from "./components/dashboard/pages/runningProjects";


if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}else{
  window.location.href = "./login";
}

class App extends Component{
  render()  {
    return(
      <Provider store={store}>
        <Router>
          <div className="App">
            <Nav/>
            
            <Route exact path="/Register" component={Register}/>
            <Route exact path="/Login" component={Login}/>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/addProjects" component={addProjects} />
              <PrivateRoute exact path="/allProjects" component={allProjects} />
              <PrivateRoute exact path="/runningProjects/:id" component={runningProjects} />
              
            </Switch>              
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
