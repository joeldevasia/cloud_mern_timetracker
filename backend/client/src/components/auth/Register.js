import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePassword2 = this.onChangePassword2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state ={
            name:"",
            email:"",
            password:"",
            password2:"",
            errors:{}
        };
    }

    onChangeName(e){
        this.setState({
            name:e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            email:e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password:e.target.value
        })
    }

    onChangePassword2(e){
        this.setState({
            password2:e.target.value
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

      componentDidMount() {        
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }

    onSubmit(e){
        console.log("Submitted:");
        console.log("Name       :", this.state.name);
        console.log("Email      :", this.state.email);
        console.log("Password   :", this.state.password);
        console.log("Password2   :", this.state.password2);
        e.preventDefault();
    
        const newUser = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password2:this.state.password2
        };
        this.props.registerUser(newUser, this.props.history); 

        this.setState({
            name:'',
            email:'',
            password:'',
            password2:''
        })        
    };

    render(){

        const {errors}=this.state;
        return(                 
                <div className="col-12">
                    <br/>
                    <br/>                    
                    <center>
                        <form noValidate onSubmit={this.onSubmit} className="container-center form col-4">                            
                            <label htmlFor= "registerName" className="form-label" >Name</label> 
                            <input onChange={this.onChangeName} value={this.state.name} error={errors.name} id="registerName" name="registerName" type="text" placeholder="Enter You Name" className={classnames("",{invalid: errors.name})}/>
                            <span className="red-text">{errors.name}</span>
                            <label htmlFor = "registerEmail" className="form-label" >Email ID</label> 
                            <input onChange={this.onChangeEmail} value={this.state.email} error={errors.email} id="registerEmail" name="registerEmail" type="text" placeholder="Enter You Email" className={classnames("",{invalid: errors.email})}/>
                            <span className="red-text">{errors.email}</span>                                                                            
                            <label htmlFor = "registerPass" className="form-label" >Password</label> 
                            <input onChange={this.onChangePassword} value={this.state.password} error={errors.password} id="registerPass" name="registerPass" type="password" placeholder="Enter Your Password you like"className={classnames("",{invalid: errors.password})}/>
                            <span className="red-text">{errors.password}</span>                            
                            <label htmlFor = "registerPass2" className="form-label" >Confirm Password</label> 
                            <input onChange={this.onChangePassword2} value={this.state.password2} error={errors.password2} id="registerPass2" name="registerPass2" type="password" placeholder="Confirm Password"className={classnames("",{invalid: errors.password2})}/>
                            <span className="red-text">{errors.password2}</span>
                            <label className="form-label">Already Register? Please<Link to="/Register">Login</Link></label>                            
                            <input type="Submit" name="submit"/>
                        </form>
                    </center>                                           
                </div>          
        );
    }
}
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Register));
  