import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { postClient } from "../../services/api";

import { Container, Title, Inputs, Input, PaymentSection, Payment, Button, } from "./style"

import { ThreeDots } from 'react-loader-spinner';

function InsertClientPage() {

    const { token } = useContext(UserContext);

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    }

    const loading = <ThreeDots color="#FFFFFF" />;

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [selected, setSelected] = useState(false);
    const [signUp, setSignUp] = useState("Cadastrar");
    const [selectedPayment, setSelectedPayment] = useState(new Map());

    const navigate = useNavigate();

    function activatePayment(option) {
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

    async function createClient() {
        setSelected(true);
        setSignUp(loading);
        if ([...selectedPayment.keys()][0] === undefined) {
            alert("Selecione um plano antes de prosseguir com o cadastro");
            setSignUp("Cadastrar");
        }
        else {
            try {
                const client = {
                    name,
                    payment: [...selectedPayment.keys()][0],
                    startDate: date
                };
                await postClient(client, config);
                navigate("/main");
            }
            catch (error) {
                setSelected(false);
                setSignUp("Cadastrar");
                alert("Ocorreu um erro ao finalizar o cadastro do aluno")
            }
        }
    }

    function handleInputs() {
        return (
            <Inputs>
                <Input type="text" placeholder="Nome"
                    onChange={(e) => setName(e.target.value)} value={name}>
                </Input>
                <Input type="text" placeholder="Data de início Ex:01/01/2023"
                    onChange={(e) => setDate(e.target.value)} value={date}>
                </Input>
            </Inputs>
        )
    }

    function handlePayments() {
        const payments = [
            { option: "Mensal", icon: "card-outline", id: "1" },
            { option: "Trimestral", icon: "barcode-outline", id: "2" },
            { option: "Semestral", icon: "cash-outline", id: "3" },
            { option: "Anual", icon: "cash-outline", id: "4" },
        ];
        return (
            payments.map(payment => {
                const { option, id } = payment;
                const checkSelectedPayment = selectedPayment.has(option)
                return (
                    <Payment key={id} selected={checkSelectedPayment} onClick={() => activatePayment(option)}>
                        <p>{option}</p>
                    </Payment>
                )
            })
        )
    }

    return (
        <>
            <Header />
            <Container>
                <Title>Cadastre seu novo aluno</Title>
                {handleInputs()}
                <Title>Escolha o plano</Title>
                <PaymentSection>
                    {handlePayments()}
                </PaymentSection>
                <Button selected={selected} onClick={() => createClient()}>{signUp}</Button>
            </Container>
        </>
    )
}

export default InsertClientPage;