import './Navbar.css'
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import {Link } from "react-scroll";
const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  const handleToggle = () => {
    return setToggle(!toggle);
  };
  const closeMenu = () => {
    setToggle(false)
  }

  return ( <nav>
    <div className="logo">
      <img src="./logo.png" alt="" className="pic" />
      <p>ISTE</p>
    </div>
    <div className={`buttons ${toggle ? "showMenu" : ""}`}>
      <div className="but"  onClick={closeMenu}><Link to="home" spy={true} smooth={true} offset={-100} duration={500}>HOME</Link></div>
      <div className="but"><Link to="details"spy={true} smooth={true} offset={-138} duration={500}>DETAILS</Link></div>

      <div className="but"><Link to="about"spy={true} smooth={true} offset={-100} duration={500}>ABOUT</Link></div>
      <div className="but" ><Link to="events"spy={true} smooth={true} offset={-90} duration={500}>EVENTS</Link></div>
      <div className="but"><Link to="team"spy={true} smooth={true} offset={-100} duration={500}>EXECOM</Link></div>
      <div className="but"><Link to="contact"spy={true} smooth={true} offset={-100} duration={500}>CONTACT</Link></div>


      



      
    </div>
    <div className="tog" onClick={handleToggle}>{toggle ? <MdClose  size={25}/>:<FiMenu size={25}/>}</div>
  </nav> );

}
 
export default Navbar;