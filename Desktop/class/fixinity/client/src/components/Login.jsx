import React, { Component } from 'react';
import '../styles/login.scss';
import {
    Link
  } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';

class Login extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            email: "",
            password: "",
            loggedIn: false,
            errors: {}
        }
    }
    validation = () => {
        let email = this.state.email;
        let password = this.state.password;
        let errors = {};
        let formIsValid = true;

        // email
        if(!email){
          formIsValid = false;
          errors["email"] = "Email cannot be empty";
        }   
        if(!email.includes("@")){
          formIsValid = false;
          errors["email"]  = "Email is not valid";
        }  
        //password
        if(password.length < 4 || password.length > 16) {
            formIsValid = false;
            errors["password"] = "Password must be in range of 8 and 16";
          }  
        this.setState({
            errors: errors,
            loggedIn: formIsValid
        });
        return formIsValid;
      }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.validation(); 
    }
    handleSubmit = () =>{
        e.preventDefault();
    }
    render() {
        return (
            <div id="login-wrapper">
                <GlobalStyle whiteColor />
                <h2>LOGIN TO YOUR ACCOUNT</h2>
                <form id="form" onSubmit={this.handleSubmit} >
                    <label htmlFor="email" className="email-label">     
                        <input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email*" 
                            onChange={this.handleChange}     
                            required
                        />
                        {/* <span style={{fontSize: "8px"}}>{this.state.errors["email"]}</span> */}
                    </label>
                    
                    <label htmlFor="password" className="password-label">
                        <input
                            name="password"
                            id="password"
                            type="password"
                            placeholder="Password*" 
                            onChange={this.handleChange}
                            required
                        /> 
                        {/* <span style={{fontSize: "8px"}}>{this.state.errors["password"]}</span> */}
                    </label>
                    <label htmlFor="checkbox" className="checkbox-label">
                        <input 
                            id="checkbox"
                            type="checkbox"
                        /> 
                        Remember Me
                    </label>
                    <label id="forgot-pwd"><a href="#"> Forgot Password? </a></label>
                    {
                    this.state.loggedIn ? <Link to="/dashboard"><button id="submit">LOGIN</button></Link>: <Link to="/login"><button id="submit">LOGIN</button></Link>
                    }
                </form>
                <div className="create-account-wrapper">
                    <p style={{marginBottom: "0.2rem"}}>Don't have an Account?</p>
                    <a id="create-account" href="#">Create and Account</a>
                </div>
            </div>
        )
    }  
}

export default Login;


// STYLING
// this sets my current page body styling
const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--bgColor);
    font-family: var(--fontFamily); 
  }
  `