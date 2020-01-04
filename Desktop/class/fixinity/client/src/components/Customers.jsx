import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/customers.scss'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHome, faChevronRight, 
    faChevronLeft, faSortDown, 
    faPencilAlt, faTrash
    } 
from '@fortawesome/free-solid-svg-icons';
// for many icon import we might use Library from fontawesome instead of importing each
// import { Icon } from 'semantic-ui-react'; webpack is complaining about this. 
// its reference is located in entry point index.js
import Popup from "reactjs-popup";
import styled, {createGlobalStyle } from 'styled-components';
import CustomersPopup from './CustomerPopup.jsx';


class Customers extends Component {
    constructor(props){
        super(props)
        this.state = {
             customersData: [],
             loading: true
        }
    }
    componentDidMount(){
        axios.get('/api') 
            .then(res => {
            const customers = res.data;
            this.setState({
                customersData: customers,
                loading: false
            });
        })
        .catch(error => {
            console.log(error); 
        })
    }
    handler = (close, customer) => {
        let prevState = this.state.customersData;
        prevState.push(customer);
        if (Object.getOwnPropertyNames(customer).length > 0) {
             this.setState({
                customersData: prevState
            })
            // setTimeout(() => { close(); }, 1000);
            close(); // no idea but its calling setState 2 times.
         }
      }

    renderTableBody = () => {
        return this.state.customersData.map(function(customer, index) {
            const { Name, Phone, Zip, VIN, Status, Action } = customer;
            return(
                <tr key={index} id="table-data">
                    <td>{Name}</td>
                    <td>{Phone}</td>
                    <td>{Zip}</td>
                    <td>{VIN}</td>
                    <td><button id="status-column">{Status}</button></td>
                    <td><FontAwesomeIcon icon={faPencilAlt} id="edit-customer"/>
                        <FontAwesomeIcon icon={faTrash} id="delete-customer"/>
                    </td>
                </tr>
            )
        })
    }
    renderTableHeader = () => {
        let header = Object.keys(this.state.customersData[0])
        return header.map((key, index) => {
            return <th key={index}>{key}</th>
         })
    }
    renderLoading = () => {
        return <div style={{textAlign: "center", marginTop: "20px"}}>Loading...</div>;
      }

    render() {
        if (this.state.loading) {
            return this.renderLoading();
        }
        else {
            return ( 
                <React.Fragment>
                    <GlobalStyle whiteColor />
                        <CustomerMain>
                            <Nav>
                                <Ul>
                                    <li><Link to="/" id="nav-fixinity" >Fixinity</Link></li>
                                    <li id="nav-vert-line"> | </li>
                                    <li><Link to="/dashboard" id="nav-home-icon"><FontAwesomeIcon icon={faHome}/></Link></li>
                                    <li><FontAwesomeIcon id="nav-right-icon" icon={faChevronRight}/></li>
                                    <li>Customers</li>
                                </Ul>
                            </Nav>
                            <Popup trigger={<button id="add-customer-btn"> Add New Customer</button>} position="right top"
                                modal
                                closeOnDocumentClick
                                modal>
                                {close => (                  
                                    <CustomersPopup handler = {this.handler} close={close}/>
                                )}                
                            </Popup>
                            <Table>
                                <tbody>
                                    <tr>{this.renderTableHeader()}</tr>
                                    {this.renderTableBody()}
                                    <tr id="pagination">
                                        <td colSpan="100%">
                                            <span className="pag-1">Rows per page:</span>
                                            <span className="pag-2">10</span> 
                                            <span className="pag-dropdown"><FontAwesomeIcon id="font-dropdown"icon={faSortDown}/></span>
                                            <span className="pag-3">1</span> -
                                            <span className="pag-4">10</span>
                                            <span className="pag-of">of</span> 
                                            <span className="pag-5">68</span> 
                                            <span className="pag-6"><FontAwesomeIcon icon={faChevronLeft}/></span>
                                            <span className="pag-7"><FontAwesomeIcon icon={faChevronRight}/></span>
                                        </td>
                                    </tr>
                                </tbody> 
                                
                            </Table>
                        </CustomerMain>
                </React.Fragment>
            )  
        }

    }

}
export default Customers;


//  ---- STYLING -----
// this sets my current page body styling
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.whiteColor ? '#F2F4F4' : 'black')};
    margin: 0;
    padding: 0;
  }
`
const Nav = styled.nav`
    margin-bottom: 1rem;
`
const CustomerMain = styled.div`
    padding: 2rem 3rem;
`
const Ul = styled.ul`
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;

    li {
        display: inline-block;
        margin-right: 0.4rem;
    }
    li a {
        color: inherit;
    }
    li:last-child {
        margin-left: 0.6rem; 
        font-size: 14px;
        color: var(--textColor);
    }
    & #nav-vert-line {
        color: var(--textColor);
    }
    & #nav-home-icon{
        color: var(--fixBlue);
    }
    & #nav-right-icon {
        font-size: 12px;
        margin-left: 1rem;
        color: var(--textColor);
    }
`

const Table = styled.table`
    text-align: center;
    width: 100%;
    background-color: var(--fixWhite);
    border: 1px solid #ddd;
    border-radius: 12px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-spacing: 0;
    box-shadow: 5px 1px 8px var(--shadowColor);

    th {
        border-bottom: 0.02rem solid #ddd;
        padding: 12px 8px;
        color: #626567;
        text-align: center;
        font-size: 12px;
    }
    td {
        padding: 22px 4px;
        border-bottom: 0.2px solid #ddd;
        font-size: 13px;
    }
    tr:not(:first-child):hover {
        background-color: #DCDEE1;
    }
`