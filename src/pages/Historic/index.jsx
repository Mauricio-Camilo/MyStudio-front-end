import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import Header from "../../components/Header";
import Footer from "./../../components/Footer";
import { Container, Title } from "./../Main/style";
import { getAllClients } from "../../services/api";
import ClientData from "./clientData";
import { Oval } from 'react-loader-spinner';

function HistoricPage() {

    const [postClient, setPostClients] = useState(false);
    const [clients, setClients] = useState();
    const [reloadPage, setReloadPage] = useState(false);
    const historicDaysFilter = 0;

    const { token, filter } = useContext(UserContext);

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
        if (postClient) return <Oval color="#FFFFFF" height={80} width={80} secondaryColor="#20ACDE"/>
        ;
        if (reloadPage) {
            return (
                clients.map(client => {
                    const { id, name, payments, services, startDate, finishDate, notification, daysLeft } = client;
                    if ((services.name === filter || filter === "Todos") && daysLeft > historicDaysFilter) {
                        return (
                              <ClientData key={id} id={id} name={name} startDate={startDate} service={services.name}
                                    finishDate={finishDate} payment={payments.period} 
                                    notification={notification} daysLeft={daysLeft}/>
                        ) 
                    }
                    else return <></>  
                })
            )
        } else 
            return <h1>Não há alunos cadastrados ainda!!!</h1>
    }

    return (
        <>
            <Header />
            <Container>
                <Title>Histórico</Title>
                {handleClients()}
            </Container>
            <Footer />  
        </>
    )
}

export default HistoricPage;