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
                <div>
                    <div className="accomodationInfo">
                        <div className="info">
                            <p className="tittleAco">{datas.title}</p>
                            <p className="location">{datas.location}</p>
                            <div>
                                <Tags tags={datas.tags}/>
                            </div>

                        </div>
                        <div className="host">
                            <div className="nameImg">
                                <p className="name">{datas.host.name}</p>
                                <img className="photo" src={datas.host.picture} alt=""/>
                            </div>

                            <Rate className="rrating" star={datas.rating}/>
                        </div>
                    </div>


                    <div className="collapse-aco">
                        <CollapsAco title="description">
                            <p className="collapse-acoTextAco">{datas.description}</p>
                        </CollapsAco>

                            <CollapsAco title="Équipments" className="collapseEquip">
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
