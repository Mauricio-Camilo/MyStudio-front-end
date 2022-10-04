import React from 'react';
import Cards from 'react-credit-cards';
import styled from 'styled-components';
import 'react-credit-cards/es/styles-compiled.css';

export default class PaymentForm extends React.Component {

    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: ``,
        number: ``
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <Container id="PaymentForm">
                <Cards
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focused={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                />
                <form>
                    <Div>
                        <input
                            type="tel"
                            name="number"
                            placeholder="Card Number"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        <input
                            type="text"
                            name="expiry"
                            placeholder="Date"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        <input
                            type="number"
                            name="cvc"
                            placeholder="CVC"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </Div>
                </form>
            </Container >
        );
    }
}

const Container = styled.div`
    width: 40%;
    display: flex; 
    padding-left: 15px;
    margin-top: 20px;
    /* justify-content: left;  */

`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 15px;
`