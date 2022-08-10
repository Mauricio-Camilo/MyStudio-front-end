import { useNavigate } from "react-router-dom";
import { Container, Hiperlink } from "./style";

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

export default Header;