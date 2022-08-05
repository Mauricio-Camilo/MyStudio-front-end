import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';

import { makeSignUp } from "../../services/api";

import { Container, Title, Inputs, Input, Button, Hiperlink} from "./style"

function SignUp() {

    const loading = <ThreeDots color="#FFFFFF" />;

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [signUp, setSignUp] = useState("Cadastrar");

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

export default SignUp;