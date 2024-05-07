import React, { useState } from 'react';
import Logement from "../Assets/appart.json";
import { useParams } from "react-router-dom";
import ArrowLeft from "../Assets/img/Vector-left.svg";
import ArrowRight from "../Assets/img/Vector-right.svg";


const Carousels = () => {
    const { id } = useParams();
    const logement = Logement.find((item) => item.id === id);
    const [image, setImage] = useState(0);

    const nextImage = () => {
        setImage((prevImage) => (prevImage + 1) % logement.pictures.length);
    };

    const prevImage = () => {
        setImage((prevImage) =>
            prevImage === 0 ? logement.pictures.length - 1 : prevImage - 1
        );
    };

    const totalImages = logement.pictures.length;

    return (
        <div className="all-info">
            <div className="image-picture">
                {totalImages > 1 && (
                    <button className="arrows left" onClick={prevImage}>
                        <img className="arrow" src={ArrowLeft} alt="Previous"/>
                    </button>
                )}
                <img className="image-pictures" src={logement.pictures[image]} alt={`img ${image + 1}/${totalImages}`}/>
                {totalImages > 1 && (
                    <button className="arrows right" onClick={nextImage}>
                        <img className="arrowRi" src={ArrowRight} alt="Next"/>
                    </button>
                )}
                <p className="counter">{`${image + 1}/${totalImages}`}</p>

            </div>
        </div>

    );
};

export default Carousels;
