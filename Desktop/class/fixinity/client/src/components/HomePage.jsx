import React from 'react';
import { Link } from "react-router-dom";
import "../styles/homepage.scss";
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './Navbar.jsx';
import background from '../assets/carrepair.jpg'; // figure out why its not importing

function HomePage() {
    return (
      <React.Fragment>
        <GlobalStyle whiteColor />
          <Navbar/> 
          <MainDiv>    
              <h1>This is the HomePage of Fixinity </h1>
              <p style = {{marginBottom: "2rem"}}>Click below to login</p>
              <Link to="/login" id="login-redirect">Login</Link>
          </MainDiv>
        </React.Fragment>
    
    )
}
export default HomePage;

// STYLING

// this sets my current page body styling
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => (props.whiteColor ? '#F8F9F9' : inherit)};
    background-image: url(${"https://images.unsplash.com/photo-1531782431322-a2607e9dc029?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"});  
    background-repeat: no-repeat;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;  
  }
`
const MainDiv = styled.div`
    text-align: center;
    height: 100vh;
    color:#ABEBC6;
    margin-top: 8rem;
`