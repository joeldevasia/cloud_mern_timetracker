import React, {Component} from "react";
import {Link} from "react-router-dom";
import '../../index.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";


class Login extends Component {
    constructor(props){
      super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        email:"",
        password:"",
        errors:{}
      };
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
      }
    if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
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
    componentDidMount() {     
      if (this.props.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
      }
    }
    onSubmit(e){
      e.preventDefault();
      const userData = {
        email:this.state.email,
        password:this.state.password
      }
      this.props.loginUser(userData);      
    }
    render(){      
      const {errors}=this.state;
        return(                           
          <div className="col-12">
              <br/>
              <br/>                    
              <center>
                  <form noValidate onSubmit={this.onSubmit} className="container-center form col-4">                  
                      <label className="form-label" htmlFor = "loginID">LogIn ID</label>
                      <span className="red-text">{errors.email}{errors.emailnotfound}</span>
                      <input onChange={this.onChangeEmail} value={this.state.email} id="loginID" error={errors.email} name="loginName" type="text" placeholder="Enter You Login ID" className={classnames("", {invalid: errors.email || errors.emailnotfound})}/>                                        
                      <label  className="form-label" htmlFor = "loginPass">Password</label> 
                      <span className="red-text">{errors.password}{errors.passwordincorrect}</span>               
                      <input onChange={this.onChangePassword} value={this.state.password} error={errors.password} id="loginPass" name="loginPass" type="password" placeholder="Enter Your Password" className={classnames("", {invalid: errors.password || errors.passwordincorrect})}/>                                                      
                      <label className="form-label">New User? Please<Link to="/Register">Register</Link></label>                      
                      <input type="Submit" name="submit"/>
                  </form>
              </center>
          </div>  
        
        );
    }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);