import { useNavigate } from "react-router-dom";
import { SubContainer, Notificate, Delete, Update } from "./style";
import { deleteClientById } from "./../../services/api";

function ClientData(props) {

    const { id, name, startDate, finishDate, payment, notification, daysLeft } = props;

    const navigate = useNavigate();

    function handleClient() {
        return (
            <div>
                <h2><strong>Nome:</strong>{name}</h2>
                <h2><strong>Plano contratado:</strong>{payment}</h2>
                <h2><strong>Inicio do plano:</strong>{startDate}</h2>
                <h2><strong>Término do plano:</strong>{finishDate}</h2>
            </div>
        )
    }

    async function deleteClient(id) {
        const checkDelete = window.confirm("Deseja deletar o cadastro desse aluno?");
        if (checkDelete) {
            await deleteClientById(id);
            window.location.reload();
        }
    }


    function sendWhatsAppMessage (name, daysLeft) {
        if (daysLeft <= 0) {
            const sendMessage = window.confirm(`Deseja avisar pelo whatsapp que finalizou o 
            plano do aluno ${name}?`);
            if (sendMessage) {
                const whastAppMessage = `Finalizou o plano do aluno ${name}`
                window.open(`https://wa.me/5511972665730?text=${encodeURIComponent(whastAppMessage)}`);
            }
        }
        else {
            const sendMessage = window.confirm(`Deseja avisar pelo whatsapp que está para acabar o 
            plano do aluno ${name}?`);
            if (sendMessage) {
                const whastAppMessage = `O plano do aluno ${name} está para acabar`
                window.open(`https://wa.me/5511972665730?text=${encodeURIComponent(whastAppMessage)}`);
            }
        }
    }

    function handleButtons() {
        return (
            <>
                <Notificate selected={notification} onClick={() => sendWhatsAppMessage(name, daysLeft) }>N</Notificate>
                <Delete onClick={() => deleteClient(id)}>X</Delete>
                <Update onClick={() => navigate(`/update/${id}`)}>U</Update>
            </>
        )
    }

    return (
        <SubContainer selected={notification} key={id}>
            {handleClient()}
            {handleButtons()}
        </SubContainer>
    )
}

export default ClientData;