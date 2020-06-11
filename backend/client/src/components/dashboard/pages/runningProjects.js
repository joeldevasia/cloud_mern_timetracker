import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../../index.css';


export default class runningProjects extends Component {

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

    componentDidMount(){
        axios.get('/api/project/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                project_name:response.data.project_name,
                project_email:response.data.project_email,
                project_startTime:response.data.project_startTime,
                project_endTime:response.data.project_endTime
                
            })
        })
        .catch(function(error){
            console.log(error);
        })
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

        const obj={
            project_name            : this.state.project_name,
            project_email           : this.state.project_email,
            project_startTime       : this.state.project_startTime,
            project_endTime         : this.state.project_endTime
        };
        console.log(obj);
        axios.put('/api/project/update/'+this.props.match.params.id,obj)
            .then(res=>console.log(res.data));
        
        this.props.history.push('/allProjects');
    }
    
   

    render(){
        return(
    
        <div style={{ height: "75vh" }} className="container valign-wrapper">
            <ul className="navbar-ul">          
                
                <li className="navbar-li"><Link to="/allProjects">All Projects</Link> </li>                 
                <li className="navbar-li" ><Link to="/addProjects">Add Projects</Link></li>
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
                                <input type="text" className="col-6" value={this.state.project_name} onChange={this.onChangeProjectName} disabled/>                        
                            </div>
                            <div>                        
                                <label>Confirm Email:</label>
                                <input type="text" className="col-6" value={this.state.project_email} onChange={this.onChangeProjectEmail} disabled/>                        
                            </div>
                            <div>
                                <label>Start Time</label>
                                <input type="text" className="form-control" value={this.state.project_startTime} onChange={this.onChangeProjectStartTime} disabled/>                        
                            </div>
                            <div>
                                <label>Expected End Time</label>
                                <input type="datetime-local" className="form-control" value={this.state.project_endTime} onChange={this.onChangeProjectEndTime}/>                        
                            </div>      
                            <div className="form-group">
                                <input type="submit" value="Update Projects" className="btn btn-primary" />
                            </div>
                        </form>
                    </center>
                </div>
            </div>
        </div>                    
        );
    }
};
