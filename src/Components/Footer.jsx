import React from 'react';
import logoKasa from "../Assets/img/logo.png"

const Footer = () => {
    return (
        <div className="footer">
            <img className="logo-footer" src={logoKasa} alt="logo kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;
