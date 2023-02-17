import React, { useState } from 'react'
import "./Gallery.css";
import Slider from 'react-slick';
import content from './Data';
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { FaRegCalendarAlt, FaVideo } from "react-icons/fa";

// import { FaRegCalendarAlt,FaAngleRight,FaAngleLeft,FaMapMarkerAlt} from "react-icons/fa";

export default function Gallery() {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observerRefValue = domRef.current;
    observer.observe(observerRefValue);
    return () => observer.unobserve(observerRefValue);
  }, []);
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <AiFillRightCircle style={{ height: "3vw", width: "3vw" }} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick} >
        <AiFillLeftCircle style={{ height: "3vw", width: "3vw" }} />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: true,
    lazyload: true,
    speed: 300,
    slideToShow: 0,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Maingallery" id='events'>
      <div className={`heading fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}><h1 className='galleryHeading' style={{ textAlign: 'center', color: 'white' }}>
          Previous Events</h1></div>

      <div className='Gallery' style={{ color: 'white' }}>

        <Slider {...settings}>

          {content.map((element, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide flex" : "slide flex"}>
              <div className="carousel">
                <div className='part1'>
                  <img src={element.image} alt={element.image} />
                </div>
                <div className="part2">
                  <h2 className='content' style={{ fontSize: '3vw' }}>{element.title}</h2>
                  <p classsName="content2">{element.content}</p>
                  <p style={{ color: 'rgb(209 80 232)', fontSize: '2vw', marginTop: '2vw' }} className='calender'><FaRegCalendarAlt style={{ marginRight: '10px', color: 'rgb(209 80 232)' }} />{element.date}</p>
                  <p style={{ fontSize: '1.5vw' }} className="state"><FaVideo style={{ marginRight: '1vw', marginLeft: '.3vw', height: '1.2vw' }} />{element.state}</p>

                </div>
              </div>







            </div>

          ))}






        </Slider>


      </div>


    </div>
  )
}


