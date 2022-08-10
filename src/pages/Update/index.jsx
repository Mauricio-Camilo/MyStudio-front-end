import { useState } from "react";
import Header from "../../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { updateClientById } from "../../services/api";

import { ThreeDots } from 'react-loader-spinner';

import { Container, Title, Inputs, Input, PaymentSection, Payment, Button, } from "./../Insert/style"

function UpdateClientPage() {
    
    const {clientId} = useParams();

    const loading = <ThreeDots color="#FFFFFF" />;

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [selected, setSelected] = useState (false);
    const [signUp, setSignUp] = useState("Atualizar");
    const [selectedPayment, setSelectedPayment] = useState(new Map());

    const navigate = useNavigate();

    function activatePayment (option) {
        const alreadySelected = selectedPayment.has(option);
        if (alreadySelected) {
            selectedPayment.delete(option);
            setSelectedPayment(new Map(selectedPayment))
        }
        else {
            selectedPayment.clear();
            setSelectedPayment(new Map(selectedPayment.set(option)))
        }
    }

    async function updateClient () {
        setSelected(true);
        setSignUp(loading);
        try {
            const client = {
                name,
                payment: [...selectedPayment.keys()][0],
                startDate: date
            };
            await updateClientById(client, clientId);
            navigate("/main");          
        } 
        
        catch (error) {
            setSelected(false);
            setSignUp("Cadastrar");

            alert("Ocorreu um erro ao finalizar o cadastro do aluno")
        }
    }

    const payments = [
        { option: "Mensal", icon: "card-outline", id: "1" },
        { option: "Trimestral", icon: "barcode-outline", id: "2" },
        { option: "Semestral", icon: "cash-outline", id: "3" },
        { option: "Anual", icon: "cash-outline", id: "4" },
    ]

    return (
        <>
            <Header />
            <Container>
                <Title>Atualize os dados do aluno</Title>
                
                <Inputs>
                    <Input type="text" placeholder="Nome"
                        onChange={(e) => setName(e.target.value)} value={name}>
                    </Input>
                    <Input type="text" placeholder="Data de início Ex:01/01/2023"
                        onChange={(e) => setDate(e.target.value)} value={date}>
                    </Input>
                </Inputs>
                <Title>Escolha o plano</Title>
                <PaymentSection>
                    {payments.map(payment => {
                        const { option, id } = payment;
                        const checkSelectedPayment = selectedPayment.has(option)
                        return (
                            <Payment key={id} selected={checkSelectedPayment} onClick={() => activatePayment(option)}>
                                <p>{option}</p>
                            </Payment>
                        )
                    })}
                </PaymentSection>
                <Button selected={selected} onClick={() => updateClient()}>{signUp}</Button>
            </Container>
        </>
    )
}

export default UpdateClientPage;