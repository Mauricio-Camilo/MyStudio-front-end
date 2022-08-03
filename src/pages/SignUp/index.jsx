import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner';

import { makeSignUp } from "../../services/api";

function SignUp() {

    const loading = <ThreeDots color="#FFFFFF" />;

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [signUp, setSignUp] = useState("Cadastrar");

    const URL = "http://localhost:5000/signup";

    const navigate = useNavigate();

    async function handleSignUp(event) {

        event.preventDefault();
        setSignUp(loading);

        try {

            await makeSignUp({
                name,
                cpf,
                password,
                confirmPassword
            })
           
            navigate("/")
        }

        catch {
            alert("Preencha os dados corretamente");
            setSignUp("Cadastrar");
            eraseInputs();
        }
    };

    function eraseInputs() {
        setSignUp("Cadastrar")
        setName("");
        setCpf("");
        setPassword("");
        setConfirmPassword("");
    }

    return (
        <Container>
            <Title>MyStudio</Title>
            <form onSubmit={handleSignUp}>
                <Inputs>
                    <Input type="text" placeholder="Nome" 
                        onChange={(e) => setName(e.target.value)} value={name}>
                    </Input>
                    <Input type="text" placeholder="CPF" 
                        onChange={(e) => setCpf(e.target.value)} value={cpf}>
                    </Input>
                    <Input type="password" placeholder="Senha" 
                        onChange={(e) => setPassword(e.target.value)} value={password}>
                    </Input>
                    <Input type="password" placeholder="Confirme a senha" 
                        onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}>
                    </Input>
                    <Button type="submit">{signUp}</Button>
                </Inputs>
            </form>
            <Hiperlink onClick={() => navigate("/")}>Já tem uma conta? Entre agora!</Hiperlink>
        </Container>
    )
}

const Container = styled.div`
    width: 375px;
`
const Title = styled.h1`
    /* font-family: 'Saira Stencil One', cursive;  */
    font-size: 32px;
    text-align: center;
    color: black;
    margin-top: 159px;
    margin-bottom: 24px;
`
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;
    padding-left: 25px;
`
const Input = styled.input`
        width: 326px;
        height: 58px;
        border-radius: 5px;
        padding-left: 15px;
`
const Button = styled.button`
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
    width: 326px;
    height: 46px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
`
const Hiperlink = styled.p`
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
    margin-top: 36px;
`
export default SignUp;