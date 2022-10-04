import { useNavigate } from "react-router-dom";
import { Container, SubContainer, IconContainer, Icon, Logo } from "./style";
import { GrLogout } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
import { IoHourglassOutline } from "react-icons/io5";
import { ImHome } from "react-icons/im";
import logo from "./../../assets/logo_semnome.svg";

function SideBar() {

    const navigate = useNavigate();

    function logout() {
        const checkLogout = window.confirm("Deseja mesmo sair?")
        if (checkLogout) {
            localStorage.removeItem("token");
            navigate("/");
        }
    }

    return (
        <Container>
            <SubContainer>
                <IconContainer>
                    <Icon id="main" onClick={() => navigate("/main")}><ImHome /></Icon>
                    <h5>Início</h5>
                </IconContainer>
                <IconContainer>
                    <Icon id="historic" onClick={() => navigate("/historic")}><IoHourglassOutline /></Icon>
                    <h5>Histórico</h5>
                </IconContainer>
                <IconContainer>
                    <Icon id="creation" onClick={() => navigate("/insert")}><GrAddCircle /></Icon>
                    <h5>Adicionar</h5>
                </IconContainer>
                <IconContainer>
                    <Icon id="logout" onClick={() => logout()}><GrLogout /></Icon>
                    <h5>Logout</h5>
                </IconContainer>
            </SubContainer>
        </Container>
    )
}

export default SideBar;