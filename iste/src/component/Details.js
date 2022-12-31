import './Details.css';
import React from 'react';
export default function Details() {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
  
    <div className={`Details fade-in-section ${isVisible ? 'is-visible' : ''}`}
    ref={domRef}  id='details'>
    
       <div className="vision " >
         <h1 >Vision</h1>
         <div className='Dcontent'>To enable learners to grow in a connected world by building a passionate community, linking educators and partners, utilising information and experience, improving learning and teaching practices on a constant basis.</div>
       </div>
       <div className="mission">
       <h1>Mission</h1>
       <div className='Dcontent'>To enable learners to grow in a connected world by building a passionate community, linking educators and partners, utilising information and experience, improving learning and teaching practices on a constant basis.</div>
       </div>
       <div className="announcement ">
        <h1>Announcement</h1>
        <div className='Dcontent'>To enable learners to grow in a connected world by building a passionate community, linking educators and partners, utilising information and experience, improving learning and teaching practices on a constant basis.</div>
       </div>
    </div>
  )
}
