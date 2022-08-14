import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: var(--height-header);
    display: flex;
    justify-content: center;
    background-color: #4fea17;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
`

const SubContainer = styled.div`
    min-width: var(--subcontainer-width);
    max-width: var(--subcontainer-max-width);
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;     
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
     padding-top: 15px;
`
export {
    Container,
    SubContainer,
    Logo,
    Hiperlink,
    Icon
}