import React, { useState } from 'react';
import ArrowIcon from "../Assets/img/VectorSection.png";

const CollapsAbout = ({ title, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="collapseAbout">
            <button onClick={toggleCollapse} className="collapse-button">
                {title}
                {isCollapsed ? <img className="iconArrow" src={ArrowIcon} alt="Arrow Icon" /> : <img src={ArrowIcon} className="iconArrowOpen" alt="Arrow Icon" />}
            </button>
            {!isCollapsed && <div  className="collapse-content">{children}</div>}
        </div>
    );
};

export default CollapsAbout;

