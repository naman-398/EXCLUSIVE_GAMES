import React from 'react'
import jackpotimg from "../assets/Images/jackpotimg.webp";
import jackpotimg1 from "../assets/Images/jackpotimg1.webp";
import jackpotimg2 from "../assets/Images/jackpotimg2.webp";
import jackpotimg3 from "../assets/Images/jackpotimg3.webp";

import { Greentick } from '../Commonicon/Icon';
import COmmonbtn from '../Commonbtn/COmmonbtn';
const mycard1info = [
    { img: jackpotimg1,
    aos: 'fade-up' },
    { img: jackpotimg2,
        aos: 'fade-up' },
    { img: jackpotimg3,
        aos: 'fade-up' },
]
const JAcktopsection = () => {
    const mycard1 = mycard1info.map((mycard1) =>
    (
        <div className=' w-full 576:w-1/2 md:w-1/3 px-2 992:px-3 mt-[15px] 450:mt-[24px]'>{}
            <div className='  max-w-[270px] 450:max-w-[365px] max-h-[240px] 450:max-h-[265px] w-full h-full relative overflow-auto rounded-[8px] cardhover duration-300 cursor-pointer mx-auto 576:mx-0'  data-aos={mycard1.aos}>
                <img src={mycard1.img} alt="" className=' w-full h-full' />
                <div className=' absolute bg-[#000000B8] w-full h-full flex items-center justify-center left-0 bottom-0 cardlinear opacity-0 duration-300'>
                    <COmmonbtn text='Reproducir ahora' />
                </div>
            </div>
        </div>
    ))
    return (
        <div className='bg-[#00141B] bg-[url(../src/assets/Images/s4bg.webp)] bg-no-repeat bg-100% bg-center pt-[45px] 576:pt-[60px] md:pt-[92px] -mt-[2px] pb-[45px] 576:pb-[60px] md:pb-[320px]'>
            <div className=' max-w-[1164px] mx-auto px-3'>
                <div className=' flex flex-wrap flex-row -mx-3 items-center'>
                    <div className=' w-full md:w-1/2 px-3'>
                        <img src={jackpotimg} alt="" className=' max-w-[558px] max-h-[439px] w-full h-full  mx-auto' data-aos="fade-right"/>
                    </div>
                    <div className=' w-full md:w-1/2 px-3'>
                        <div className=' max-w-[543px] mx-auto'>
                            <p className=' font-Anton font-normal text-[30px] 992:text-[40px] lg:text-[42px] min-[1200px]:text-[48px] leading-[57.6px] text-[#FFFFFF]' data-aos="fade-left">Potenciando sus elecciones</p>
                            <p className=' font-inter font-medium text-base text-[#FFF] leading-[25.6px] mt-[5px] 992:mt-[16px] opacity-[80%]' data-aos="fade-left">Con Exclusive Game lo mejor está de tu lado.</p>
                            <div className=' flex flex-col gap-[6px] lg:gap-[12px] mt-[15px] 992:mt-[24px]  max-w-[412px]'>
                                <div className=' flex font-inter text-[14px] 992:text-base text-[#FFF] opacity-[80%] font-medium gap-[5px] 992:gap-[8px] leading-[20.6px] 992:leading-[25.6px]' data-aos="fade-left">
                                    <span><Greentick /></span>
                                    Tecnología HTML5
                                </div>
                                <div className=' flex font-inter text-[14px] 992:text-base text-[#FFF] opacity-[80%] font-medium gap-[5px] 992:gap-[8px] leading-[20.6px] 992:leading-[25.6px]' data-aos="fade-left">
                                    <span><Greentick /></span>
                                    Versión PC y móvil
                                </div>
                                <div className=' flex font-inter text-[14px] 992:text-base text-[#FFF] opacity-[80%] font-medium gap-[5px] 992:gap-[8px] leading-[20.6px] 992:leading-[25.6px]' data-aos="fade-left">
                                    <span><Greentick /></span>
                                    Control de RTP (controlás qué porcentaje pagar)
                                </div>
                                <div className=' flex font-inter text-[14px] 992:text-base text-[#FFF] opacity-[80%] font-medium gap-[5px] 992:gap-[8px] leading-[20.6px] 992:leading-[25.6px]' data-aos="fade-left">
                                    <span><Greentick /></span>
                                    Bonos editables, happy hours, Jackpots, códigos  promocionales.
                                </div>
                                <div className=' flex font-inter text-[14px] 992:text-base text-[#FFF] opacity-[80%] font-medium gap-[5px] 992:gap-[8px] leading-[20.6px] 992:leading-[25.6px]' data-aos="fade-left">
                                    <span><Greentick /></span>
                                    Aplicación para android y windows de regalo.
                                </div>
                            </div>
                            <p className='font-inter text-[13px] 992:text-[14px] min-[1200px]:text-base text-[#FFF] opacity-[80%] font-medium gap-[8px] leading-[20px] 992:leading-[25.6px] mt-[10px] 992:mt-[24px]' data-aos="fade-left">
                                Te reintegramos todo lo invertido en fichas en la moneda que elijas.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' bg-[url(../src/assets/Images/jackpot-bg-2.webp)] rounded-[16px]  max-w-[1043px] w-full py-[65px] 576:py-[96px]  px-[15px] h-full flex justify-center items-center bg-center bg-100%  mx-auto border-[0.5px] border-[#FFFFFF]  mt-[45px] 576:mt-[60px] md:mt-[90px] 992:mt-[150px]' >
                    <p className=' font-Anton font-normal text-[30px] 450:text-[36px] 576:text-[48px] leading-[normal] 450:leading-[57.6px] text-center text-[#FFF] max-w-[520px]' data-aos="fade-up">lanza tu propia plataforma en sólo 2 semanas</p>
                </div>
                <p className=' font-Anton font-normal text-[48px] leading-[57.6px] text-center text-[#FFF] mt-[45px] 576:mt-[60px] md:mt-[90px] 992:mt-[150px]' data-aos="fade-up">Juegos en vivo</p>
                <div className=' flex flex-wrap flex-row 576:mt-[36px] mt-2 justify-center'>
                    {mycard1}
                </div>
            </div>
        </div>
    )
}

export default JAcktopsection