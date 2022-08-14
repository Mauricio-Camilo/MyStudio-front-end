import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { postClient } from "../../services/api";

import { Container, Title, Inputs, Input, SelectSection, Select, Button, } from "./style"

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
    const [selectedService, setSelectedService] = useState(new Map());

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

    function activateService(option) {
        const alreadySelected = selectedService.has(option);
        if (alreadySelected) {
            selectedService.delete(option);
            setSelectedService(new Map(selectedService))
        }
        else {
            selectedService.clear();
            setSelectedService(new Map(selectedService.set(option)))
        }
    }

    async function createClient() {
        if ([...selectedPayment.keys()][0] === undefined || [...selectedService.keys()][0] === undefined) {
            alert("Selecione todas as opções de prosseguir com o cadastro");
        }

        else {
            setSelected(true);
            setSignUp(loading);
            try {
                const client = {
                    name,
                    payment: [...selectedPayment.keys()][0],
                    service: [...selectedService.keys()][0],
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
                <Input id="name" type="text" placeholder="Nome"
                    onChange={(e) => setName(e.target.value)} value={name}>
                </Input>
                <Input id="startdate" type="text" placeholder="Data de início Ex:01/01/2023"
                    onChange={(e) => setDate(e.target.value)} value={date}>
                </Input>
            </Inputs>
        )
    }

    function handlePayments() {
        const payments = [
            { option: "Mensal", id: "1" },
            { option: "Trimestral", id: "2" },
            { option: "Semestral", id: "3" },
            { option: "Anual", id: "4" },
        ];
        return (
            payments.map(payment => {
                const { option, id } = payment;
                const checkSelectedPayment = selectedPayment.has(option)
                return (
                    <Select key={id} selected={checkSelectedPayment} onClick={() => activatePayment(option)}>
                        <p>{option}</p>
                    </Select>
                )
            })
        )
    }

    function handleServices() {
        const services = [
            { option: "Pilates", id: "1" },
            { option: "Fisioterapia", id: "2" },
            { option: "Barras", id: "3" },
            { option: "Osteopatia", id: "4" },
        ];
        return (
            services.map(service => {
                const { option, id } = service;
                const checkSelectedService = selectedService.has(option)
                return (
                    <Select key={id} selected={checkSelectedService} onClick={() => activateService(option)}>
                        <p>{option}</p>
                    </Select>
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
                <SelectSection>
                    {handlePayments()}
                </SelectSection>
                <Title>Escolha o serviço</Title>
                <SelectSection>
                    {handleServices()}
                </SelectSection>
                <Button selected={selected} onClick={() => createClient()}>{signUp}</Button>
            </Container>
        </>
    )
}

export default InsertClientPage;