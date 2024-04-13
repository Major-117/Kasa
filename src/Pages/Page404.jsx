import React from 'react';
import Header from "../Components/Header";
import {NavLink} from "react-router-dom";
import Footer from "../Components/Footer";

const Page404 = () => {
    return (
        <div>
            <Header/>
            <div className="pageError">
                <h1>404</h1>
                <p className="oups">Oups! La page que vous demander n'existe pas </p>
            </div>

            <NavLink to="/Home">
                <p className="pageReturn">Retourner sur la page d'accueil</p>
            </NavLink>
            <Footer/>
        </div>

    );
};

export default Page404;
