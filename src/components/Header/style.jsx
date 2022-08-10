import styled from "styled-components";

const Container = styled.div`
width: var(--width-mobile);
height: var(--height-header);
display: flex;
/* flex-direction: column; */
align-items: center;
background-color: lightblue;
position: fixed;
top: 0;
left: 0;
z-index: 5;
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
    Hiperlink
}