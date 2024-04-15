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
                    <NavLink to={`/accomodation/${appart.id}`}>
                        <li key={index} className="card">

                                <p className="title-appart">{appart.title}</p>
                                <img className="img-appart" src={appart.cover} alt="appart"/>
                        </li>
                    </NavLink>
                ))}
            </ul>
        </main>

    );
};

export default Appart;