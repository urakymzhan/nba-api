import React, { Component } from 'react';
import '../styles/navbar.scss';
import styled from 'styled-components';

function Navbar() {
    return ( 
      <MainDiv>
        <div className="logo">fiXinity</div>
        <UL>
            <li className="about">About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Support</li>
        </UL>
        <button className="signup">SIGN UP</button>
      </MainDiv> 
    )
}

export default Navbar;

const MainDiv = styled.div`
text-align: center;
background-color: #F17526;
color: #F8F9F9;
`

const UL = styled.ul`
    list-style: none;
    text-align: center;
    margin-top: 0;
    padding-top: 1.4rem;
    display: inline-block;
    height: 2rem;

    li {
        display: inline-block;
        margin-right: 4rem;
        cursor: pointer;
    }
    li:hover {
        border-bottom:2px solid #F8F9F9;
        transition: 0.2s linear;
    }
`
