import React from 'react'
import s2_img1 from "../assets/Images/s2img1.webp";
import s2_img2 from "../assets/Images/s2-img2.webp";
import elipse1s2 from "../assets/Images/s2elipse1.webp";
import elipse2s2 from "../assets/Images/s2elipse2.webp";
import elipse3s2 from "../assets/Images/s2elipse3.webp";
const Nuestrasection = () => {
    return (
        <div className=' bg-[#00141B] h-full pb-[50px] 576:pb-[80px] md:pb-[100px] mt-[-2px] pt-[45px] 576:pt-[77px] relative z-[0]'>
            <img src={elipse1s2} alt="" className=' absolute left-0 top-[-25%] z-0 animate-pulse hidden 576:block'  />
            <img src={elipse2s2} alt="" className=' absolute left-[35%] top-[31%] z-0 animate-pulse hidden 576:block' />
            <div className=' max-w-[1164px] mx-auto px-3'>
                <div className=' flex flex-wrap flex-row -mx-3 relative z-[5]'>
                    <div className=' w-full  md:w-1/2 px-3'>
                        <img src={s2_img1} alt="" className='  max-w-[340px] 576:max-w-[538px] max-h-[320px] 576:max-h-[460px] min-[992px]:max-h-[536px] w-full h-full mx-auto md:mx-0'    data-aos="fade-right"/>
                        <div className='  max-w-[448px] mt-[15px] 576:mt-[60px] mx-auto md:mx-0' > 
                        <p className=' font-Anton font-normal text-[48px] text-[#FFFFFF] leading-[57.6px] text-center  md:text-start'   data-aos="fade-right">Nuestra Visión</p>
                        <p className=' font-inter text-[#FFF] text-base opacity-[80%] leading-[normal] 576:leading-[25.6px] font-medium mt-[5px] 576:mt-[16px] text-center md:text-start'  data-aos="fade-right">Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                        <p className=' text-[#7AF57A]  font-inter mt-[10px] 576:mt-[24px] text-base opacity-[80%] leading-[25.6px] font-medium text-center md:text-start'   data-aos="fade-right">Aprende más &#10230;</p>
                        </div>
                    </div>
                    <div className='  w-full md:w-1/2 px-3 relative z-[5]'>
                    <img src={s2_img2} alt="" className=' max-w-[340px] 576:max-w-[538px] max-h-[320px] 576:max-h-[460px] min-[992]:max-h-[536px] w-full h-full  mt-[30px] 576:mt-[60px] block md:hidden mx-auto md:mx-0'    data-aos="fade-left"/>
                        <div className='  max-w-[448px] mt-[15px] 576:mt-[60px] md:mt-0 mx-auto md:mx-0' > 
                        <p className=' font-Anton font-normal text-[48px] text-[#FFFFFF] leading-[57.6px] text-center md:text-start'   data-aos="fade-left">Nuestra Visión</p>
                        <p className=' font-inter text-[#FFF] text-base opacity-[80%] leading-[normal] 576:leading-[25.6px] font-medium mt-[5px] 576:mt-[16px] text-center md:text-start'   data-aos="fade-left">Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                        <p className=' text-[#7AF57A]  font-inter mt-[10px] 576:mt-[24px] text-base opacity-[80%] leading-[25.6px] font-medium  text-center md:text-start'   data-aos="fade-left">Aprende más &#10230;</p>
                        </div>
                        <img src={s2_img2} alt="" className='  max-w-[340px] 576:max-w-[538px] max-h-[320px] 576:max-h-[460px] min-[992px]:max-h-[536px] w-full h-full  mt-[60px] hidden md:block'    data-aos="fade-left"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nuestrasection