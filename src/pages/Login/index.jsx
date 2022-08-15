import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import { makeLogin } from "../../services/api";
import logo from "./../../assets/logo.svg";

import { Container, Logo, Inputs, Input, Button, Hiperlink} from "./../SignUp/style"

function Login () {

    const loading = <ThreeDots color="#FFFFFF" />;

    const navigate = useNavigate();

    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    const [login, setLogin] = useState("Entrar");

    const { setToken } = useContext(UserContext);

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
            setToken(token);
            navigate("/main");
        }

        catch {
            alert("Preencha os dados corretamente");
            setLogin("Entrar");
        }
    }

    return (
        <Container>
            <Logo src={logo}></Logo>
            <form onSubmit={handleLogin}>
                <Inputs>
                    <Input id="login" type="text" placeholder="CPF" required
                        onChange={(e) => setCpf(e.target.value)} value={cpf}>
                    </Input>
                    <Input id="password" type="password" placeholder="Senha" required
                        onChange={(e) => setPassword(e.target.value)} value={password}>
                    </Input>
                    <Button type="submit">{login}</Button>
                </Inputs>
            </form>
            <Hiperlink onClick={() => navigate("/signup")}>Primeira vez? Cadastre-se!</Hiperlink>
        </Container>
    )
}

export default Login;