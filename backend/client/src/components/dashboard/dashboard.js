import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Link} from "react-router-dom";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <ul className="navbar-ul">          
            <li className="navbar-li"><Link to="/" onClick={this.onLogoutClick}>Logout</Link></li>
            <li className="navbar-li"><Link to="/allProjects">All Projects</Link> </li>             
            <li className="navbar-li"><Link to="/addProjects">Add Projects</Link></li>
            <li className="navbar-li"><Link to="/dashboard">Dashboard</Link> </li>        
        </ul>
        <div className="row">
          <div className="col s12 center-align">
            <center>
              <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}  
              <br/>
              <br/>
              <br/>
              <br/>
              <b>To proceed choose a task from the navbar</b> 
              </h4>
            </center>          
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);