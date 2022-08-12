import styled from "styled-components";

const Container = styled.div`
    min-width: var(--width-mobile);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: blue;
    margin-top: var(--height-header);
    padding-bottom: 25px;
`

const Title = styled.h1`
    /* font-family: 'Saira Stencil One', cursive;  */
    font-size: var(--main-title-size);
    text-align: center;
    color: black;
    margin-top: var(--title-margin-top);
    margin-bottom: var(--title-margin-bottom);
`

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--inputs-gap);
`

const Input = styled.input`
    width: var(--inputs-width);
    height: var(--inputs-height);
    border-radius: var(--inputs-radius);
    padding-left: var(--inputs-padding-left);
`

const PaymentSection = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`

const Payment = styled.div`
    width: var(--payment-width);
    height: var(--payment-heigth);
    display: flex;
    justify-content: center;
    align-items: center; 
    gap: var(--payment-gap);
    background-color: var(--payment-background);
    border: ${(props) => props.selected? "3px solid red" : "none"};
    border-radius: var(--payment-radius);
    cursor: pointer;
`
const Button = styled.button`
    width: var(--inputs-width);
    height: var(--button-height);
    font-size: var(--button-font-size);
    font-weight: var(--button-font-weight);
    border-radius: var(--inputs-radius);
    color: var(--button-text-color);
    background-color: #FF6C00;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    pointer-events: ${(props) => props.selected? "none" : "auto"};
    cursor: pointer;
`

export {
    Container,
    Title,
    Input,
    Inputs,
    PaymentSection,
    Payment,
    Button
}