import styled from "styled-components";

function Header() {
    return (
        <Container>
            <Title>Cabeçalho</Title>
        </Container>
    )
}

const Container = styled.div`
    width: var(--width-mobile);
    height: var(--height-header);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: blue;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
`

const Title = styled.h1`
    /* font-family: 'Saira Stencil One', cursive;  */
    font-size: 32px;
    text-align: center;
    color: black;
    margin-top: 15px;
    margin-bottom: 24px;
`
export default Header;