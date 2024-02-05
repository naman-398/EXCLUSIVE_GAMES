import React from 'react'
import COmmonbtn from '../Commonbtn/COmmonbtn'
import Commonbtnn from '../Commonbtn/Commonbtnn'

const Lanzasection = () => {
    return (
        <div className=' pt-[35px] 576:pt-[60px] md:pt-[80px] 992:pt-[118px] pb-[2px]'>
        <div className=' max-w-[1140px] mx-auto bg-[url(../src/assets/Images//lanzaimg.webp)] flex flex-col items-center bg-100% bg-center py-[45px] 576:py-[75px] md:py-[104px] px-[20px] border-[.5px] border-[#FFFFFF80] rounded-[16px]' data-aos="fade-up">
        <p className=' font-Anton font-normal text-[26px] sm:text-[30px] md:text-[32px] text-[#FFF] text-center 576:text-start leading-[normal] 576:leading-[41px] ' data-aos="fade-up">Lanza tu propia plataforma en sólo 2 semanas</p>
        <div className=' pt-[10px] 450:pt-[20px] sm:pt-[40px]' data-aos="fade-up"><Commonbtnn name='Leer más'/></div>
        </div>
        </div>
    )
}

export default Lanzasection