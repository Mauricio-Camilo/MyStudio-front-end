import styled from "styled-components";

const Container = styled.div`
    min-width: var(--width-mobile);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: var(--height-header-mobile);
    padding-bottom: 25px;

    @media (max-width: 450px) {
        margin-top: var(--height-header-mobile);
        margin-bottom: var(--height-header-mobile);
    }

    @media (min-width: 450px) {
        margin-top: var(--height-header-desktop);
        margin-bottom: var(--height-header-desktop);
        margin-left: var(--sidebar-width);
    }
`
const Title = styled.h1`
    font-size: var(--main-title-size);
    text-align: center;
    color: var(--title-font-color);
    margin-top: var(--title-margin-top);
    margin-bottom: var(--title-margin-bottom);
    width: var(--subcontainer-width);
`

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--inputs-gap);
`
const Input = styled.input`
    font-size: var(--inputs-font-size);
    width: var(--inputs-width);
    height: var(--inputs-height);
    border-radius: var(--inputs-radius);
    padding-left: var(--inputs-padding-left);
    &::placeholder {
        font-size: 15px;
        color: gray;
    }
`
const SelectSection = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--select-gap);
    width: var(--subcontainer-width);
`
const Select = styled.div`
    width: var(--select-width);
    height: var(--select-heigth);
    color: var(--select-color);
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: ${(props) => props.selected ? "#9dc4e8" : "#3515ed"};
    border: ${(props) => props.selected? "3px solid #4fea17" : "none"};
    border-radius: var(--select-radius);
    cursor: pointer;

        p {
            font-size: 20px;
            font-weight: 500;
        }
`
const Button = styled.button`
    width: var(--inputs-width);
    height: var(--button-height);
    font-size: var(--button-font-size);
    font-weight: var(--button-font-weight);
    border-radius: var(--inputs-radius);
    color: var(--button-text-color);
    background-color: var(--button-color);
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
    SelectSection,
    Select,
    Button
}