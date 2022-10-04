import { useNavigate } from "react-router-dom";
import { Container, SubContainer, IconContainer, Icon } from "./style";
import { GrAddCircle } from "react-icons/gr";
import { IoHourglassOutline } from "react-icons/io5";
import { ImHome } from "react-icons/im";

function SideBar() {

    const navigate = useNavigate();

    return (
        <Container>
            <SubContainer>
                <IconContainer>
                    <Icon id="main" onClick={() => navigate("/main")}><ImHome /></Icon>
                    <h5>Início</h5>
                </IconContainer>
                <IconContainer>
                    <Icon id="creation" onClick={() => navigate("/insert")}><GrAddCircle /></Icon>
                    <h5>Adicionar</h5>
                </IconContainer>
                <IconContainer>
                    <Icon id="historic" onClick={() => navigate("/historic")}><IoHourglassOutline /></Icon>
                    <h5>Histórico</h5>
                </IconContainer>  
            </SubContainer>
        </Container>
    )
}

export default SideBar;