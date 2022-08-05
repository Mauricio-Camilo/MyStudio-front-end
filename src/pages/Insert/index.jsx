import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { postClient } from "../../services/api";

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
    const [selected, setSelected] = useState (false);
    const [signUp, setSignUp] = useState("Cadastrar");
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

    async function createClient () {
        setSelected(true);
        setSignUp(loading);
        if ([...selectedPayment.keys()][0] === undefined) {
            alert("Selecione um plano antes de prosseguir com o cadastro")
        }

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

    const payments = [
        { option: "Mensal", icon: "card-outline", id: "1" },
        { option: "Trimestral", icon: "barcode-outline", id: "2" },
        { option: "Semestral", icon: "cash-outline", id: "3" },
        { option: "Anual", icon: "cash-outline", id: "4" },
    ]

    return (
        <>
            <Container>
                <Title>Cadastre seu novo aluno</Title>
                
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
                <Button selected={selected} onClick={() => createClient()}>{signUp}</Button>
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

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;
`

const Input = styled.input`
    width: 250px;
    height: 58px;
    border-radius: 5px;
    padding-left: 15px;
    /* margin-left: 60px; */
`

const PaymentSection = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`

const Payment = styled.div`
    width: 150px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center; 
    gap: 10px;
    background-color: #ffa920;
    border: ${(props) => props.selected? "3px solid red" : "none"};
    border-radius: 5px;
    cursor: pointer;

`
const Button = styled.button`
    width: 350px;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FF6C00;
    border: solid 1px #FF6C00;
    color: #fff;
    margin-top: 20px;
    pointer-events: ${(props) => props.selected? "none" : "auto"};
    cursor: pointer;
`
export default InsertClientPage;