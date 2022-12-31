import "./Home.css";
import Animation from "./Animation";

const Home = () => {
 
  return (
  
  <div className="home" style={{  position: 'relative' }} id="home" >
    
    <Animation />
   <div className="Abox">
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
   </div>
    <svg viewBox="0 0 960 300" className="svgheading">
  <symbol id="s-text">
  <text textAnchor="middle" x="50%" y="60%">ISTE GECT. </text>
  <text textAnchor="middle" x="50%" y="60%">ISTE GECT. </text>
  
  </symbol>

  <g className = "g-ants">
  <use xlinkHref="#s-text" className="text-copy"></use>
  <use xlinkHref="#s-text" className="text-copy"></use>
  <use xlinkHref="#s-text" className="text-copy"></use>
  <use xlinkHref="#s-text" className="text-copy"></use>
  <use xlinkHref="#s-text" className="text-copy"></use>
  </g>
  </svg>
  
  </div>
  
    );
}
 
export default Home;
