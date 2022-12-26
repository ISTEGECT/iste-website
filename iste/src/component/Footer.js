import "./Footer.css";

import React from 'react';


import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    const style = {  width:'4vw',height:'4vw'}
    return ( <div className="Footer">
        <div className="logofoot"><img src="./ISTE.svg" alt="" />
       </div>
       <div className="enquiry">
       <ul className="first">
        <li>
            <a href="/home">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/Contact">Contact us</a></li>
        </ul>
        <ul className="second">
            <li><a href="/about">About us</a></li>
            <li><a href="/details">Objectives</a></li>
            <li><a href="/detail">Incentives</a></li>
        </ul>
        
       </div>
        <div className="links">
            <h2 className="social">SOCIAL LINKS</h2>
            <div className="icons">
        <a href="Instagram"><FaInstagramSquare  style={style} className="icon"/></a>
        <a href="LinkedIn"><FaLinkedin  style={style}/></a>
        <a href="twitter"><FaFacebookSquare  style={style}/></a>
        <a href="twitter"><FaTwitterSquare  style={style}/></a></div>
        </div>

    </div> );
}
 
export default Footer;

