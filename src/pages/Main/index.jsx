import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import styled from "styled-components";
import Header from "../../components/Header";
import { getAllClients } from "../../services/api";
import ClientData from "./clientData";

function MainPage() {

    const [postClient, setPostClients] = useState(false);
    const [clients, setClients] = useState();
    const [reloadPage, setReloadPage] = useState();

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
                console.log(clients)
                setClients(clients.data);
                setPostClients(false);
                setReloadPage(true);
            }
            catch (error) {
                console.log(error);
            }
        }
        getUserPostsById();
    }, [token]);

    function handleClients() {
        if (postClient) return <h1>Carregando alunos</h1>;
        return reloadPage?
         (
                clients.map(client => {
                    const { id, name, payments, startDate, finishDate, notification } = client;
                    return (
                          <ClientData key={id} id={id} name={name} startDate={startDate}
                                finishDate={finishDate} payment={payments.period}
                                notification={notification} />
                    )
                })
        ):
        <h5>Não há alunos cadastrados aqui</h5>
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

const Container = styled.div`
    width: var(--width-mobile);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: green;
    margin-top: var(--height-header);
`

const Title = styled.h1`
    /* font-family: 'Saira Stencil One', cursive;  */
    font-size: 32px;
    text-align: center;
    color: black;
    margin-top: 15px;
    margin-bottom: 24px;
`

const SubContainer = styled.div`
    width: 350px;
    background-color: red;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;

        h2 {
            font-size: 20px;
        }
`

export default MainPage;