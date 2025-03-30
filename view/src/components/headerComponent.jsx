import React from "react";
import NavLink from "./NavLink";
import curt from '../images/curt.svg';
import person from '../images/person.svg';
import logo from "../images/logo.png";

// Компонент Preloader
const HeaderComponent = () => {
    return ( 
        <div className="headerContainer">
            <div className="logo">     
                <img src={logo} alt="Logo" />
            </div>
            <div className="navigationContainer">
                <NavLink hrefCurt="/home" content="Products" isImage={false} /> 
                <NavLink hrefCurt="/about" content="Our Culture|Our Promise" isImage={false} />
                <NavLink hrefCurt="/services" content={person} isImage={true} />
                <NavLink hrefCurt="/contact" content={curt} isImage={true} /> 
            </div>
        </div>
    );
}

export default HeaderComponent;
