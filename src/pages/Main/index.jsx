import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import Header from "../../components/Header";
import { Container, Title } from "./style";
import { getAllClients } from "../../services/api";
import ClientData from "./clientData";

function MainPage() {

    const [postClient, setPostClients] = useState(false);
    const [clients, setClients] = useState();
    const [reloadPage, setReloadPage] = useState(false);

    const { token } = useContext(UserContext);

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    }

    useEffect(() => {

        setPostClients(true);
        setReloadPage(false);

        async function getUserPostsById() {
            try {
                const clients = await getAllClients(config);
                console.log(clients.data)
                setClients(clients.data);
                setPostClients(false);
                if (clients.data.length !== 0) {
                    setReloadPage(true);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        getUserPostsById();
    }, [token]);

    function handleClients() {
        if (postClient) return <h1>Carregando alunos</h1>;
        if (reloadPage) {
            return (
                clients.map(client => {
                    const { id, name, payments, startDate, finishDate, notification, daysLeft } = client;
                    return (
                          <ClientData key={id} id={id} name={name} startDate={startDate}
                                finishDate={finishDate} payment={payments.period} 
                                notification={notification} daysLeft={daysLeft}/>
                    )
                })
            )
        } else {
            return (
                <h1>Não há alunos cadastrados ainda!!!</h1>
            )
        }
     
    }

    return (
        <>
            <Header />
            <Container>
                <Title>Alunos cadastrados</Title>
                {handleClients()}
            </Container>
        </>

    )
}

export default MainPage;