import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import nueva from '../assets/nueva.jpeg';
import nueva2 from '../assets/nueva2.jpeg';
import posterdesign from '../assets/posterdesigning.jpeg';
import { v4 as uuidv4} from 'uuid';
import { config } from "react-spring";
import './Upcoming.css';

export const Upcoming = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle
  });

  let slides = [
    {
      key: uuidv4(),
      content: <img src={nueva} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={nueva2} alt="2" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={posterdesign} alt="3" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/500/?random" className="Uevent"  alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/804/?random" className="Uevent" alt="5" />
    },
    
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

 

  let xDown = null;
  let yDown = null;

  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ); // jQuery
  };

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setState({ goToSlide: state.goToSlide + 1 });
      } else {
        /* right swipe */
        setState({ goToSlide: state.goToSlide - 1 });
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  return (<div className="upcoming">
    <div className="head">
    <h1 className='eventHeading' style={{textAlign:'center',color:'white'}}>Upcoming Events</h1>
    </div>

    <div className="carouselevent"

      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Carousel
      
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
      
    </div>
    </div>
  );
};
