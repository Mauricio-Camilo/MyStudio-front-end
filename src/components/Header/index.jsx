import { useNavigate } from "react-router-dom";
import { Container, SubContainer, Icon, Logo } from "./style";
import { GrLogout } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
import logo from "./../../assets/logo_semnome.svg";

function Header() {

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
                <Logo src={logo}></Logo>
                <Icon id="logout" onClick={() => logout()}><GrLogout /></Icon>
            </SubContainer>
        </Container>
    )
}

export default Header;