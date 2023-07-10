import React from 'react';
import ProfJeena from '../assets/ProfJeenaJohn.jpg';
import Abdu from '../assets/Abdu-Convenor.jpg';
import Sweda from '../assets/SWEDA-SECRETARY.jpg';
import Rachel from '../assets/Rachel-Treasurer.jpg';
import linkedin from '../assets/linkedin.svg';
import './Team.css';

export default function Team() {
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

    return (
        
            <div className={`container fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef} id='team'>
                <div className="mainHeadDiv">
                    <h1 className="mainHead">ISTE GECT EXECOM'23</h1>
                </div>
                <div className="imgMainDiv">
                    <div className="gridDiv md:grid-cols-2 xl:grid-cols-4">
                        <div>
                            <div className="subHeadDiv">
                                <h1 className="subHead">Faculty Advisor</h1>
                            </div>
                            <div className="imgNameDiv">
                                <div className="imgDiv">
                                    <img className="img1" src={ProfJeena} alt=""></img>
                                </div>
                                <div className="imgShade"></div>
                                <div className="detailsDiv">
                                    <h1 className="name">Prof. Jeena John</h1>
                                    <a href="https://www.linkedin.com/in/jeena-john-6420b3171"><img className="linkedinIcon" src={linkedin} alt=""></img></a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="subHeadDiv">
                                <h1 className="subHead">Convenor</h1>
                            </div>
                            <div className="imgNameDiv">
                                <div className="imgDiv">
                                    <img className="img1" src={Abdu} alt=""></img>
                                </div>
                                <div className="imgShade"></div>
                                <div className="detailsDiv">
                                    <h1 className="name">Abdullah Rishad</h1>
                                    <a href="https://www.linkedin.com/in/abdullah-rishad-721195162/"><img className="linkedinIcon" src={linkedin} alt=""></img></a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="subHeadDiv">
                                <h1 className="subHead">Secretary</h1>
                            </div>
                            <div className="imgNameDiv">
                                <div className="imgDiv">
                                    <img className="img1" src={Sweda} alt=""></img>
                                </div>
                                <div className="imgShade"></div>
                                <div className="detailsDiv">
                                    <h1 className="name">Sweda Dinesh</h1>
                                    <a href="https://www.linkedin.com/in/sweda-dinesh-9b354b21b/"><img className="linkedinIcon" src={linkedin} alt=""></img></a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="subHeadDiv">
                                <h1 className="subHead">Treasurer</h1>
                            </div>
                            <div className="imgNameDiv">
                                <div className="imgDiv">
                                    <img className="img1" src={Rachel} alt=""></img>
                                </div>
                                <div className="imgShade"></div>
                                <div className="detailsDiv">
                                    <h1 className="name">Rachel Babu</h1>
                                    <a href="https://www.linkedin.com/in/rachel-babu-9a9909247/"><img className="linkedinIcon" src={linkedin} alt=""></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* add seeMoreBtn to connect to a new page with all execom members details */}
                {/* <div className="seeMoreDiv">
                    <a href=''><button className="seeMoreBtn">See More</button></a>
                </div> */}
            </div>
        
    );
}