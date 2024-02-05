import React from 'react'
import footerlogo from "../assets/Images/pagelogo.webp";
import { Faceicon, Inicon, Instaicon, Msgicon, Telicon } from '../Commonicon/Icon';
import footerelipse from "../assets/Images/footerelipse.webp";
import footerelipse2 from "../assets/Images/footerelipseright.webp";
const Footersection = () => {
    return (
        <div className='bg-[#00141B] pt-[45px] 576:pt-[60px] md:pt-[90px] 992:pt-[150px] mt-[-2px] overflow-hidden relative'>
            <img src={footerelipse} alt="footerelipse" className=' absolute left-0 bottom-[-1%] hidden 576:block animate-pulse' />
            <img src={footerelipse2} alt="footerelipse" className=' absolute right-0 bottom-[0%] hidden 576:block animate-pulse' />
            <div className=' bg-[#000000]'>
                <div className=' max-w-[1178px] mx-auto px-3'>
                    <div className=' flex flex-row flex-wrap -mx-3 pt-[40px] 576:pt-[64px]'>
                        <div className=' w-full 992:w-5/12 px-2'>
                            <img src={footerlogo} alt="" className=' cursor-pointer max-w-[210px] max-h-[40px]' />
                            <p className=' font-inter font-medium text-[14px] 576:text-base leading-[normal] 576:leading-[25.6px] text-[#FFF] opacity-[80%] mt-[10px] 576:mt-[16px]'>En Exclusive Games somos un equipo <span className=' 450:block'> apasionado de personas dedicadas al desarrollo </span> de multiplataformas para juegos de azar</p>
                            <div className=' flex items-center mt-[10px] 576:mt-[24px] gap-[12px]'>
                                <a href="https://www.instagram.com/" className='  cursor-pointer hover:translate-y-[-5px] duration-300'><Instaicon /></a>
                                <a href="https://www.facebook.com/" className='  cursor-pointer hover:translate-y-[-5px] duration-300'><Faceicon /></a>
                                <a href="https://www.linkedin.com/feed/" className=' cursor-pointer hover:translate-y-[-5px] duration-300'><Inicon /></a>
                            </div>
                        </div>
                        <div className=' w-full 992:w-7/12 px-3 mt-[20px] 992:mt-0'>
                            <div className=' flex flex-row flex-wrap -mx-3'>
                                <div className=' w-1/2 576:w-1/4 px-3'>
                                    <ul className=' flex flex-col gap-[2px] 576:gap-[12px]'>
                                        <li className=' pb-1'><a href="#" className=' font-inter font-bold text-[14px] min-[1200px]:text-base leading-[normal] 576:leading-[25.6px] text-[#FFF]'>Menú principal</a></li>
                                        <li ><a href="#" className=' font-inter font-medium opacity-[80%] text-[14px] min-[1200px]:text-base leading-[normal] 576:leading-[25.6px] text-[#FFF] relative after:absolute after:w-0 after:duration-300 after:left-0 after:bottom-[-3px] after:bg-[#FFF] after:h-[2px] hover:after:w-full hover:after:left-0'>Hogar</a></li>
                                        <li ><a href="#" className=' font-inter font-medium opacity-[80%] text-[14px] min-[1200px]:text-base leading-[normal] 576:leading-[25.6px] text-[#FFF] relative after:absolute after:w-0 after:duration-300 after:left-0 after:bottom-[-3px] after:bg-[#FFF] after:h-[2px] hover:after:w-full hover:after:left-0'>Misión</a></li>
                                        <li ><a href="#" className=' font-inter font-medium opacity-[80%] text-[14px] min-[1200px]:text-base leading-[normal] 576:leading-[25.6px] text-[#FFF] relative after:absolute after:w-0 after:duration-300 after:left-0 after:bottom-[-3px] after:bg-[#FFF] after:h-[2px] hover:after:w-full hover:after:left-0'>Tragamonedas</a></li>
                                        <li ><a href="#" className=' font-inter font-medium opacity-[80%] text-[14px] min-[1200px]:text-base leading-[normal] 576:leading-[25.6px] text-[#FFF] relative after:absolute after:w-0 after:duration-300 after:left-0 after:bottom-[-3px] after:bg-[#FFF] after:h-[2px] hover:after:w-full hover:after:left-0'>Por qué elegirnos</a></li>
                                        <li ><a href="#" className=' font-inter font-medium opacity-[80%] text-[14px] min-[1200px]:text-base leading-[normal] 576:leading-[25.6px] text-[#FFF] relative after:absolute after:w-0 after:duration-300 after:left-0 after:bottom-[-3px] after:bg-[#FFF] after:h-[2px] hover:after:w-full hover:after:left-0'>Ofertas</a></li>
                                    </ul>
                                </div>
                                <div className=' w-1/2 576:w-1/3 px-3'>
                                    <ul className=' flex flex-col gap-[2px] 576:gap-[12px]'>
                                        <li className=' pb-1'><a href="#" className=' font-inter font-bold text-[14px] min-[1200px]:text-base leading-[normal] 576:leading-[25.6px] text-[#FFF]'>Atención al cliente</a></li>
                                        <li ><a href="#" className=' font-inter font-medium opacity-[80%] text-[14px] min-[1200px]:text-base leading-[normal] 576:leading-[25.6px] text-[#FFF] relative after:absolute after:w-0 after:duration-300 after:left-0 after:bottom-[-3px] after:bg-[#FFF] after:h-[2px] hover:after:w-full hover:after:left-0'>¿Necesitas ayuda?</a></li>
                                        <li ><a href="#" className=' font-inter font-medium opacity-[80%] text-[14px] min-[1200px]:text-base leading-[normal] 576:leading-[25.6px] text-[#FFF] relative after:absolute after:w-0 after:duration-300 after:left-0 after:bottom-[-3px] after:bg-[#FFF] after:h-[2px] hover:after:w-full hover:after:left-0'>política de privacidad</a></li>
                                        <li ><a href="#" className=' font-inter font-medium opacity-[80%] text-[14px] min-[1200px]:text-base leading-[normal] 576:leading-[25.6px] text-[#FFF] relative after:absolute after:w-0 after:duration-300 after:left-0 after:bottom-[-3px] after:bg-[#FFF] after:h-[2px] hover:after:w-full hover:after:left-0'>Términos de servicios</a></li>
                                    </ul>
                                </div>
                                <div className=' w-1/2 576:w-5/12 px-3 mt-[10px] 576:mt-0'>
                                    <ul className=' flex flex-col gap-[2px] 576:gap-[12px]'>
                                        <li className=' pb-1'><a href="#" className=' font-inter font-bold text-[14px] min-[1200px]:text-base leading-[normal] 576:leading-[25.6px] text-[#FFF]'>Ponerse en contacto</a></li>
                                        <li className=' flex items-center gap-[3px] '> <span> <Msgicon/></span> <a href="mailto:namanjyani95200@gmail.com" className=' font-inter font-medium opacity-[80%] text-[14px] min-[1200px]:text-base leading-[normal] 576:leading-[25.6px] text-[#FFF] relative after:absolute after:w-0 after:duration-300 after:left-0 after:bottom-[-3px] after:bg-[#FFF] after:h-[2px] hover:after:w-full hover:after:left-0'>juegosexclusivos@gmail.com</a></li>
                                        <li className=' flex items-center gap-[3px]'> <Telicon/> <a href="tel:+917404215521" className=' font-inter font-medium opacity-[80%] text-[14px] min-[1200px]:text-base leading-[normal] 576:leading-[25.6px] text-[#FFF] relative after:absolute after:w-0 after:duration-300 after:left-0 after:bottom-[-3px] after:bg-[#FFF] after:h-[2px] hover:after:w-full hover:after:left-0'>(101)342-7873</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr  className=' border-[#FFFFFF] border-[1px] w-full mt-[20px] 576:mt-[40px] mb-[10px] 576:mb-[20px] opacity-[10%]'/>
                <p className=' font-inter font-medium text-[12px] 576:text-base leading-[normal] 576:leading-[25.6px] text-[#FFF] opacity-[50%] text-center pb-[10px]  576:pb-[20px]'>© Juegos exclusivos - Todos los derechos reservados 2023</p>
            </div>
        </div>
    )
}

export default Footersection