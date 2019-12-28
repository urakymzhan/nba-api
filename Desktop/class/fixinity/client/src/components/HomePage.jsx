import React from 'react';
import { Link } from "react-router-dom";
import "../styles/homepage.scss";
import styled, { createGlobalStyle } from 'styled-components';

function HomePage() {
    return ( 
        <MainDiv>
            <GlobalStyle whiteColor />
            <h1>This is the HomePage of Fixinity </h1>
            <p style = {{marginBottom: "2rem"}}>Click below to login</p>
            <Link to="/login" id="login-redirect">Login</Link>
        </MainDiv>
    
    )
}
export default HomePage;

// STYLING

// this sets my current page body styling
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.whiteColor ? '#EB984E' : inherit)};
    margin: 0;
    padding: 0;
  }
`
const MainDiv = styled.div`
    text-align: center;
    margin-top: 4rem;
`