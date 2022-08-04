import styled from "styled-components";

const Container = styled.div`
    width: 375px;
`
const Title = styled.h1`
    /* font-family: 'Saira Stencil One', cursive;  */
    font-size: 32px;
    text-align: center;
    color: black;
    margin-top: 159px;
    margin-bottom: 24px;
`
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;
    padding-left: 25px;
`
const Input = styled.input`
    width: 326px;
    height: 58px;
    border-radius: 5px;
    padding-left: 15px;
`
const Button = styled.button`
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
    width: 326px;
    height: 46px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
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
    Inputs,
    Input,
    Button,
    Hiperlink
}