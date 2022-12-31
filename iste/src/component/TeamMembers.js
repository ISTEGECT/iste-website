import ProfJeena from '../assets/ProfJeenaJohn.jpg';
import Arya from '../assets/ARYA.jpg';
import Vaibhavi from '../assets/VAIBHAVI.jpg';
import Vismaya from '../assets/VISMAYA.jpg';
import linkedin from '../assets/linkedin.svg';
import './TeamMembers.css';

import React from 'react';
 const profile = () => {
   
    return (
        <>
            <div className="container" id='team'>
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
                                    <img className="img1" src={Arya} alt=""></img>
                                </div>
                                <div className="imgShade"></div>
                                <div className="detailsDiv">
                                    <h1 className="name">Arya Ramachandran</h1>
                                    <a href="https://www.linkedin.com/in/arya-ramachandran-968aa41b3"><img className="linkedinIcon" src={linkedin} alt=""></img></a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="subHeadDiv">
                                <h1 className="subHead">Secretary</h1>
                            </div>
                            <div className="imgNameDiv">
                                <div className="imgDiv">
                                    <img className="img1" src={Vaibhavi} alt=""></img>
                                </div>
                                <div className="imgShade"></div>
                                <div className="detailsDiv">
                                    <h1 className="name">Vaibhavi G Rao</h1>
                                    <a href="https://www.linkedin.com/in/vaibhavi-g-rao-1a7752205"><img className="linkedinIcon" src={linkedin} alt=""></img></a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="subHeadDiv">
                                <h1 className="subHead">Treasurer</h1>
                            </div>
                            <div className="imgNameDiv">
                                <div className="imgDiv">
                                    <img className="img1" src={Vismaya} alt=""></img>
                                </div>
                                <div className="imgShade"></div>
                                <div className="detailsDiv">
                                    <h1 className="name">Vismaya S Nair</h1>
                                    <a href="https://www.linkedin.com/in/vismaya-santhosh-8960b6222"><img className="linkedinIcon" src={linkedin} alt=""></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="seeMoreDiv">
                    <a href=''><button className="seeMoreBtn">See More</button></a>
                </div> */}
            </div>
        </>
    );
};

export default profile;

