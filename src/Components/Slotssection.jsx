import React from 'react'
import { Bulbicon, Bulbicon1, Bulbicon2 } from '../Commonicon/Icon'
import s3_img1 from "../assets/Images/s3img1.webp";
import s3_img2 from "../assets/Images/s3img6.webp";
import s3_img3 from "../assets/Images/s3img2.webp";
import s3_img4 from "../assets/Images/s3img3.webp";
import s3_img5 from "../assets/Images/s3img4.webp";
import s3_img6 from "../assets/Images/s3img5.webp";
import COmmonbtn from '../Commonbtn/COmmonbtn';
import Commonbtnn from '../Commonbtn/Commonbtnn';
import s4elipse from "../assets/Images/s4elipse.webp";
const mycardinfo = [
    {
        aos: "fade-right",
        img: s3_img1
    },
    {
        aos: "fade-right",
        img: s3_img2
    },
    {
        aos: "fade-right",
        img: s3_img3
    },
    {
        aos: "fade-left",
        img: s3_img4
    },
    {
        aos: "fade-left",
        img: s3_img5
    },
    {
        aos: "fade-left",
        img: s3_img6
    },

]
const Slotssection = () => {
    const mycard = mycardinfo.map((mycard) => (
        <div className=' w-1/2 md:w-1/3 px-2 992:px-3 mt-[15px] 450:mt-[24px]'>
        <div className='  max-w-[365px] max-h-[265px] w-full h-full relative overflow-auto rounded-[8px] cardhover duration-300 cursor-pointer'   data-aos={mycard.aos}>
            <img src={mycard.img} alt=""/>
            <div className=' absolute bg-[#000000B8] w-full h-full flex items-center justify-center left-0 bottom-0 cardlinear opacity-0 duration-300'>
                <COmmonbtn text='Jugar'/>
            </div>
        </div>
    </div>
    ))
    return (
        <div className=' bg-[#FFF] relative z-[0] md:bg-[url(../src/assets/Images/s3bgimg.webp)] md:bg-[#00141B] bg-100% bg-center py-[50px] 576:py-[80px] md:py-[243px] mt-[-2px] overflow-hidden'>
            <img src={s4elipse} alt="s4elipse" className=' absolute left-0 bottom-[-1.9%] max-w-[484px] max-h-[484px] w-full h-full' />
            <div className=' max-w-[1164px] mx-auto px-3'>
                <p className=' font-Anton font-normal text-center text-[28px] 450:text-[36px] 576:text-[48px] leading-[normal] 450:leading-[57.6px] text-[#00141B]'   data-aos="fade-up">Nuestros Atributos de Marca</p>
                <div className=' flex flex-wrap flex-row justify-center md:justify-start -mx-3 576:mt-[40px] relative z-1'>
                <svg className=' absolute hidden md:block left-[25%] 900:left-[22%] lg:left-[19%] top-[10%] w-[150px] 900:w-[200px] lg:w-[276px]'   width="276" height="44" viewBox="0 0 276 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M275.291 36.9364C275.819 36.7757 276.117 36.2171 275.957 35.6887L273.338 27.078C273.178 26.5496 272.619 26.2516 272.091 26.4122C271.562 26.5729 271.264 27.1315 271.425 27.6599L273.752 35.3139L266.098 37.6414C265.57 37.8021 265.272 38.3607 265.433 38.8891C265.593 39.4175 266.152 39.7156 266.68 39.5549L275.291 36.9364ZM2.17594 43.7448C3.11142 42.8867 4.09957 42.0256 5.13927 41.1631L3.86237 39.6238C2.79849 40.5063 1.78525 41.3892 0.824057 42.2709L2.17594 43.7448ZM11.4399 36.3688C13.5202 34.9086 15.7413 33.4554 18.0972 32.0177L17.0554 30.3105C14.6651 31.7691 12.4081 33.2457 10.2909 34.7318L11.4399 36.3688ZM25.0244 28.0493C27.2885 26.8302 29.6501 25.6294 32.1049 24.4526L31.2404 22.6491C28.7582 23.839 26.3687 25.054 24.0762 26.2884L25.0244 28.0493ZM39.3572 21.1658C41.7474 20.1421 44.2114 19.1428 46.7461 18.1723L46.031 16.3046C43.4724 17.2842 40.9843 18.2932 38.5697 19.3274L39.3572 21.1658ZM54.2467 15.4581C56.7208 14.6131 59.2529 13.7965 61.8408 13.0117L61.2603 11.0977C58.6505 11.8892 56.0964 12.7129 53.6003 13.5654L54.2467 15.4581ZM69.514 10.824C72.048 10.1466 74.6292 9.50033 77.2553 8.888L76.8012 6.94025C74.1542 7.55744 71.5523 8.20893 68.9975 8.89187L69.514 10.824ZM85.0552 7.19808C87.6336 6.68136 90.251 6.19786 92.9054 5.75003L92.5727 3.7779C89.8981 4.22914 87.2606 4.71634 84.6622 5.23707L85.0552 7.19808ZM100.799 4.54069C103.41 4.1807 106.054 3.85566 108.728 3.56771L108.514 1.57921C105.82 1.86928 103.156 2.19674 100.526 2.55943L100.799 4.54069ZM116.688 2.82942C119.314 2.62473 121.967 2.45622 124.646 2.32581L124.549 0.328178C121.85 0.459537 119.178 0.629272 116.532 0.835467L116.688 2.82942ZM132.614 2.05359C135.251 2.00166 137.911 1.98708 140.593 2.01157L140.611 0.0116519C137.91 -0.0130173 135.231 0.00166827 132.575 0.0539758L132.614 2.05359ZM148.576 2.19927C151.219 2.29936 153.881 2.43786 156.56 2.61633L156.693 0.620757C153.994 0.441001 151.314 0.301511 148.652 0.200701L148.576 2.19927ZM164.517 3.26041C167.142 3.51064 169.784 3.79974 172.44 4.12914L172.686 2.14434C170.011 1.8126 167.351 1.52145 164.707 1.26944L164.517 3.26041ZM180.346 5.22353C182.961 5.62338 185.59 6.06284 188.23 6.54322L188.588 4.57551C185.929 4.09175 183.282 3.64919 180.648 3.2465L180.346 5.22353ZM196.067 8.08297C198.648 8.62777 201.239 9.21223 203.84 9.83752L204.307 7.89294C201.688 7.26327 199.079 6.67473 196.48 6.12609L196.067 8.08297ZM211.577 11.812C214.135 12.5027 216.701 13.2336 219.275 14.0058L219.85 12.0901C217.258 11.3126 214.674 10.5767 212.098 9.88111L211.577 11.812ZM226.871 16.3981C229.379 17.2257 231.893 18.0931 234.413 19.0012L235.091 17.1197C232.554 16.2054 230.023 15.3321 227.498 14.4988L226.871 16.3981ZM241.906 21.8168C244.363 22.7778 246.824 23.7781 249.289 24.8188L250.067 22.9763C247.586 21.9287 245.108 20.9217 242.635 19.9542L241.906 21.8168ZM256.597 28.0181C259.011 29.1132 261.429 30.2476 263.849 31.4222L264.723 29.623C262.287 28.4407 259.853 27.2989 257.423 26.1966L256.597 28.0181ZM270.966 34.9898C272.154 35.6039 273.341 36.2279 274.529 36.8619L275.471 35.0974C274.275 34.4594 273.08 33.8315 271.885 33.2134L270.966 34.9898Z" fill="url(#paint0_linear_81_27605)"/>
<defs>
<linearGradient id="paint0_linear_81_27605" x1="351.176" y1="40.8933" x2="329.027" y2="-67.7471" gradientUnits="userSpaceOnUse">
<stop stop-color="#51C8EF"/>
<stop offset="1" stop-color="#7AF57A"/>
</linearGradient>
</defs>
</svg>
<svg className=' absolute hidden md:block  top-[39%] right-[25%] 900:right-[22%] lg:right-[19%] w-[150px] 900:w-[200px] lg:w-[276px]' width="276" height="44" viewBox="0 0 276 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M274.791 7.07142C275.319 7.23211 275.617 7.79071 275.457 8.31911L272.838 16.9298C272.678 17.4582 272.119 17.7563 271.591 17.5956C271.062 17.4349 270.764 16.8763 270.925 16.3479L273.252 8.69396L265.598 6.36642C265.07 6.20574 264.772 5.64714 264.933 5.11874C265.093 4.59035 265.652 4.29226 266.18 4.45294L274.791 7.07142ZM1.67594 0.263046C2.61142 1.12107 3.59957 1.98223 4.63927 2.84468L3.36237 4.384C2.29849 3.5015 1.28525 2.61857 0.324057 1.73695L1.67594 0.263046ZM10.9399 7.63902C13.0202 9.09916 15.2413 10.5524 17.5972 11.9901L16.5554 13.6973C14.1651 12.2387 11.9081 10.7621 9.7909 9.27602L10.9399 7.63902ZM24.5244 15.9585C26.7885 17.1776 29.1501 18.3785 31.6049 19.5552L30.7404 21.3587C28.2582 20.1688 25.8687 18.9539 23.5762 17.7194L24.5244 15.9585ZM38.8572 22.842C41.2474 23.8657 43.7114 24.865 46.2461 25.8355L45.531 27.7033C42.9724 26.7236 40.4843 25.7146 38.0697 24.6804L38.8572 22.842ZM53.7467 28.5497C56.2208 29.3947 58.7529 30.2113 61.3408 30.9961L60.7603 32.9101C58.1505 32.1186 55.5964 31.2949 53.1003 30.4424L53.7467 28.5497ZM69.014 33.1838C71.548 33.8612 74.1292 34.5075 76.7553 35.1198L76.3012 37.0676C73.6542 36.4504 71.0523 35.7989 68.4975 35.1159L69.014 33.1838ZM84.5552 36.8097C87.1336 37.3265 89.751 37.81 92.4054 38.2578L92.0727 40.2299C89.3981 39.7787 86.7606 39.2915 84.1622 38.7707L84.5552 36.8097ZM100.299 39.4671C102.91 39.8271 105.554 40.1522 108.228 40.4401L108.014 42.4286C105.32 42.1385 102.656 41.8111 100.026 41.4484L100.299 39.4671ZM116.188 41.1784C118.814 41.3831 121.467 41.5516 124.146 41.682L124.049 43.6796C121.35 43.5483 118.678 43.3785 116.032 43.1723L116.188 41.1784ZM132.114 41.9542C134.751 42.0062 137.411 42.0207 140.093 41.9962L140.111 43.9962C137.41 44.0208 134.731 44.0061 132.075 43.9538L132.114 41.9542ZM148.076 41.8085C150.719 41.7085 153.381 41.57 156.06 41.3915L156.193 43.3871C153.494 43.5668 150.814 43.7063 148.152 43.8071L148.076 41.8085ZM164.017 40.7474C166.642 40.4972 169.284 40.2081 171.94 39.8787L172.186 41.8635C169.511 42.1952 166.851 42.4864 164.207 42.7384L164.017 40.7474ZM179.846 38.7843C182.461 38.3844 185.09 37.945 187.73 37.4646L188.088 39.4323C185.429 39.9161 182.782 40.3586 180.148 40.7613L179.846 38.7843ZM195.567 35.9248C198.148 35.38 200.739 34.7956 203.34 34.1703L203.807 36.1149C201.188 36.7445 198.579 37.3331 195.98 37.8817L195.567 35.9248ZM211.077 32.1959C213.635 31.5051 216.201 30.7742 218.775 30.0021L219.35 31.9177C216.758 32.6952 214.174 33.4311 211.598 34.1267L211.077 32.1959ZM226.371 27.6098C228.879 26.7821 231.393 25.9147 233.913 25.0066L234.591 26.8881C232.054 27.8024 229.523 28.6757 226.998 29.509L226.371 27.6098ZM241.406 22.191C243.863 21.23 246.324 20.2297 248.789 19.189L249.567 21.0315C247.086 22.0791 244.608 23.0862 242.135 24.0536L241.406 22.191ZM256.097 15.9897C258.511 14.8947 260.929 13.7602 263.349 12.5856L264.223 14.3848C261.787 15.5671 259.353 16.7089 256.923 17.8112L256.097 15.9897ZM270.466 9.01806C271.654 8.4039 272.841 7.77988 274.029 7.14592L274.971 8.91041C273.775 9.54838 272.58 10.1764 271.385 10.7944L270.466 9.01806Z" fill="url(#paint0_linear_81_27606)"/>
<defs>
<linearGradient id="paint0_linear_81_27606" x1="350.676" y1="3.11449" x2="328.527" y2="111.755" gradientUnits="userSpaceOnUse">
<stop stop-color="#51C8EF"/>
<stop offset="1" stop-color="#7AF57A"/>
</linearGradient>
</defs>
</svg>

                    <div className=' w-full 500:w-1/2 md:w-1/3 px-3 mt-[20px]'>
                        <div className='  max-w-[263px] max-h-[230px] md:mx-0 mx-auto md:me-auto'   data-aos="fade-right">
                            <div className=' rounded-full  w-[70px] 576:w-[100px] h-[70px] 576:h-[100px] flex items-center justify-center bg-[#F5FFF5]  mx-auto'><Bulbicon /></div>
                            <p className=' font-Anton font-normal text-[20px] leading-[26px] text-center text-[#00141B] mt-[16px]'>Inteligencia</p>
                            <p className=' font-inter font-medium text-[#00141B] opacity-[80%] leading-[normal] 576:leading-[20.6px] 992:leading-[25.6px] text-[15px] 992:text-base mt-[10px] text-center'>Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</p>
                        </div>
                    </div>
                    <div className=' w-full 500:w-1/2 md:w-1/3 px-3 mt-[20px]'>
                        <div className='  max-w-[263px] max-h-[230px] mx-auto'   data-aos="fade-right">
                            <div className=' rounded-full  w-[70px] 576:w-[100px] h-[70px] 576:h-[100px] flex items-center justify-center bg-[#F5FFF5]  mx-auto'><Bulbicon1 /></div>
                            <p className=' font-Anton font-normal text-[20px] leading-[26px] text-center text-[#00141B] mt-[16px]'>Proactividad</p>
                            <p className=' font-inter font-medium text-[#00141B] opacity-[80%] leading-[normal] 576:leading-[20.6px] 992:leading-[25.6px] text-[15px] 992:text-base mt-[10px] text-center'>Somos creadores de cambios que exploran nuevas formas de entretenimiento.</p>
                        </div>
                    </div>
                    <div className=' w-full 500:w-1/2 md:w-1/3 px-3 mt-[20px]'>
                        <div className='  max-w-[263px] max-h-[230px] md:mx-0 mx-auto md:ms-auto'   data-aos="fade-left">
                            <div className=' rounded-full w-[70px] 576:w-[100px] h-[70px] 576:h-[100px] flex items-center justify-center bg-[#F5FFF5]  mx-auto'><Bulbicon2 /></div>
                            <p className=' font-Anton font-normal text-[20px] leading-[26px] text-center text-[#00141B] mt-[16px]'>Innovación</p>
                            <p className=' font-inter font-medium text-[#00141B] opacity-[80%] leading-[normal] 576:leading-[20.6px] 992:leading-[25.6px] text-[15px] 992:text-base mt-[10px] text-center'>Pensamos fuera de la caja para estar siempre un paso adelante.</p>
                        </div>
                    </div>
                </div>
                <p className=' font-Anton font-normal text-center text-[48px] leading-[57.6px] text-[#00141B] mt-[45px] 576:mt-[60px:] md:mt-[90px] 992:mt-[150px]'   data-aos="fade-up">Slots </p>
                <p className=' font-inter text-[14px] 576:text-base text-center opacity-[80%] max-w-[904px] leading-[normal] 576:leading-[25.6px] text-[#00141B] font-medium mt-[6px] 576:mt-[16px] mx-auto'   data-aos="fade-up">En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
                <div className=' flex flex-wrap flex-row -mx-3 576:mt-[36px]'>
                  {mycard}
                </div>
                <div className=' text-center mt-[15px] 450:mt-[25px] 576:mt-[40px]'><Commonbtnn name='Mostrar más'/></div>
            </div>
        </div>
    )
}

export default Slotssection