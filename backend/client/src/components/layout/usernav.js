import React, {Component} from "react";
import {Link} from "react-router-dom";


import '../../index.css';

class Nav extends Component {
    render(){
        return(
        <ul className="navbar-ul">          
            <li className="navbar-li"><Link to="/">Add Projects</Link></li>
            <li className="navbar-li"><Link to="/">Running Projects</Link></li>      
            <li className="navbar-li"><Link to="/">All Projects</Link> </li> 
            <li className="navbar-li"><Link onClick={this.onLogoutClick}>Logout</Link></li>
        </ul>
        );
    }
}

export default Nav;