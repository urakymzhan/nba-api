import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/homepage.scss";
import styled, { createGlobalStyle } from 'styled-components';
import NavBar from '../Organisms/O_NavBar.jsx'
// import background from '../assets/carrepair.jpg'; // figure out why its not importing
import   A_Button from '../Atoms/A_Button.jsx' // fix later to import from index.js 
import { tryforfree, tryfreeValue, loginredirect, proceedLoginValue} from '../constants'

function HomePage() {
    return (
      <React.Fragment>
        <GlobalStyle whiteColor />
          <NavBar/> 
          <MainDiv>
                <h1 style={{margin: '0', fontSize: "50px"}}>MOVE FORWARD</h1>
                <p style={{margin: '0 0 2rem 0', fontSize: "18px"}}>Your trusted on demand car repair platform</p>
                <A_Button className={tryforfree} value={tryfreeValue}/> 
                <Link to="/login"><A_Button className={loginredirect} value={proceedLoginValue}/></Link>
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
    min-height: 100vh;
    color:var(--fixWhite);
    background-color:rgba(0, 0, 0, 0.6);
    padding-top: 10rem;
`