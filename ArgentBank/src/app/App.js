import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';
import Header from "../components/header";
import Home from "../routes/home";
import Sign_in from "../components/form";
import Footer from "../components/footer";
import Dashboard from "../routes/dashboard";


const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store} stabilityCheck="never">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/sign_in" element={<Sign_in />} />
                <Route path="/dashboard" element={localStorage.getItem('token') ? <Dashboard/> :  <Navigate replace to={"/sign_in"} />} />
            </Routes>
            <Footer />
            </Provider>
        </BrowserRouter>
    );
};


export default App;
