import React from "react";
import NavLink from "./NavLink";
import person from '../images/person.svg';
import logo from "../images/logo.png";
import curt from '../images/curt.svg';
// Компонент Preloader
const FooterComponent = () => {
    return ( 
        <div className="footerContainer">
            <div className="navigationContainer">
                <div className="footerLinks">
                    <NavLink hrefCurt="/home" content="Terms of Use" isImage={false} /> 
                    <NavLink hrefCurt="/about" content="Privacy Policy" isImage={false} />
                    <NavLink hrefCurt="/about" content="Shipping | Returns" isImage={false} />
                    <NavLink hrefCurt="/about" content="Contact" isImage={false} />
                </div>
                <div className="footerLinkContainer">
                    <NavLink hrefCurt="/services" content={person} isImage={true} />
                    <NavLink hrefCurt="/contact" content={curt} isImage={true} /> 
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;