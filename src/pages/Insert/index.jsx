import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";

import styled from "styled-components";


function InsertClientPage() {

    const { user } = useContext(UserContext);

    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    const payments = [
        { option: "Mensal", icon: "card-outline", id: "1" },
        { option: "Trimestral", icon: "barcode-outline", id: "2" },
        { option: "Semestral", icon: "cash-outline", id: "3" },
        { option: "Anual", icon: "cash-outline", id: "3" },
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
                        const { option, icon, id } = payment;
                        return (
                            <Payment>
                                <p>{option}</p>
                            </Payment>
                        )
                    })}
                </PaymentSection>
                <Button>Finalizar cadastro</Button>

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
    border-radius: 5px;
`
const IconPay = styled.button`
    font-size: 25px;
    background-color:  green;
    border: 0;
    color: gray;
    border-radius: 5px;
`

const Button = styled.button`
    width: 350px;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background-color: #FF6C00;
    border: solid 1px #FF6C00;
    color: #fff;
    margin-top: 20px;
    /* margin-left: 10px; */
`


export default InsertClientPage;