import { useNavigate } from "react-router-dom";
import { Container, Icon, Logo } from "./style";
import { GrLogout } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
import logo from "./../../assets/logo_semnome.svg";

function Footer() {

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
            <Icon id="creation" onClick={() => navigate("/insert")}><GrAddCircle/></Icon>
            <Icon id="logout" onClick={() => logout()}><GrLogout/></Icon>
        </Container>
    )
}

export default Footer;