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
        <div className='Dcontent Dcontent3'>- Call for new EXECOM<br></br><span>Apply now and join the team that will lead the way. </span><a href='https://bit.ly/IsteExecom'>Click here</a>
        </div>
       </div>
    </div>
  )
}
