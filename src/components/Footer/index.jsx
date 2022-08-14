import { useNavigate } from "react-router-dom";
import { Container, SubContainer, Icon, SearchBar, Services, SearchIcon } from "./style";

import { IoHourglassOutline } from "react-icons/io5";
import { ImHome } from "react-icons/im";
import { BiChevronUpCircle } from "react-icons/bi";

import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";

function Footer() {

     const navigate = useNavigate();

     const [visible, setVisible] = useState(false);

     const services = ["Todos","Pilates","Fisioterapia","Barras","Osteopatia"]

     const {filter, setFilter} = useContext(UserContext);

    return (
        <Container>
            <SubContainer>
            <Icon id="main" onClick={() => navigate("/main")}><ImHome/></Icon>
            <SearchBar>
                <h3>{filter}</h3>
                <SearchIcon id="search" onClick={() => setVisible(!visible)}><BiChevronUpCircle/></SearchIcon>
                <Services visible={visible}>
                    {services.map(service => {
                        return (
                            <p onClick={() => setFilter(service)}>{service}</p>
                        )
                    })}
                </Services>
            </SearchBar>
            <Icon id="historic" onClick={() => navigate("/historic")}><IoHourglassOutline/></Icon>
            </SubContainer>
        </Container>
    )
}

export default Footer;