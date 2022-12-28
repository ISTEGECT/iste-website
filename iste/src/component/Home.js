import "./Home.css";
import Animation from "./Animation";
import { useEffect, useRef, useState } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE,
          
          mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xf700f7,
  backgroundColor: 0x0
        },[vantaEffect])
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  return (
  <div className="home" style={{  position: 'relative' }} ref={vantaRef}>
    {/* <Animation />
   <div className="Abox">
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>

   </div> */}
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
