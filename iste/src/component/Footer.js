import "./Footer.css";
import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import {Link } from "react-scroll";

const Footer = () => {
    const style = {  width:'4vw',height:'4vw',fill:'white'}
    return ( <div className="Footer">
        <div className="logofoot"><img src="./ISTE.svg" alt="" />
       </div>
       <div className="enquiry">
       {/* <ul className="first">
        <li><Link to="home" spy={true} smooth={true} offset={-50} duration={500}>home</Link></li>

            <li><Link to="events"spy={true} smooth={true} offset={-150} duration={500}>Events</Link></li>
            <li><Link to="contact"spy={true} smooth={true} offset={-150} duration={500}>Contact us</Link></li>
        </ul>
        <ul className="second">
            <li><Link to="about"spy={true} smooth={true} offset={-80} duration={500}>About</Link></li>
            <li><Link to="about"spy={true} smooth={true} offset={-80} duration={500}>Objectives</Link></li>
            
        </ul>
         */}
       </div>
        <div className="links">
            
            <div className="icons">
        <a href="Instagram"><FaInstagramSquare  style={style} className="icon"/></a>
        <a href="LinkedIn"><FaLinkedin  style={style}/></a>
        <a href="twitter"><FaFacebookSquare  style={style}/></a>
        <a href="twitter"><FaTwitterSquare  style={style}/></a></div>
        </div>

    </div> );
}
 
export default Footer;

