import React from 'react';
import'./About.css';
import about from '../assets/about.jpg';
import objective from '../assets/objective.jpg';
export default function About() {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.observe(domRef.current);
  }, []);
  return (
    <div className={`About fade-in-section ${isVisible ? 'is-visible' : ''}`}
    ref={domRef} id='about'>
        <div className={`row1 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    ref={domRef}>
            <div className="col1">
               <h1 >About Us</h1>
               <p style={{marginTop:'3vw'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum esse quam quaerat! Enim non pariatur excepturi reiciendis, laudantium, dolor velit accusantium animi placeat quidem molestias tempora necessitatibus culpa autem nobis?
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum esse quam quaerat! Enim non pariatur excepturi reiciendis, laudantium, dolor velit accusantium animi placeat quidem molestias tempora necessitatibus culpa autem nobis?
              
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
            <p style={{marginTop:'3vw'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum esse quam quaerat! Enim non pariatur excepturi reiciendis, laudantium, dolor velit accusantium animi placeat quidem molestias tempora necessitatibus culpa autem nobis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum esse quam quaerat! Enim non pariatur excepturi reiciendis, laudantium, dolor velit accusantium animi placeat quidem molestias tempora necessitatibus culpa autem nobis?
            
            </p>

            </div>
        </div>

      
    </div>
  )
}
