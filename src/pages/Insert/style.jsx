import styled from "styled-components";

const Container = styled.div`
width: var(--width-mobile);
display: flex;
flex-direction: column;
align-items: center;
background-color: blue;
margin-top: var(--height-header);
padding-bottom: 25px;
`

const Title = styled.h1`
/* font-family: 'Saira Stencil One', cursive;  */
font-size: 32px;
text-align: center;
color: black;
margin-top: 15px;
margin-bottom: 24px;
`

const Inputs = styled.div`
display: flex;
flex-direction: column;
gap: 13px;
`

const Input = styled.input`
width: 250px;
height: 58px;
border-radius: 5px;
padding-left: 15px;
/* margin-left: 60px; */
`

const PaymentSection = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
`

const Payment = styled.div`
width: 150px;
height: 75px;
display: flex;
justify-content: center;
align-items: center; 
gap: 10px;
background-color: #ffa920;
border: ${(props) => props.selected? "3px solid red" : "none"};
border-radius: 5px;
cursor: pointer;

`
const Button = styled.button`
width: 350px;
height: 50px;
border-radius: 10px;
font-size: 20px;
font-family: 'Roboto', sans-serif;
font-weight: 400;
display: flex;
justify-content: center;
align-items: center;
background-color: #FF6C00;
border: solid 1px #FF6C00;
color: #fff;
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