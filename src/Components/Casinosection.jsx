import React from 'react'
import COmmonbtn from '../Commonbtn/COmmonbtn'
import casinoimg from "../assets/Images/casinoimg.webp";
import Commonbtnn from '../Commonbtn/Commonbtnn';
const Casinosection = () => {
    return (
        <div className=' bg-[#FFF] md:bg-[url(../src/assets/Images/s5-bg-img.webp)] bg-100% bg-center  mt-[45px] 576:mt-[60px] md:mt-[-224px] pb-[45px] 576:pb-[80px] md:pb-0 md:min-h-[1067px] 576:pt-[60px] md:pt-[304px] md:bg-[#00141B]'>
            <div className='  max-w-[1164px] mx-auto px-3'>
                <div className=' flex-wrap flex-row flex -mx-3 items-center'>
                <div className=' w-full md:w-1/2 px-3'>
                    <p className=' font-Anton font-normal text-[48px] leading-[57.6px] text-[#00141B] text-center md:text-start' data-aos="fade-right">Por qué elegirnos</p>
                    <p className=' font-inter max-w-[526px] font-medium text-[14px] 992:text-base text-[#00141B] leading-[normal] 576:leading-[20.6px] 992:leading-[25.6px] opacity-[80%] mt-[8px] 992:mt-[16px] md:mx-0 mx-auto md:text-start text-center' data-aos="fade-right">Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>
                    <div className=' pt-[10px] 576:pt-[24px] text-center md:text-start' data-aos="fade-right"><Commonbtnn  name='Aprende más'/></div>
                </div>
                <div className=" w-full md:w-1/2 px-3 pt-[30px] md:pt-0">
<img src={casinoimg} alt="casino" className=' max-w-[558px] max-h-[439px] w-full h-full mx-auto md:mx-0'  data-aos="fade-left"/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Casinosection