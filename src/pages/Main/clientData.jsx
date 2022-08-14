import { useNavigate } from "react-router-dom";
import { SubContainer, ClientContainer, IconUpdate, IconWhatsApp, IconDelete } from "./style";
import { deleteClientById } from "./../../services/api";
import { RiWhatsappFill } from "react-icons/ri";
import { MdCreate } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

function ClientData(props) {

    const { id, name, startDate, service, finishDate, payment, notification, daysLeft } = props;

    const navigate = useNavigate();

    function handleClient() {
        return (
            <ClientContainer>
                 {notification === true? 
                <h2>
                    <strong>Nome: </strong>{name} <strong>CHECK</strong>
                </h2> : 
                <h2><strong>Nome: </strong>{name}</h2>}
                <h2><strong>Serviço: </strong>{service}</h2>
                <h2><strong>Plano: </strong>{payment}</h2>
                <h2><strong>Início: </strong>{startDate}</h2>
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


    function sendWhatsAppMessage (name, daysLeft) {
        if (daysLeft <= 0) {
            const sendMessage = window.confirm(`Deseja avisar pelo whatsapp que finalizou o 
            plano do aluno ${name}?`);
            if (sendMessage) {
                const whastAppMessage = `Finalizou o plano do aluno ${name} há ${daysLeft*-1} dias`
                window.open(`https://wa.me/5511972665730?text=${encodeURIComponent(whastAppMessage)}`);
            }
        }
        else {
            const sendMessage = window.confirm(`Deseja avisar pelo whatsapp que está para acabar o 
            plano do aluno ${name}?`);
            if (sendMessage) {
                const whastAppMessage = `O plano do aluno ${name} vai acabar em ${daysLeft} dias`
                window.open(`https://wa.me/5511972665730?text=${encodeURIComponent(whastAppMessage)}`);
            }
        }
    }

    function handleButtons() {
        return (
            <>
                <IconWhatsApp id="notification"selected={notification} 
                onClick={() => sendWhatsAppMessage(name, daysLeft) }><RiWhatsappFill/></IconWhatsApp>
                <IconDelete onClick={() => deleteClient(id)}><AiFillDelete/></IconDelete>
                <IconUpdate onClick={() => navigate(`/update/${id}`)}><MdCreate/></IconUpdate>
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