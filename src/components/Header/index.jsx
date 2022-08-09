import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {

     const navigate = useNavigate();

     function logout () {
         const checkLogout = window.confirm("Deseja mesmo sair?")
         if (checkLogout) {
             localStorage.removeItem("token");
             navigate("/");
         }
     }

    return (
        <Container>
            <Hiperlink onClick={() => navigate("/insert")}>Página criação</Hiperlink>           
            <Hiperlink onClick={() => navigate("/main")}>Página principal</Hiperlink>
            <Hiperlink onClick={() => logout()}>Logout</Hiperlink>

        </Container>
    )
}

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

const Title = styled.h1`
    /* font-family: 'Saira Stencil One', cursive;  */
    font-size: 25px;
    text-align: center;
    color: black;
    margin-top: 15px;
    margin-bottom: 24px;
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
export default Header;