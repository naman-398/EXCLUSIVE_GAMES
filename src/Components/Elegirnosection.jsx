import React from 'react'
import COmmonbtn from '../Commonbtn/COmmonbtn'
import card2 from "../assets/Images/card1.webp";
import card1 from "../assets/Images/card2.webp";
import dice from "../assets/Images/dice2.webp";
import dice2 from "../assets/Images/dice.webp";
import s6_img from "../assets/Images/s6img1.webp";
import silver from "../assets/Images/silver.webp";
import platinum from "../assets/Images/platinum.webp";
import { Greenbulb, Greenbulb2, Greenbulb3, Greentick } from '../Commonicon/Icon';
import Elossection from './Elossection';
import Accordiansection from './Accordiansection';
import Lanzasection from './Lanzasection';
import Commonbtnn from '../Commonbtn/Commonbtnn';
import s6elipse from "../assets/Images/s6elipse.webp";
import s6elipse2 from "../assets/Images/s6elipse2.webp";
import s6elipse3 from "../assets/Images/s6elipse3.webp";
import s6elipse4 from "../assets/Images/s6elipse4.webp";
import s6elipse5 from "../assets/Images/s6elipse5.webp";
import silverelipse from "../assets/Images/silverelipse.webp";
import platinumelipse from "../assets/Images/platinumelipse.webp";
const Elegirnosection = () => {
    return (
        <div className=' bg-[#00141B]  mt-[-1px] overflow-hidden relative'>
            <img src={s6elipse} alt="s6elipse" className=' absolute top-[-13%] left-0 hidden 576:block' />
            <img src={s6elipse2} alt="s6elipse" className=' absolute top-[-0%] right-0 hidden 576:block animate-pulse' />
            <img src={s6elipse3} alt="s6elipse" className=' absolute top-[35%] left-0 hidden 576:block animate-pulse' />
            <img src={s6elipse4} alt="s6elipse" className=' absolute top-[50%]  right-0 hidden 576:block animate-pulse' />
            <img src={s6elipse5} alt="s6elipse" className=' absolute bottom-[10%]  left-0 hidden 576:block animate-pulse' />
            <div className=' max-w-[1164px] mx-auto px-3 pt-[100px] relative z-0'>
                <div className=' flex-wrap flex-row flex -mx-3'>
                    <div className=" w-full sm:w-1/2 px-3">
                        <img src={s6_img} alt="s6_img" className=' max-w-[558px] max-h-[514px] h-full w-full mx-auto'  data-aos="fade-right"/>
                    </div>
                    <div className='  w-full sm:w-1/2 px-3 mt-[20px] sm:mt-0'>
                        <div className=' max-w-[537px] mx-auto'>
                            <p className=' font-Anton font-normal text-[26px] md:text-[32px] 992:text-[48px] text-[#FFF] leading-[57.6px] mb-[15px] md:mb-[20px] 992:mb-[60px] text-center sm:text-start'  data-aos="fade-left">Más razones para elegirnos </p>
                            <div className='border-gradient py-[16px] md:py-[24px] max-w-[374px] w-full justify-center flex  gap-[37px] mx-auto sm:mx-0 !rounded-[16px] green-card' data-aos="fade-left">
                                <div className=' w-[68px] h-[68px] rounded-full flex justify-center items-center bg-[#103029]'>
                                    <Greenbulb />
                                </div>
                                <p>
                                    <p className=' font-Anton text-[32px] leading-[41.6px] font-normal text-[#FFF]'>200</p>
                                    <p className=' font-inter text-[16px] font-medium leading-[25.6px] text-[#FFF]'>Páginas creadas</p>
                                </p>
                            </div>
                            <div className='border-gradient py-[16px] md:py-[24px] max-w-[374px] w-full justify-center flex  gap-[37px] mt-[10px] md:mt-[15px] 992:mt-[24px] mx-auto sm:mx-0  green-card' data-aos="fade-left">
                                <div className=' w-[68px] h-[68px] rounded-full flex justify-center items-center bg-[#103029]'>
                                    <Greenbulb2 />
                                </div>
                                <p>
                                    <p className=' font-Anton text-[32px] leading-[41.6px] font-normal text-[#FFF]'>98% </p>
                                    <p className=' font-inter text-[16px] font-medium leading-[25.6px] text-[#FFF]'>Clientes Satisfechas</p>
                                </p>
                            </div>
                            <div className='border-gradient py-[16px] md:py-[24px] max-w-[374px] w-full justify-center flex  gap-[37px] mt-[10px] md:mt-[15px] 992:mt-[24px]  mx-auto sm:mx-0  green-card' data-aos="fade-left">
                                <div className=' w-[68px] h-[68px] rounded-full flex justify-center items-center bg-[#103029]'>
                                    <Greenbulb3 />
                                </div>
                                <p>
                                    <p className=' font-Anton text-[32px] leading-[41.6px] font-normal text-[#FFF]'>200</p>
                                    <p className=' font-inter text-[16px] font-medium leading-[25.6px] text-[#FFF]'>Divisas Disponibles</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className=' font-Anton font-normal text-[48px] text-[#FFF] leading-[57.6px] mt-[45px] 576:mt-[60px] md:mt-[90px] 992:mt-[150px] text-center' data-aos="fade-up">Nuestras ofertas </p>
                <p className='  font-inter font-medium text-[14px] 576:text-base text-[#FFF] opacity-[80%] leading-[normal] 576:leading-[25.6px] text-center mt-[5px] 576:mt-[16px]' data-aos="fade-up">Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>
                <div className=' max-w-[1140px] relative overflow-hidden mx-auto rounded-[16px] border-[0.5px] border-[#FFFFFF80] p-[20px] md:p-[57px_15px_32px_15px] mt-[20px] 576:mt-[40px] md:mt-[60px] 992:p-[57px_40px_32px_11px] bg-[#062023] w-full h-full'>
                    <img src={silverelipse} alt="silverelipse" className=' absolute left-[-4%] top-[-6%] z-0' />
                    <div className=' flex flex-wrap flex-row -mx-3'>
                        <div className=' w-full md:w-1/2  992:w-7/12  px-3'>
                            <img src={silver} alt="" className=' max-w-[663px] max-h-[471px] h-full w-full mx-auto relative z-[1]'  data-aos="fade-right"/>
                        </div>
                        <div className='  w-full md:w-1/2 992:w-5/12 px-3'>
                            <p className=' font-Anton font-normal text-[32px] text-[#FFF] leading-[41.6px]' data-aos="fade-left">Silver </p>
                            <p className='  font-inter font-medium text-[14px] 576:text-base text-[#FFF] opacity-[80%] leading-[normal] 576:leading-[25.6px] mt-[5px] 576:mt-[16px]' data-aos="fade-left">Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                            <p className=' font-Anton font-normal text-[35px] 576:text-[48px] text-[#FFF] leading-[normal] 576:leading-[57.6px] mt-[10px] 576:mt-[25px] md:mt-[32px]' data-aos="fade-left">$5000 </p>
                            <div className=' flex flex-col gap-[5px] 576:gap-[12px] mt-[6px] 576:mt-[16px]'>
                                <div className=' flex gap-[1px]' data-aos="fade-left">
                                    <span><Greentick />
                                    </span>
                                    <p className='  font-inter font-medium text-[14px] md:text-base text-[#FFF] opacity-[80%] leading-[normal] 576:leading-[25.6px] '>
                                        Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales
                                    </p>
                                </div>
                                <div className=' flex gap-[1px]' data-aos="fade-left">
                                    <span><Greentick />
                                    </span>
                                    <p className='  font-inter font-medium text-[14px] md:text-base text-[#FFF] opacity-[80%] leading-[normal] 576:leading-[25.6px] '>
                                        Control de RTP (controlás qué porcentaje pagar)
                                    </p>
                                </div>
                                <div className=' flex gap-[1px]' data-aos="fade-left">
                                    <span><Greentick />
                                    </span>
                                    <p className='  font-inter font-medium text-[14px] md:text-base text-[#FFF] opacity-[80%] leading-[normal] 576:leading-[25.6px] '>
                                        Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo
                                    </p>
                                </div>
                                <div className=' flex gap-[1px]' data-aos="fade-left">
                                    <span><Greentick />
                                    </span>
                                    <p className='  font-inter font-medium text-[14px] md:text-base text-[#FFF] opacity-[80%] leading-[normal] 576:leading-[25.6px] '>
                                        Aplicación para Android y Windows de regalo.
                                    </p>
                                </div>
                                <div className=' flex gap-[1px]' data-aos="fade-left">
                                    <span><Greentick />
                                    </span>
                                    <p className='  font-inter font-medium text-[14px] md:text-base text-[#FFF] opacity-[80%] leading-[normal] 576:leading-[25.6px] '>
                                        Tiempo de creación 2 a 3 semanas
                                    </p>
                                </div>
                            </div>
                            <div className=' pt-[15px] 576:pt-[40px]' data-aos="fade-left"><COmmonbtn text='Comprar ahora' /></div>
                        </div>
                    </div>
                </div>
                <div className=' max-w-[1140px] mx-auto rounded-[16px] border-[0.5px] border-[#FFFFFF80] flex flex-col  z-0 items-center py-[20px] 576:py-[45px] px-[20px] bg-[url(../src/assets/Images/luxury.webp)] mt-[15px] 576:mt-[35px] md:mt-[64px] bg-100% bg-center bg-no-repeat w-full h-full relative overflow-hidden'>
                    <img src={dice} alt="dice" className=' absolute left-[1%] md:left-[17%] top-[3%] md:top-[17%] hidden 576:block' />
                    <img src={dice2} alt="dice" className=' absolute right-[1%] md:right-[17%] bottom-[3%] md:bottom-[17%] hidden 576:block' />
                    <img src={card1} alt="dice" className=' absolute left-[5%] 992:left-[13%] bottom-[4%] md:bottom-[16%] z-[-1] md:max-w-[179px] md:max-h-[186px] max-w-[100px] max-h-[80px]  hidden 576:block' />
                    <img src={card2} alt="dice" className=' absolute right-[5%] 992:right-[13%] top-[4%] md:top-[16%] z-[-1] md:max-w-[149px] md:max-h-[150px] max-w-[100px] max-h-[80px]  hidden 576:block' />
                    <p className=' font-Anton font-normal text-[32px] text-[#FFF] leading-[41.6px] text-center' data-aos="fade-left">Luxury </p>
                    <p className='  font-inter font-medium text-[14px] 576:text-base text-[#FFF] opacity-[80%] leading-[normal] 576:leading-[25.6px] max-w-[391px] text-center mx-auto mt-[5px] 576:mt-[16px]' data-aos="fade-right">lleva tu experiencia de juego al siguiente nivel. Con todas las características de la versión Silver y la potencia adicional de la tecnología React .</p>
                    <p className=' font-Anton font-normal text-[35px] 576:text-[48px] text-[#FFF] leading-[57.6px] mt-[10px] 576:mt-[25px] md:mt-[32px]' data-aos="fade-left">$9000 </p>
                    <div className=' flex flex-col 576:gap-[12px] gap-[5px] mt-[5px] 576:mt-[16px] max-w-[416px]'>
                        <div className=' flex gap-[1px]' data-aos="fade-right">
                            <span><Greentick />
                            </span>
                            <p className='  font-inter font-medium text-[14px] 576:text-base text-[#FFF] opacity-[80%] leading-[normal] 576:leading-[25.6px]  text-center'>
                                Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales
                            </p>
                        </div>
                        <div className=' flex gap-[1px] w-full' data-aos="fade-left">
                            <span><Greentick />
                            </span>
                            <p className='  font-inter font-medium text-[14px] 576:text-base text-[#FFF] opacity-[80%] leading-[normal] 576:leading-[25.6px] text-center  mx-auto'>
                                Control de RTP (controlás qué porcentaje pagar)
                            </p>
                        </div>
                        <div className=' flex gap-[1px] w-full' data-aos="fade-right">
                            <span><Greentick />
                            </span>
                            <p className='  font-inter font-medium text-[14px] 576:text-base text-[#FFF] opacity-[80%] leading-[normal] 576:leading-[25.6px] text-center mx-auto '>
                                Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo
                            </p>
                        </div>
                        <div className=' flex gap-[1px] w-full' data-aos="fade-left">
                            <span><Greentick />
                            </span>
                            <p className='  font-inter font-medium text-[14px] 576:text-base text-[#FFF] opacity-[80%] leading-[normal] 576:leading-[25.6px]  text-center mx-auto'>
                                Aplicación para Android y Windows de regalo.
                            </p>
                        </div>
                        <div className=' flex gap-[1px] w-full ' data-aos="fade-right">
                            <span><Greentick />
                            </span>
                            <p className='  font-inter font-medium text-[14px] 576:text-base text-[#FFF] opacity-[80%] leading-[normal] 576:leading-[25.6px]  text-center mx-auto'>
                                Tiempo de creación 2 a 3 semanas
                            </p>
                        </div>
                    </div>
                    <div className=' pt-[15px] 576:pt-[40px]' data-aos="fade-left"><Commonbtnn name='Comprar ahora' /></div>
                </div>
                <div className=' max-w-[1140px] overflow-hidden relative mx-auto rounded-[16px] border-[0.5px] border-[#FFFFFF80] p-[20px] md:p-[78px_25px] 992:!p-[78px_40px_78px_50px]  mt-[15px] 576:mt-[35px] md:mt-[64px] bg-[#062023]'>
                    <img src={platinumelipse} alt="platinumelipse" className=' absolute right-[-2%] top-[-1%]' />
                    <div className=' flex flex-wrap md:flex-row -mx-3 items-center justify-center  flex-col-reverse '>
                        <div className='  w-full  md:w-5/12 px-3 pt-1 576:pt-[20px] md:pt-0'>
                            <p className=' font-Anton font-normal text-[32px] text-[#FFF] leading-[normal] 576:leading-[41.6px]' data-aos="fade-right">Platinum </p>
                            <p className='  font-inter font-medium text-[14px] 576:text-base text-[#FFF] opacity-[80%] leading-[normal] 576:leading-[25.6px]  mt-[5px] 576:mt-[16px] max-w-[365px]' data-aos="fade-right">Diseño totalmente personalizado. Contáctanos para un presupuesto.</p>
                            <p className=' font-Anton font-normal text-[35px] 576:text-[40px] 992:text-[48px] text-[#FFF] leading-[normal] 576:leading-[57.6px] mt-[10px] 576:mt-[20px] 992:mt-[32px]' data-aos="fade-right">Consultar precio </p>
                            <div className=' flex flex-col gap-[12px] mt-[5px] 576:mt-[16px]'>
                                <div className=' flex gap-[8px]' data-aos="fade-right">
                                    <span><Greentick />
                                    </span>
                                    <p className='  font-inter font-medium text-base text-[#FFF] opacity-[80%] leading-[25.6px] '>
                                        Personalizable
                                    </p>
                                </div>
                            </div>
                            <div className=' pt-[15px] 576:pt-[40px]' data-aos="fade-right"><COmmonbtn text='Comprar ahora' /></div>
                        </div>
                        <div className=' w-full md:w-7/12  px-3'>
                            <img src={platinum} alt="" className=' relative z-0 max-w-[602px] max-h-[418px] h-full w-full mx-auto'  data-aos="fade-left"/>
                        </div>
                    </div>
                </div>
                <Elossection />
                <div className=' relative z-0'>  <Accordiansection /></div>
                <Lanzasection />
            </div>
        </div>
    )
}

export default Elegirnosection