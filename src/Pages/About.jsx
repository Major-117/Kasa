import React from 'react';
import Header from "../Components/Header";
import Image from "../Assets/img/imgAbout.png";
import Collaps from "../Components/Collaps";
import Footer from "../Components/Footer";


const About = () => {
    return (
        <div className="body-about">
            <Header/>
            <div className="divImageAbout">
                <img className="imageAbout" src={Image} alt=""/>
            </div>
            <div className="Collaps-actif">
                <Collaps title="Fiabilité">
                    <p className="collapse-aboutText">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                </Collaps>
                <Collaps title="Respect">
                    <p className="collapse-aboutText">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collaps>
                <Collaps title="Service">
                    <p className="collapse-aboutText">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </Collaps>
                <Collaps title="Sécurité">
                    <p className="collapse-aboutText">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Collaps>
            </div>
        </div>
    );
};

export default About;
