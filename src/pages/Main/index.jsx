import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

function MainPage () {

const { user } = useContext(UserContext);

// console.log(user);

    return (
        <h1>Tela Principal</h1>
    )
}

export default MainPage;