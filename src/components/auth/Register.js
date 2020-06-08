import React, {Component} from "react";
import {Link} from "react-router-dom";


class Register extends Component {
    
    
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            name:"",
            email:"",
            password:"",
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

    onSubmit(e){
        console.log("Submitted:");
        console.log("Name       :", this.state.name);
        console.log("Email      :", this.state.email);
        console.log("Password   :", this.state.password);
        e.preventDefault();
    
        const newUser = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        };
        /*For Axios*/

        this.setState({
            name:'',
            email:'',
            password:''
        })

        /*For Trial Pupose */
        console.log(newUser);

    };
    render(){

        const {errors}=this.state;
        return(        
                <div className="container">
                    <form noValidate onSubmit={this.onSubmit} className="container-center form">
                        <label htmlFor= "registerName" className="form-label" >Name</label> 
                        <input onChange={this.onChangeName} value={this.state.name} error={errors.name} id="registerName" name="registerName" type="text" placeholder="Enter You Name"/>
                        <label htmlFor = "registerEmail" className="form-label" >Email ID</label> 
                        <input onChange={this.onChangeEmail} value={this.state.email} error={errors.email} id="registerEmail" name="registerEmail" type="text" placeholder="Enter You Email"/>
                        <label htmlFor = "registerPass" className="form-label" >Password</label> 
                        <input onChange={this.onChangePassword} value={this.state.password} error={errors.password} id="registerPass" name="registerPass" type="password" placeholder="Enter Your Password you like"/>                        

                        <label className="form-label">Already Register? Pleas<Link to="/Register">Login</Link></label>
                        
                        <input type="Submit" name="submit"/>
                    </form>
                </div>          
        );
    }
}

export default Register;