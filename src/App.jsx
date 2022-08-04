import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";

import GlobalStyle from "./styles/globalStyle.jsx";
import { UserProvider } from "./contexts/userContext";

function App() {

    return (
        <>
            <GlobalStyle />

            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/" element={<Login />} />
                        <Route path="/main" element={
                            <PrivateRoute>
                                <Main />
                            </PrivateRoute>
                        } />
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </>
    )
}

export default App;