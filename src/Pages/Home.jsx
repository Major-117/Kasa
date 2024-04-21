import React from 'react';
import Header from "../Components/Header";
import Appart from "../Components/Appart"
import Footer from "../Components/Footer";

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <div className="title-background">
                <h1>Chez vous, <span className="retour">partout et ailleurs</span></h1>
            </div>
            <div className="all-card">
                <Appart/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
