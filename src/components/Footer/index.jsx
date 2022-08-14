import { useNavigate } from "react-router-dom";
import { Container, Icon, SearchBar, Services, SearchIcon } from "./style";
import { IoHourglassOutline } from "react-icons/io5";
import { ImHome } from "react-icons/im";
import { BiChevronUpCircle } from "react-icons/bi";

import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";

function Footer() {

     const navigate = useNavigate();

     const [visible, setVisible] = useState(false);

     const services = ["Todos","Pilates","Fisioterapia","Barras","Osteopatia"]

     const {setFilter} = useContext(UserContext);

    return (
        <Container>
            <Icon id="main" onClick={() => navigate("/main")}><ImHome/></Icon>
            <SearchBar>
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
        </Container>
    )
}

export default Footer;