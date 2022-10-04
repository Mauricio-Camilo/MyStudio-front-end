import { useNavigate } from "react-router-dom";
import { Container, SubContainer, IconContainer, Logo, Icon, SearchBar, Services, SearchIcon } from "./style";
import { GrLogout } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
import { IoHourglassOutline } from "react-icons/io5";
import { ImHome } from "react-icons/im";
import { BiChevronUpCircle } from "react-icons/bi";
import logo from "./../../assets/logo_semnome.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";

function Footer() {

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

export default Footer;