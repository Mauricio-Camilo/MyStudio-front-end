import styled from "styled-components";

const Container = styled.div`
    min-width: var(--width-mobile);
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: 159px; */
`
const Logo = styled.img`
     max-width: 300px; 
`
const Title = styled.h1`
    /* font-family: 'Saira Stencil One', cursive;  */
    font-size: var(--main-title-size);
    text-align: center;
    color: black;
    margin-bottom: 24px; 
`
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--inputs-gap);
`
const Input = styled.input`
    width: var(--inputs-width);
    height: var(--inputs-height);
    border-radius: var(--inputs-radius);
    padding-left: var(--inputs-padding-left);
`
const Button = styled.button`
    width: var(--inputs-width);
    height: var(--button-height);
    font-size: var(--button-font-size);
    font-weight: var(--button-font-weight);
    color: var(--button-text-color);
    border-radius: var(--inputs-radius);
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const Hiperlink = styled.p`
    width: 225px;
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    color: black;
    margin: 25px auto;
    cursor: pointer;
`
export {
    Container,
    Title,
    Logo,
    Inputs,
    Input,
    Button,
    Hiperlink
}