import React, { Component } from 'react';
import styled, {createGlobalStyle } from 'styled-components';
import { Link } from "react-router-dom";


class CustomersPopup extends Component {
    constructor(props){
        super(props)
        this.state = {
            customer: {}           
        }
    }
    addCustomer = (e) => {
        let newInput = {[e.target.name]: e.target.value};  
        this.helper(newInput);  
    }
    helper = (newInput) => {
        let result = Object.assign(this.state.customer, newInput);
        this.setState({
            customer: result
        })
    }

    render() {

        return (
            <PopupWrapper>
                <h3 id="popup-h3"> New Customer</h3>
                <form id="add-customer-form" >
                    <input id="new-name" type="text" placeholder="Name" onChange={this.addCustomer} name="Name"/>
                    <input id="new-phone" type="text" placeholder="Phone" onChange={this.addCustomer} name="Phone"/>
                    <input id="new-zip" type="number" placeholder="Zip Code" onChange={this.addCustomer} name="Zip"/>
                    <input id="new-vin" type="text" placeholder="VIN" onChange={this.addCustomer} name="VIN"/>
                    <input id="new-status" type="text" placeholder="Status" onChange={this.addCustomer} name="Status"/>
                    <input id="new-action" type="text" placeholder="Action" onChange={this.addCustomer} name="Action"/>
                </form>
                <div style={{marginTop: "40px"}}>
                    <button id="popup-add-customer-btn" onClick = {() => this.props.handler(this.props.close, this.state.customer)} >Add</button>
                    <button id="popup-cancel-customer-btn"onClick = {() => this.props.close()} >Cancel</button>
                </div>
            </PopupWrapper>

        )
    }
}

export default CustomersPopup;


// STYLING 
const PopupWrapper = styled.div`
  widht: 400px;
  height: 400px;
`;