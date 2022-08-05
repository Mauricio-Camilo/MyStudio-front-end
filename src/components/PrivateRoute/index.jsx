import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const PrivateRoute = ({ children }) => {
    const {token} = useContext(UserContext);

    if (!token) {
        alert("Você será redirecionado.");
        return <Navigate to="/" />;
      }
    
      return children;
};

export default PrivateRoute;