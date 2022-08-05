import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

function MainPage () {

const { token } = useContext(UserContext);

    return (
        <h1>Tela Principal</h1>
    )
}

export default MainPage;