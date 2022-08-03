import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import GlobalStyle from "./styles/globalStyle.jsx";

function App() {

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;