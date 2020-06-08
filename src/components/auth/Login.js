import React, {Component} from "react";
import {Link} from "react-router-dom";
import '../../index.css';


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

    onSubmit(e){

      console.log("Submitted:");
      console.log("Email      :", this.state.email);
      console.log("Password   :", this.state.password);
      e.preventDefault();

      const userData = {
        email:this.state.email,
        password:this.state.password
      }
      /*for axios*/
      console.log(userData);
    }


    render(){
        
      const {errors}=this.state;
        return(                           
             <div className="container">
             <form noValidate onSubmit={this.onSubmit} className="container-center form">
               <label className="form-label" htmlFor = "loginID">LogIn ID</label> 
               <input onChange={this.onChangeEmail} value={this.state.email} id="loginID" error={errors.email} name="loginName" type="text" placeholder="Enter You Login ID"/>
               <label  className="form-label" htmlFor = "loginPass">Password</label>                
               <input onChange={this.onChangePassword} value={this.state.password} error={errors.password} id="loginPass" name="loginPass" type="password" placeholder="Enter Your Password"/>
               
               <label className="form-label">New User? Please<Link to="/Register">Register</Link></label>
               
               <input type="Submit" name="submit"/>
             </form>
           </div>  
        
        );
    }
}

export default Login;