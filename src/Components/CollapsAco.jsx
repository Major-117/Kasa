import React, { useState } from 'react';
import ArrowIcon from "../Assets/img/VectorSection.png";

const CollapsAco = ({ title, children, className }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (

        <div className={`collapseAco ${className}`}>
            <button onClick={toggleCollapse} className="collapse-buttonAco">
                {title}
                {isCollapsed ? <img className="iconArrowAco" src={ArrowIcon} alt="Arrow Icon"/> :
                    <img src={ArrowIcon} className="iconArrowOpenAco" alt="Arrow Icon"/>}
            </button>
            {!isCollapsed && <div className="collapse-contentAco">{children}</div>}
        </div>


    );
};

export default CollapsAco;
