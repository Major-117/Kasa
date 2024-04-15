import React from 'react';
import Header from "../Components/Header";
import Carousels from "../Components/Carousels";
import data from "../Assets/appart.json";
import {useParams} from "react-router-dom";
import Rate from "../Components/Star";
import Tags from "../Components/Tag"
import Footer from "../Components/Footer";
import CollapsAco from "../Components/CollapsAco";





const Accomodation = () => {
    const { id } = useParams();
    const datas= data.find((item) => item.id === id);






    return (
            <div className="acomodation">
                <Header/>
                <Carousels/>
                <div className="info">
                    <div className="info_personne">
                        <p className="tit">{datas.title}</p>
                        <div className="info-per">
                            <p className="name">{datas.host.name}</p>
                            <div className="star">
                                <img className="info-picture" src={datas.host.picture} alt=""/>
                                <Rate star={datas.rating}/>
                            </div>
                        </div>
                    </div>

                    <p className="location">{datas.location}</p>
                    <Tags tags={datas.tags} />


                    <div className="collapse-aco">
                        <CollapsAco title="description">
                            <p className="collapse-acoTextAco">{datas.description}</p>
                        </CollapsAco>

                        <CollapsAco title="Équipments">
                            <p className="collapse-acoTextAco equipe">
                                {datas.equipments.map((equipment, index) => (
                                    <span className="equipe" key={index}>{equipment}</span>
                                ))}
                            </p>
                        </CollapsAco>
                    </div>
                </div>
                <Footer/>
            </div>
    );
};

export default Accomodation;
