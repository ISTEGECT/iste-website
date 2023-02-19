import './Navbar.css'
import { useState, React } from 'react';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {Link} from "react-scroll";
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
      <Link to="home" spy={true} smooth={true} offset={-100} duration={500}><div className="but" onClick={handleToggle}>HOME</div></Link>
      <Link to="details"spy={true} smooth={true} offset={-138} duration={500}><div className="but" onClick={closeMenu}>DETAILS</div></Link>
      <Link to="about"spy={true} smooth={true} offset={-100} duration={500}><div className="but" onClick={closeMenu}>ABOUT</div></Link>
      <Link to="events"spy={true} smooth={true} offset={-90} duration={500}><div className="but" onClick={closeMenu}>EVENTS</div></Link>
      <Link to="team"spy={true} smooth={true} offset={-100} duration={500}><div className="but" onClick={closeMenu}>EXECOM</div></Link>
      <Link to="contact"spy={true} smooth={true} offset={-100} duration={500}><div className="but" onClick={closeMenu}>CONTACT</div></Link>
      <a href='http://iste.gectcr.ac.in/'spy={true} smooth={true} offset={-100} duration={500}><div className="but nueva" onClick={closeMenu}>NUEVA</div></a>
     
      



      
    </div>
    <div className="tog" onClick={handleToggle} >{toggle ? <MdClose  size={25}/>:<FiMenu size={25}/>}</div>
  </nav> );

}
 
export default Navbar;