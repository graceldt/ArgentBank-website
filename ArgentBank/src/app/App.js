import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/header";
import Home from "../routes/home";
import Sign_in from "../routes/Sign_In";
import Footer from "../components/footer";
import Dashboard from "../routes/dashboard";
import { useSelector } from "react-redux";


const App = () => {
    const token = useSelector((state) => state.user.token)
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/sign_in" element={<Sign_in />} />
                <Route path="/dashboard" element={token ? <Dashboard/> :  <Navigate replace to={"/sign_in"} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};


export default App;
