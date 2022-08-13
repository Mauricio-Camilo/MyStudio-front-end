import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: var(--height-header);
    display: flex;
    justify-content: space-around;
    align-items: center; 
    background-color: lightblue;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
`
const Hiperlink = styled.h3`
    font-size: 15px;
    font-weight: 700;
    color: black;
    cursor: pointer;
`
const Icon = styled.p`
    font-size: var(--icon-size);
`
const Logo = styled.img`
     max-width: 100px; 
`
export {
    Container,
    Logo,
    Hiperlink,
    Icon
}