import { useEffect } from "react";
import './App.css';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Details from "./component/Details";
import About from './component/About';
import Gallery from './component/Gallery';
import {Upcoming} from './component/Upcoming';
import Map from './component/Map';
import Footer from "./component/Footer";
import Team from "./component/TeamMembers"


function App({ Component, pageProps }) {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByClassName("home")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  return(

    <div className="App">
      <Navbar/>

      <Home {...pageProps}/>
      
      <Details/>
      <About/>
      <Gallery/>
      <Upcoming/>
      <Team/>
      <Map/>
      <Footer/>
      
   </div>
  );
   
   
}

export default App;
