import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Historic from "./pages/Historic";
import InsertClientPage from "./pages/Insert";
import UpdateClientPage from "./pages/Update";
import Card from "./pages/Card";


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
                        }/>
                           <Route path="/historic" element={
                            <PrivateRoute>
                                <Historic />
                            </PrivateRoute>
                        }/>
                         <Route path="/insert" element={
                            <PrivateRoute>
                                <InsertClientPage />
                            </PrivateRoute>
                        }/>
                        <Route path="/update/:clientId" element={
                            <PrivateRoute>
                                <UpdateClientPage />
                            </PrivateRoute>
                        }/>
                           <Route path="/card" element={
                            <Card />
                        }/>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </>
    )
}

export default App;