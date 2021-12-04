import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../../index.css';

const Project = props => (
    <tr>
        <td>{props.projects.project_name}</td>
        <td>{props.projects.project_email}</td>
        <td>{props.projects.project_startTime}</td>
        <td>{props.projects.project_endTime}</td>
        <td><Link to={'/runningProjects/'   +props.projects._id}>Edit</Link></td>
    
        </tr>
)

export default class allProjects extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    constructor(props){
        super(props)
        this.state={
            projects:[]
        };
    }

    componentDidMount(){
        axios.get("/api/project/all-project")
        .then(response => {
            this.setState({projects:response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }

    project(){
        return this.state.projects.map(function(project,i){
            return <Project projects={project} key={i}/>;
        })
    }
   
    render(){
        return(
    
        <div style={{ height: "75vh" }} className="container valign-wrapper">
            <ul className="navbar-ul">                          
                <li className="navbar-li"><Link to="/" onClick={this.onLogoutClick}>Logout</Link></li>
                <li className="navbar-li active"><Link to="/allProjects">All Projects</Link> </li>                 
                <li className="navbar-li" ><Link to="/addProjects">Add Projects</Link></li>
                <li className="navbar-li"><Link to="/dashboard">Dashboard</Link> </li>                 
            </ul>
            <br/>
            <br/>
            <div className="row">
                <div>
                    <center>
                        <table>
                            <thead>
                                <tr>
                                    <th>Project Name</th>
                                    <th>Project Owner</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.project()}
                                
                            </tbody>
                        </table>
                    </center>
                </div>
            </div>
        </div>                    
        );
    }    
};
