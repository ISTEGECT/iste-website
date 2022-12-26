

import './Navbar.css'
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
// import {Link} from "react-router-dom";


const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  const handleToggle = () => {
    return setToggle(!toggle);
  };

  return ( <nav>
    <div className="logo">
      <img src="./logo.png" alt="" className="pic" />
      <p>ISTE</p>
    </div>
    <div className={`buttons ${toggle ? "showMenu" : ""}`}>
      <div className="but"><a href="/home">HOME</a></div>
      <div className="but" ><a href="/events">EVENTS</a></div>
      <div className="but"><a href="/about">ABOUT</a></div>
      <div className="but"><a href="/details">DETAILS</a></div>
      <div className="but"><a href="/contact">CONTACT</a></div>
      



      
    </div>
    <div className="tog" onClick={handleToggle}>{toggle ? <MdClose  size={25}/>:<FiMenu size={25}/>}</div>
  </nav> );

}
 
export default Navbar;