import "./Footer.css";
import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
// import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (<div className="Footer">
        <div className="logofoot"><img src="./ISTE.svg" alt="" />
        </div>
        <div className="enquiry">
        </div>
        <div className="links">
            <div className="icons">
                <a href="https://www.instagram.com/iste_gect/"><FaInstagramSquare className="icon" /></a>
                <a href="https://www.linkedin.com/company/iste-gec-students-chapter/"><FaLinkedin className="icon" /></a>
                <a href="https://www.facebook.com/IsteGecChapter"><FaFacebookSquare className="icon" /></a>
                {/* <a href="twitter"><FaTwitterSquare  style={style}/></a> */}
            </div>
        </div>

    </div>);
}

export default Footer;

