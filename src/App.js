import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from "./Pages/Home";
import Accomodation from "./Pages/Accomodation";
import Page404 from "./Pages/Page404";
import About from "./Pages/About";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path="/" element={<Navigate to="/home" />}/>
                <Route path="/accomodation/:id" element={<Accomodation/>}/>
                <Route path="/*" element={<Page404/>}/>

            </Routes>
        </BrowserRouter>
    );
};

export default App;

