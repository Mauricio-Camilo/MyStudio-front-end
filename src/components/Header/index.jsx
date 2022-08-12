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
            <Hiperlink id="creation" onClick={() => navigate("/insert")}>Página criação</Hiperlink>           
            <Hiperlink id="main" onClick={() => navigate("/main")}>Página principal</Hiperlink>
            <Hiperlink id="logout" onClick={() => logout()}>Logout</Hiperlink>
        </Container>
    )
}

export default Header;