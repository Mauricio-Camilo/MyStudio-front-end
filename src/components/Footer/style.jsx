import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: var(--height-header);
    display: flex;
    justify-content: space-around;
    align-items: center; 
    background-color: lightgreen;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 5;

    @media (min-width: 450px) {
        display: none;
    }
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
    Icon
}