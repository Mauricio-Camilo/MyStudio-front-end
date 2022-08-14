import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [filter, setFilter] = useState ("Todos");
    return (
        <UserContext.Provider value={{token, setToken, filter, setFilter}}>
            {children}
        </UserContext.Provider>
    );
};