import React from 'react';
import star1 from "../Assets/img/star1.png";
import star2 from "../Assets/img/star2.png";

const rate = ({star,className}) => {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className={`rate-comp ${className}`}>
            {stars.map((level) =>
                star >= level ? (
                    <img
                        key={level.toString()}
                        className="star"
                        src={star1}
                        alt="note star"
                    />
                ) : (
                    <img
                        key={level.toString()}
                        className="star"
                        src={star2}
                        alt="note star"
                    />
                )
            )}
        </div>
    );
};

export default rate;
