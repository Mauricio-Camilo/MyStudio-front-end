import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner';
import { makeLogin } from "../../services/api";

function Login () {
    
    const loading = <ThreeDots color="#FFFFFF" />;

    const navigate = useNavigate();

    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    const [login, setLogin] = useState("Entrar");

    const { setUser } = useContext(UserContext);

    async function handleLogin (event) {
        event.preventDefault();
        setLogin(loading);

        try {
            const response = await makeLogin({
                cpf,
                password
            })  
            const token = response.data
            localStorage.setItem("token", token); 
            setUser(token); 
            navigate("/main");
        }

        catch {
            alert("Preencha os dados corretamente");
            setLogin("Entrar");
        }
    }

    function eraseInputs() {
        setLogin("Entrar")
        setCpf("");
        setPassword("");
    }
    return (
        <Container>
            <Title>MyStudio</Title>
            <form onSubmit={handleLogin}>
                <Inputs>
                    <Input type="text" placeholder="CPF"
                        onChange={(e) => setCpf(e.target.value)} value={cpf}>
                    </Input>
                    <Input type="password" placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)} value={password}>
                    </Input>
                    <Button type="submit">{login}</Button>
                </Inputs>
            </form>
            <Hiperlink onClick={() => navigate("/signup")}>Primeira vez? Cadastre-se!</Hiperlink>
        </Container>
    )
}

const Container = styled.div`
    width: 375px;
`
const Title = styled.h1`
    font-family: 'Saira Stencil One', cursive; 
    font-size: 32px;
    text-align: center;
    color: #FFFFFF;
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
    color: black;
    margin-top: 36px;
`
export default Login;