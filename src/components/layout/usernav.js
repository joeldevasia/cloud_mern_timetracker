import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from './logo.svg';
import './index.css';

class userNav extends Component {
    render(){
        return(
        <ul className="navbar-ul">          
            <div className="navbar-logo">
                <img src={logo} alt="logo" width="50" height="50" />
            </div>          
            <li className="navbar-li"><a href="#addProjects">
                <Link to="/">Add Projects</Link> </a></li>
            <li className="navbar-li"><a href="#runningProjects">
                <Link to="/">Running Projects</Link> </a></li>      
            <li className="navbar-li"><a href="#allProjects">
                <Link to="/">All Projects</Link> </a></li>      
        </ul>
        );
    }
}

export default userNav;