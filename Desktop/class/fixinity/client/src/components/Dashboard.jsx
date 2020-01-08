import React from 'react';
import { Link } from "react-router-dom";
import "../styles/dashboard.scss";
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSortDown, faBell, faUserCircle,
  faChevronDown, faChevronUp, faUsers,
  faComments, faCog
} from '@fortawesome/free-solid-svg-icons';
import Map from './Map.jsx'
function Dashboard() {
    return ( 
       <>
         <GlobalStyle whiteColor />
         <div className="dashboard-sidebar">    
          <h4 id="dashboard-avatar" style={{margin: " 2rem 0 2rem 4rem", color:"var(--fixBlue)"}}>
            <FontAwesomeIcon icon={faUserCircle} style={{marginRight: "4px"}}/> 
              Ulan's Dashboard
          </h4>
          <ul>
            <li id="dashboard-customers">
            <FontAwesomeIcon icon={faUsers} style={{marginRight: "4px", color:"var(--fixBlue)"}}/>
              <Link to="/customers" id="main-page-link">Customers</Link>
            </li>
            <li id="dashboard-chat">
            <FontAwesomeIcon icon={faComments} style={{marginRight: "4px", color:"var(--fixBlue)"}}/>
              <a href="#"></a>
              Chat
            </li>
          </ul>
          <p id="dashboard-settings" style={{margin: "38rem 0 0 2.2rem"}}>
            <FontAwesomeIcon icon={faCog} style={{marginRight: "4px", color:"var(--fixBlue)"}}/>
              <a href="#"></a>
              Settings
            </p>
         </div>
         <div className="dashboard-content">
            <nav className="nav">
                <ul>
                  <li><FontAwesomeIcon id="dashboard-notification"icon={faBell}/></li>
                  <li>|</li>
                  <li>Ulan Rakymzhanov <FontAwesomeIcon id="dashboard-dropdown"icon={faSortDown}/></li>
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
                <p><FontAwesomeIcon icon={faChevronDown}/><span style={{fontSize: "26px"}}> 61</span>% </p>
              </div>
              <div style={{borderBottom: "4px solid darkgray"}}>
                <h2 style={{color: "darkgray"}}> NEW ACCOUNTS</h2><br />
                <p><FontAwesomeIcon icon={faChevronUp}/><span style={{fontSize: "26px"}}> 310</span>% </p>
              </div>
              <p style={{margin: '0 0 0 1rem', color: "var(--fixBlue"}}>ForeCast</p>
              <Map/>
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
    color: var(--textColor);
  }
`