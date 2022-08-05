import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    // const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{token, setToken}}>
            {children}
        </UserContext.Provider>
    );
};