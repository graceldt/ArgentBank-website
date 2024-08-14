import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./routes/home";
import Sign_in from "./routes/sign_in";
import Footer from "./components/footer";
import User from "./routes/user"


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/sign_in" element={<Sign_in />} />
                <Route path="/user" element={<User />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};


export default App;
