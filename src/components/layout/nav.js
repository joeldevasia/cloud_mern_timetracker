import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from '../../logo.svg';
import '../../index.css';


class Nav extends Component {
    render(){
        return(
        <ul className="navbar-ul">          
            <div className="navbar-logo">
                <img src={logo} alt="logo" width="50" height="50" />
            </div>          
            <li className="navbar-li">
                <Link to="/Login">Login</Link>
            </li>
            <li className="navbar-li">
                <Link to="/Register">Register</Link>
            </li>      
        </ul>
        );
    }
}

export default Nav;