import styled from "styled-components";
import { deleteClientById } from "../../services/api";

function ClientData(props) {
    const { id, name, startDate, finishDate, payment, notification } = props;

    function handleClient() {
        return (
            <div>
                <h2><strong>Nome:</strong>{name}</h2>
                <h2><strong>Plano contradado:</strong>{payment}</h2>
                <h2><strong>Inicio do plano:</strong>{startDate}</h2>
                <h2><strong>Término do plano:</strong>{finishDate}</h2>
            </div>
        )
    }

    function deleteClient(id) {
        console.log(`Vou deletar o aluno de id ${id}`);
        const checkDelete = window.confirm("Deseja deletar o cadastro desse aluno?");
        if (checkDelete) {
            alert("O aluno será apagado");
            deleteClientById(id);
            window.location.reload();
        }
    }

    // README: CRIAR O HANDLER PRA RENDERIZAR OS DADOS DO USUÁRIO

    return (
        <SubContainer key={id}>
            {handleClient()}
            <Notification onClick={() => console.log(`Cliquei no botão ${id}`)}>N</Notification>
            <Delete onClick={() => deleteClient(id)}>X</Delete>
            <Update>U</Update>
        </SubContainer>
    )
}

const SubContainer = styled.div`
    width: 350px;
    border: 3px solid red;
    display: flex;
    gap: 10px;
    padding: 10px 0;
    position: relative;

        div {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        h2 {
            font-size: 20px;
        }
`

const Notification = styled.button`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 10px;
    right: 10px;
`
const Delete = styled.button`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50px;
    right: 10px;
`
const Update = styled.button`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 90px;
    right: 10px;
`

export default ClientData;