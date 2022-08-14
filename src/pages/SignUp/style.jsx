import styled from "styled-components";

const Container = styled.div`
    min-width: var(--width-mobile);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: var(--container-margin-top);
    /* background: linear-gradient(red,blue); */
    background: var(--container-background);
`
const Logo = styled.img`
     max-width: 300px; 
`
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--inputs-gap);
`
const Input = styled.input`
    font-size: var(--inputs-font-size);
    width: var(--inputs-width);
    height: var(--inputs-height);
    border-radius: var(--inputs-radius);
    padding-left: var(--inputs-padding-left);
    &::placeholder {
    font-size: 20px;
    color: gray;
  }
`
const Button = styled.button`
    width: var(--inputs-width);
    height: var(--button-height);
    font-size: var(--button-font-size);
    font-weight: var(--button-font-weight);
    color: var(--button-text-color);
    border-radius: var(--inputs-radius);
    background-color: var(--button-color);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const Hiperlink = styled.p`
    /* width: 225px; */
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    color: black;
    margin: 25px auto;
    cursor: pointer;
`
export {
    Container,
    Logo,
    Inputs,
    Input,
    Button,
    Hiperlink
}