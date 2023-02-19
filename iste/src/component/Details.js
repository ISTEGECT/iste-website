import './Details.css';
import React from 'react';
export default function Details() {
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
  
    <div className={`Details fade-in-section ${isVisible ? 'is-visible' : ''}`}
    ref={domRef}  id='details'>
    
       <div className="vision " >
         <h1 >Vision</h1>
         <div className='Dcontent'>
         An experience that boosts creative minds to deal with dynamic technology.          </div>
       </div>
       <div className="mission">
       <h1>Mission</h1>
       <div className='Dcontent'>
       To empower learners to create and flourish in a connected world, leveraging knowledge and expertise, developing innovative ways to teach and learn proactively, and enriching skills among all members.          </div>
       </div>
       <div className="announcement ">
        <h1>Announcement</h1>
        <div className='Dcontent'>- NUEVA '23, 21st Annual ISTE State Students' Convention, is coming live on our campus soon.<br></br>- Pre-workshops as part of NUEVA '23 are happening now.
        </div>
       </div>
    </div>
  )
}
