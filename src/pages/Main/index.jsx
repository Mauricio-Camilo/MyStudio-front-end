import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import styled from "styled-components";

function MainPage () {

const { token } = useContext(UserContext);

const config = {
    headers: {
        "Authorization": `Bearer ${token}`,
    }
}

/*
// PRECISA DE UM USEEFFECT
useEffect(() => {

    // ESTADOS QUE PODEM MUDAR AO ATIVAR A FUNÇÃO

    async function getUserPostsById() {
        try {
            // MONTAR A LÓGICA DE BUSCA DE DADOS
        }
        catch (error) {
            console.log(error);
        }
    }
}, []); */


    return (
        <>
        <Container>
            <Title>Mostrar os alunos aqui</Title>
        </Container>
    </>
    )
}

const Container = styled.div`
    width: var(--width-mobile);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: blue;
    padding-top: 10px;
    padding-bottom: 25px;
`

const Title = styled.h1`
    /* font-family: 'Saira Stencil One', cursive;  */
    font-size: 32px;
    text-align: center;
    color: black;
    margin-top: 15px;
    margin-bottom: 24px;
`
export default MainPage;