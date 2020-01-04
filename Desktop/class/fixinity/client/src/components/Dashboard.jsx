import React from 'react';
import { Link } from "react-router-dom";
import "../styles/dashboard.scss";
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Map from './Map.jsx'
function Dashboard() {
    return ( 
       <>
         <GlobalStyle whiteColor />
         <div className="sidebar">    
          <h4 style={{margin: " 2rem 0 2rem 4rem"}}>
            <FontAwesomeIcon id="avatar"icon={faUserCircle} style={{marginRight: "4px"}}/> 
              Ulan's Dashboard
          </h4>
          <ul>
            <li><Link to="/customers" id="main-page-link">Customers</Link></li>
            <li><a href="#"></a>Chat</li>
            <li></li>
          </ul>
         </div>
         <div className="content">
            <nav className="nav">
                <ul>
                  <li><FontAwesomeIcon id="notification"icon={faBell}/></li>
                  <li>|</li>
                  <li>Ulan Rakymzhanov <FontAwesomeIcon id="font-dropdown"icon={faSortDown}/></li>
                </ul>
            </nav>
            <div className="charts">
              <div style={{borderBottom: "4px solid orange"}}>
                <h2> COMPANY VALUE</h2><br />
                <p>$<span style={{fontSize: "26px"}}>4,45M</span></p>
              </div>
              <div style={{borderBottom: "4px solid green"}}>
                <h2 style={{color: "green"}}> NEW EMPLOYEES</h2><br />
                <p>+<span style={{fontSize: "26px"}}>28</span> hires </p>
              </div>
              <div style={{borderBottom: "4px solid red"}}>
                <h2 style={{color: "red"}}> TOAL EXPENSES</h2><br />
                <p>v<span style={{fontSize: "26px"}}>61</span>% </p>
              </div>
              <div style={{borderBottom: "4px solid blue"}}>
                <h2 style={{color: "blue"}}> NEW ACCOUNTS</h2><br />
                <p>^<span style={{fontSize: "26px"}}>310</span>% </p>
              </div>
            </div>
        </div>        
      </> 
  )
}

export default Dashboard;

// STYLING

// this sets my current page body styling
const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${props => (props.whiteColor ? 'var(--bgColorTwo)' : inherit)};
    margin: 0;
    padding: 0;
    color: var(--dashboardColor);
  }
`