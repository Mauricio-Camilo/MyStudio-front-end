import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const PrivateRoute = ({ children }) => {
    const {user} = useContext(UserContext);

    if (!user) {
        alert("Você será redirecionado.");
        return <Navigate to="/" />;
      }
    
      return children;
};

export default PrivateRoute;