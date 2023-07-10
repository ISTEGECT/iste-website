import React, { lazy, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import nueva from '../assets/nueva.jpg';
import nueva2 from '../assets/nueva2.jpeg';
import Bigo from '../assets/Bigo.jpeg';
import Blockchain from '../assets/Blockchain.jpeg';
import senti from "../assets/nueva/sentiment.webp"
import drone from "../assets/nueva/drone.webp"
import digital from "../assets/nueva/digital.webp"
import ideathon from '../assets/nueva/ideathon.webp'
import arcane from '../assets/nueva/arcane.webp'
import curiosita from '../assets/nueva/curiosita.webp'
import shipwreck from '../assets/nueva/shipwreck.webp'
import murder from '../assets/nueva/murder.webp'


//department events
import cado from '../assets/nueva/cado.webp';
import puzzled from '../assets/nueva/puzzled.webp';
import avenir from '../assets/nueva/avenir.webp';
import electrifix from '../assets/nueva/electrifix.webp';
import trivia from '../assets/nueva/trivia.webp';
import chem from '../assets/nueva/chem.webp';
import crack from '../assets/nueva/crack.webp';
import bidandbuild from '../assets/nueva/bidandbuild.webp';
import lollapalooza from '../assets/nueva/lollapalooza.webp';
import pictionary from '../assets/nueva/pictionary.webp';
import quickescape from '../assets/nueva/quickescape.webp';
import tagaboo from '../assets/nueva/tagaboo.webp';
import robowar from '../assets/nueva/robowar.webp';
import matrix from '../assets/nueva/matrix.webp';

import laser from '../assets/nueva/laser.webp'
import archathon from '../assets/nueva/archathon.webp'
import soapitup from '../assets/nueva/soapitup.webp';
import wannabees from '../assets/nueva/wannabees.webp';
import talks from "../assets/nueva/talk.webp"
import { v4 as uuidv4} from 'uuid';
import { config } from "react-spring";
import './Upcoming.css';

export const Upcoming = () => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observerRefValue=domRef.current;
    observer.observe(observerRefValue);
    return () => observer.unobserve(observerRefValue);
  }, []);
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
      content: <img src={Bigo} alt="3" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={Blockchain} className="Uevent"  alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src={senti} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={drone} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={digital} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={ideathon} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={arcane} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={curiosita} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={shipwreck} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={murder} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={cado} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={puzzled} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={avenir} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={electrifix} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={trivia} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={chem} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={crack} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={bidandbuild} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={lollapalooza} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={pictionary} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={quickescape} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={tagaboo} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={robowar} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={matrix} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={laser} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={archathon} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={soapitup} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={wannabees} alt="1" className="Uevent" />
    },
    {
      key: uuidv4(),
      content: <img src={talks} alt="1" className="Uevent" />
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

  return (<div className={`upcoming fade-in-section ${isVisible ? 'is-visible' : ''}`}
  ref={domRef}>
    <div className="head">
    <h1 className='eventHeading' style={{textAlign:'center',color:'white'}}>NUEVA Highlights</h1>
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
