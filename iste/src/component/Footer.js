import "./Footer.css";
import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
// import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const style = { width: '8vw', height: '8vw', fill: 'white' }
    return (<div className="Footer">
        <div className="logofoot"><img src="./ISTE.svg" alt="" />
        </div>
        <div className="enquiry">
        </div>
        <div className="links">
            <div className="icons">
                <a href="https://www.instagram.com/iste_gect/"><FaInstagramSquare style={style} className="icon" /></a>
                <a href="https://www.linkedin.com/company/iste-gec-students-chapter/"><FaLinkedin style={style} /></a>
                <a href="https://www.facebook.com/IsteGecChapter"><FaFacebookSquare style={style} /></a>
                {/* <a href="twitter"><FaTwitterSquare  style={style}/></a> */}
            </div>
        </div>

    </div>);
}

export default Footer;

