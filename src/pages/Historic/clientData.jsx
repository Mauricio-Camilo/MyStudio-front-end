import { useNavigate } from "react-router-dom";
import { ClientContainer, IconUpdate, IconDelete } from "./../Main/style";
import { HistoricSubContainer } from "./style";
import { deleteClientById } from "./../../services/api";
import { MdCreate } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

function ClientData(props) {

    const { id, name, startDate, service, finishDate, payment, notification } = props;

    const navigate = useNavigate();

    function handleClient() {
        return (
            <ClientContainer>
                <h2><strong>Nome: </strong>{name}</h2>
                <h2><strong>Serviço: </strong>{service}</h2>
                <h2><strong>Plano: </strong>{payment}</h2>
                <h2><strong>Inicio: </strong>{startDate}</h2>
                <h2><strong>Término: </strong>{finishDate}</h2>
            </ClientContainer>
        )
    }

    async function deleteClient(id) {
        const checkDelete = window.confirm("Deseja deletar o cadastro desse aluno?");
        if (checkDelete) {
            await deleteClientById(id);
            window.location.reload();
        }
    }

    function handleButtons() {
        return (
            <>
                <IconDelete onClick={() => deleteClient(id)}><AiFillDelete/></IconDelete>
                <IconUpdate onClick={() => navigate(`/update/${id}`)}><MdCreate/></IconUpdate>
            </>
        )
    }

    return (
        <HistoricSubContainer selected={notification} key={id}>
            {handleClient()}
            {handleButtons()}
        </HistoricSubContainer>
    )
}

export default ClientData;