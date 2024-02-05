import React,{useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Herosection from './Components/Herosection';
import Nuestrasection from './Components/Nuestrasection';
import Slotssection from './Components/Slotssection';
import JAcktopsection from './Components/JAcktopsection';
import Casinosection from './Components/Casinosection';
import Elegirnosection from './Components/Elegirnosection';
import Footersection from './Components/Footersection';
import elipse3s2 from "../src/assets/Images/s2elipse3.webp";
import s4elipse3 from "../src/assets/Images/s4elipse3.webp";
import s4elipse2 from "../src/assets/Images/s4elpise2.webp";
import s6elipse from "../src/assets/Images/s6elipse.webp";
import Loadersection from "./Components/Loadersection";
import Backtotop from "./Components/Backtotop";
function App() {
  useEffect(() => {
    AOS.init(
      {once: true,
      duration: 2000,}
    );
  }, [])
  return (
    <div >
      <Loadersection/>
      <Backtotop/>
      <Herosection/>
      <div className=' overflow-hidden relative mt-[-1px] mb-[-1px]'>
      <img src={elipse3s2} alt=""  className=' absolute right-[0%] top-[23%] z-[1] hidden 992:block'/>
      <Nuestrasection/>
      <Slotssection/></div>
      <div className=' overflow-hidden relative'>
      <img src={s4elipse2} alt="s4elipse" className=' absolute left-[41%] top-[13%] animate-pulse hidden 576:block' />
      <img src={s4elipse3} alt="s4elipse" className=' absolute right-[0%] bottom-[24%] animate-pulse hidden 576:block' />
      <img src={s6elipse} alt="s6elipse" className=' absolute bottom-[-21%] left-0 hidden 576:block' />
      <JAcktopsection/>
      <Casinosection/></div>
      <Elegirnosection/>
      <Footersection/>
    </div>
  );
}

export default App;
