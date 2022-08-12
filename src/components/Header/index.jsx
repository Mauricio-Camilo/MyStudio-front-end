import { useNavigate } from "react-router-dom";
import { Container, Hiperlink, Icon } from "./style";
import { GrLogout } from "react-icons/gr";
import { MdCreate } from "react-icons/md";


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
            {/* <Hiperlink id="creation" onClick={() => navigate("/insert")}>Página criação</Hiperlink>        */}
            <Icon id="creation" onClick={() => navigate("/insert")}><MdCreate/></Icon>
            <Hiperlink id="main" onClick={() => navigate("/main")}>Símbolo</Hiperlink>
            <Icon id="logout" onClick={() => logout()}><GrLogout/></Icon>
        </Container>
    )
}

export default Header;