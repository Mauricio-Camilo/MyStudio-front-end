import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { updateClientById } from "../../services/api";

import { ThreeDots } from 'react-loader-spinner';

import { Container, Title, Inputs, Input, Select, SelectSection, Button, } from "./../Insert/style"

function UpdateClientPage() {

    const { clientId } = useParams();

    const loading = <ThreeDots color="#FFFFFF" />;

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [selected, setSelected] = useState(false);
    const [signUp, setSignUp] = useState("Atualizar");
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

    async function updateClient() {
        setSelected(true);
        setSignUp(loading);
        try {
            const client = {
                name,
                payment: [...selectedPayment.keys()][0] === undefined ? "" : [...selectedPayment.keys()][0],
                service: [...selectedService.keys()][0] === undefined ? "" : [...selectedService.keys()][0],
                startDate: date
            };
            await updateClientById(client, clientId);
            navigate("/main");
        }

        catch (error) {
            setSelected(false);
            setSignUp("Atualizar");
            alert("Ocorreu um erro ao atualizar o cadastro do aluno")
        }
    }

    function handleInputs() {
        return (
        <Inputs>
            <Input id="name" type="text" placeholder="Nome"
                onChange={(e) => setName(e.target.value)} value={name}>
            </Input>
            <Input id="date" type="text" placeholder="Data de início Ex:01/01/2023"
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
        ]
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
                <Title>Atualize os dados do aluno</Title>
                {handleInputs()}
                <Title>Atualize o plano</Title>
                <SelectSection>
                    {handlePayments()}
                </SelectSection>
                <Title>Atualize o serviço</Title>
                <SelectSection>
                    {handleServices()}
                </SelectSection>
                <Button selected={selected} onClick={() => updateClient()}>{signUp}</Button>
            </Container>
            <Footer />
        </>
    )
}

export default UpdateClientPage;