import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import { addNewProject, logoutUser} from "../../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import '../../../index.css';

class addProjects extends Component{
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    constructor(props)
    {
        super(props);                    
        
        this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onChangeProjectEmail = this.onChangeProjectEmail.bind(this);
        this.onChangeProjectStartTime = this.onChangeProjectStartTime.bind(this);
        this.onChangeProjectEndTime = this.onChangeProjectEndTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state={
            project_name: '',
            project_email:'',
            project_startTime:'',
            project_endTime:''            
        }
    }

    onChangeProjectName(e){
        this.setState({
            project_name:e.target.value
        });
    }
    
    onChangeProjectEmail(e){
        this.setState({
            project_email:e.target.value
        });
    }

    onChangeProjectStartTime(e){
        this.setState({
            project_startTime:e.target.value
        });
    }

    onChangeProjectEndTime(e){
        this.setState({
            project_endTime:e.target.value
        });
    }
    
    

    onSubmit(e){
        e.preventDefault();
        console.log("Form Submitted:");
        console.log("Project Name           :", this.state.project_name);
        console.log("Project Email           :", this.state.project_email);
        console.log("Project Start Time     :", this.state.project_startTime);
        console.log("Project End Time       :", this.state.project_endTime);

        const newProject={
            project_name            : this.state.project_name,
            project_email           : this.state.project_email,
            project_startTime       : this.state.project_startTime,
            project_endTime         : this.state.project_endTime
        };


        console.log(newProject)
        this.props.addNewProject(newProject, this.props.history);         
        
        this.setState({
            project_name:'',
            project_startTime:'',
            project_endTime:'',
        })
    }
    render(){   
        return(
        <div style={{ height: "75vh" }} className="container valign-wrapper">
            <ul className="navbar-ul">          
            <li className="navbar-li"><Link to="/" onClick={this.onLogoutClick}>Logout</Link></li>
            <li className="navbar-li"><Link to="/allProjects">All Projects</Link> </li>             
            <li className="navbar-li active" ><Link to="/addProjects">Add Projects</Link></li>
            <li className="navbar-li"><Link to="/dashboard">Dashboard</Link> </li>        
        </ul>
        <br/>
        <br/>
        <div className="row">
            <div>
                <center>
                <form onSubmit={this.onSubmit} className="container-center form col-4">
                    <div>                        
                        <label>Project Name:</label>
                        <input type="text" className="col-6" value={this.state.project_name} onChange={this.onChangeProjectName}/>                        
                    </div>   
                    <div>                        
                        <label>Confirm Email:</label>
                        <input type="text" className="col-6" value={this.state.project_email} onChange={this.onChangeProjectEmail}/>                        
                    </div>
                    <div>
                        <label>Start Time</label>
                        <input type="datetime-local" className="form-control" value={this.state.project_startTime} onChange={this.onChangeProjectStartTime}/>                        
                    </div>
                    <div>
                        <label>Expected End Time</label>
                        <input type="datetime-local" className="form-control" value={this.state.project_endTime} onChange={this.onChangeProjectEndTime}/>                        
                    </div>    
                    <div>
                        <input type="submit" value="Crate Todo" className="btn btn-primary" />
                    </div>
                </form>
                </center>
            </div>
        </div>
        </div>
        );
    }    
}
addProjects.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
addProjects.propTypes = {
    addNewProject: PropTypes.func.isRequired,    
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { addNewProject,logoutUser }
  )(withRouter(addProjects));

  