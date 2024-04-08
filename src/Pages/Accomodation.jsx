import React from 'react';
import Header from "../Components/Header";
import Carousels from "../Components/Carousels";
import data from "../Assets/appart.json";
import {useParams} from "react-router-dom";
import Collaps from "../Components/Collaps";
import Rate from "../Components/Star";
import Tags from "../Components/Tag"





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
                        <Collaps title="description">
                            <p>{datas.description}</p>
                        </Collaps>
                        <Collaps title="Équipments">
                            <p className="equip">{datas.equipments}</p>
                        </Collaps>
                    </div>
                </div>
            </div>
    );
};

export default Accomodation;
