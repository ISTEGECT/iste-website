import React from 'react';
import './About.css';
import about from '../assets/about.png';
import objective from '../assets/objective.png';
export default function About() {
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
  return (
    <div className={`About fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef} id='about'>
      <div className={`row1 fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}>
        <div className="col1">
          <h1 >About Us</h1>
          <p >ISTE GECT students chapter has a rich history of participation and has always strived to supplement the campus' academic environment by actively conducting numerous technical events, talks, workshops and competitions that constantly instill the flames of innovation among all young minds.
            With various department forums in engineering and architecture, ISTE GECT has been actively contributing towards developing its member's technical capabilities professionally, creatively and beyond. With over 2000 students and 300+ faculty members at the institutional level, ISTE GECT has claimed the Best Students' Chapter several times and has proven its spirit in the field as a very dynamic chapter.

          </p>
        </div>
        <div className="col2" >
          <img src={about} alt=".." className='imgabt'></img>
        </div>
      </div>
      <div className={`row2 fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}>
        <div className="col3">
          <img src={objective} alt=".." className='imgobj'></img>
        </div>
        <div className="col4">
          <h1>Objectives</h1>
          <p >The primary objective of the ISTE is to provide quality training programmes to teachers and administrators of technical institutions, updating their knowledge and skills in their fields of activity and assisting and contributing to the production and development of top-quality professional engineers and technicians needed by the industry and other organizations.

          </p>

        </div>
      </div>


    </div>
  )
}
