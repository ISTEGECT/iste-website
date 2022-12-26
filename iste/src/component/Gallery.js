import React,{ useState } from 'react'
import "./Gallery.css";
import Slider from 'react-slick';
import content from './Data';
import { AiFillLeftCircle,AiFillRightCircle } from "react-icons/ai";
import { FaRegCalendarAlt,FaMapMarkerAlt} from "react-icons/fa";

// import { FaRegCalendarAlt,FaAngleRight,FaAngleLeft,FaMapMarkerAlt} from "react-icons/fa";

export default function Gallery() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <AiFillRightCircle />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick} >
        <AiFillLeftCircle  />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
   const settings={
     infinite:true,
     lazyload:true,
     speed:300,
     slideToShow:0,
     centerMode:true,
     centerPadding:0,
     nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
   };
  return (
    <div className="Maingallery">
            <div className="heading"><h1 className='galleryHeading' style={{textAlign:'center',color:'white'}}>
            Previous Events</h1></div>

    <div className='Gallery' style={{color:'white'}}>

     <Slider {...settings}>
    
      {content.map((element,idx) => (
          <div className={idx === imageIndex ? "slide activeSlide flex" : "slide flex"}>
            <div className="carousel">
            <div className='part1'>
             <img src={element.image} alt={element.image}  />
             </div>
             <div className="part2">
             <h2 className='content'style={{fontSize:'3vw'}}>{element.title}</h2>
              <p style={{fontSize:'1.7vw',marginTop:'2vw',fontWeight:'10'}}>{element.content}</p>
              <p style={{color:'rgb(213, 28, 28)',fontSize:'2vw',marginTop:'2vw'}}><FaRegCalendarAlt style={{marginRight:'10px',color:'rgb(213, 28, 28)'}}/>{element.date}</p>
              <p style={{fontSize:'1.5vw'}}><FaMapMarkerAlt style={{marginRight:'2vw'}}/>GECT Campus,Thrissur</p>
              
             </div>
            </div>
         
             
           
           
          
           
           
          </div>

        ))}
       
      

     
      
       
      </Slider>
    

    </div>
    </div>
  )
}


