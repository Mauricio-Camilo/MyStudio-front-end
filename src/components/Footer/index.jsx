import { useNavigate } from "react-router-dom";
import { Container, Icon, Logo } from "./style";
import { IoHourglassOutline } from "react-icons/io5";
import { ImHome } from "react-icons/im";
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
            <Icon id="main" onClick={() => navigate("/main")}><ImHome/></Icon>
            <Icon id="historic" onClick={() => navigate("/historic")}><IoHourglassOutline/></Icon>
        </Container>
    )
}

export default Footer;