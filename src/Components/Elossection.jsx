import React from 'react'
import img1 from "../assets/Images/ellosimg1.webp";
import img2 from "../assets/Images/ellosimg2.webp";
import img3 from "../assets/Images/ellosimg3.webp";
import COmmonbtn from '../Commonbtn/COmmonbtn';
const mycard2info = [
    {
        img: img1,
        aos: 'fade-up'
    },
    {
        img: img2,
        aos: 'fade-up'
    },
    {
        img: img3,
        aos: 'fade-up'
    },
]
const Elossection = () => {
    const mycard2 = mycard2info.map((mycard2) =>
    (
        <div className=' w-full 576:w-1/2 md:w-1/3 px-2 992:px-3 mt-[15px] 576:mt-[24px]'>
            <div className='  max-w-[364px] max-h-[256px] w-full h-full relative overflow-auto rounded-[8px] cardhover duration-300 cursor-pointer mx-auto 576:mx-0' data-aos={mycard2.aos}>
                <img src={mycard2.img} alt="" className=' w-full h-full max-w-[364px] max-h-[256px]' />
                <div className=' absolute bg-[#000000B8] w-full h-full flex items-center justify-center left-0 bottom-0 cardlinear opacity-0 duration-300'>
                    <COmmonbtn text='Rcasinovip' />
                </div>
            </div>
        </div>
    ))
    return (
        <div className=' max-w-[1164px] mx-auto px-3 pt-[45px] 576:pt-[60px] md:pt-[90px] 992:pt-[150px]'>
            <p className=' font-Anton font-normal text-[36px] md:text-[48px] text-[#FFF] leading-[45px] 576:leading-[57.6px] text-center' data-aos="fade-up">Ellos eligieron apostar con nosotros </p>
            <div className=' flex flex-wrap flex-row -mx-3 mt-[5px] md:mt-[36px] justify-center'>
                {mycard2}
            </div>
            <p className='  font-inter font-medium text-[14px] 576:text-base text-[#FFF] opacity-[80%] leading-[normal] 576:leading-[25.6px] text-center mt-[20px] 576:mt-[38px]' data-aos="fade-up">Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego. <span className=' 992:block'>
                Ahora, la próxima apuesta está en tus manos.</span>
                <span className=' min-[700px]:block'> Elige ganar. Elige exclusive game.</span></p>
        </div>
    )
}

export default Elossection