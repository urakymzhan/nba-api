import React from 'react';
import { Link } from "react-router-dom";
import "../styles/dashboard.scss";
import styled, { createGlobalStyle } from 'styled-components';

function Dashboard() {
    return ( 
      <MainDiv>
        <GlobalStyle whiteColor />
        <h1>This is the Dashboard of Fixinity</h1>
        <p style = {{marginBottom: "2rem"}}>Click below to enter customers page</p>
        <Link to="/customers" id="main-page-link">Customers</Link>
      </MainDiv>  
    )
}

export default Dashboard;

// STYLING

// this sets my current page body styling
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.whiteColor ? '#D7BDE2' : inherit)};
    margin: 0;
    padding: 0;
  }
`
const MainDiv = styled.div`
    text-align: center;
    margin-top: 4rem;
`