import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteClientById } from "../../services/api";

function ClientData(props) {

    const { id, name, startDate, finishDate, payment, notification, daysLeft } = props;

    console.log(daysLeft);

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

    function deleteClient(id) {
        console.log(`Vou deletar o aluno de id ${id}`);
        const checkDelete = window.confirm("Deseja deletar o cadastro desse aluno?");
        if (checkDelete) {
            alert("O aluno será apagado");
            deleteClientById(id);
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

const SubContainer = styled.div`
    width: 350px;
    border: 3px solid blue;
    display: flex;
    gap: 10px;
    padding: 10px 0;
    position: relative;
    background-color: ${(props) => props.selected ? "red" : "none"};

        div {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        h2 {
            font-size: 20px;
        }
`

const Notificate = styled.button`
    display: ${(props) => props.selected? "block" : "none"};
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