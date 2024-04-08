import React from 'react';
import Header from "../Components/Header";
import Appart from "../Components/Appart"
import Footer from "../Components/Footer";

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="title-background">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="all-card">
                <Appart/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
