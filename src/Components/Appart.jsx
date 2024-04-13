import React, {useEffect, useState} from 'react';
import Logement from "../Assets/appart.json";
import {NavLink} from "react-router-dom";


const Appart = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Logement)
    },[])

    return (
        <main className="main-container">
            <ul className="all-image">
                {data.map((appart, index) => (
                    <li key={index} className="card">
                        <NavLink to={`/accomodation/${appart.id}`}>
                            <p className="title-appart">{appart.title}</p>
                            <img src={appart.cover} alt="appart"/>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </main>

    );
};

export default Appart;