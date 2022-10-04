import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { Container, SubContainer, Logo, Icon, SearchBar, Services, SearchIcon } from "./style";
import logo from "./../../assets/logo_semnome.svg";
import { GrLogout } from "react-icons/gr";
import { IoHourglassOutline } from "react-icons/io5";
import { ImHome } from "react-icons/im";
import { BiChevronUpCircle } from "react-icons/bi";

function Footer() {

     const navigate = useNavigate();

     const [visible, setVisible] = useState(false);

     const services = ["Todos","Pilates","Fisioterapia","Barras","Osteopatia"]

     const {filter, setFilter} = useContext(UserContext);

     function logout() {
        const checkLogout = window.confirm("Deseja mesmo sair?")
        if (checkLogout) {
            localStorage.removeItem("token");
            navigate("/");
        }
    }

     function activateSelectedService (service) {
        setVisible(false);
        setFilter(service);
     }

    return (
        <Container>
            <SubContainer>
            <Logo src={logo}></Logo>
            <SearchBar>
                <h3>{filter}</h3>
                <SearchIcon id="search" onClick={() => setVisible(!visible)}><BiChevronUpCircle/></SearchIcon>
                <Services visible={visible}>
                    {services.map(service => {
                        return (
                            <p key={service} onClick={() => activateSelectedService(service)}>{service}</p>
                        )
                    })}
                </Services>
            </SearchBar>
            <Icon id="logout" onClick={() => logout()}><GrLogout /></Icon>
            </SubContainer>
        </Container>
    )
}

export default Footer;