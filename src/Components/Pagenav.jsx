import React, { useState } from 'react'
import pagelogo from "../assets/Images/pagelogo.webp";
import COmmonbtn from '../Commonbtn/COmmonbtn';
const Pagenav = () => {
    const [show, setShow] = useState(false)
    function mobile() {
        setShow(!show)
        if (show === false) {
            document.body.classList.add('overflow_hidden')
        }
        else {
            document.body.classList.remove('overflow_hidden')
        }
    }
    return (
        <div className={`${show === false ? "backdrop-blur-sm" : "backdrop-blur-[unset]"}  max-h-[90px] bg-[#FFFFFF1A] h-full w-full`}>
        <div className=' max-w-[1164px] px-3 mx-auto flex items-center py-[24px] justify-between' >
            <div><img src={pagelogo} alt="pagelogo" className=' max-w-[209px]' /></div>
            <ul className={` ${show === true ? "left-0" : "left-[-100%]"}  flex items-center gap-[15px] min-[992px]:gap-[28px] mobile-view`}>
                <li><a href="" className=' font-inter font-medium leading-[25.6px] text-base text-[#FFFFFF] opacity-[80%] hover:opacity-[100%] duration-300'>Hogar</a></li>
                <li><a href="" className=' font-inter font-medium leading-[25.6px] text-base text-[#FFFFFF] opacity-[80%] hover:opacity-[100%] duration-300'>Misión</a></li>
                <li><a href="" className=' font-inter font-medium leading-[25.6px] text-base text-[#FFFFFF] opacity-[80%] hover:opacity-[100%] duration-300'>Tragamonedas</a></li>
                <li><a href="" className=' font-inter font-medium leading-[25.6px] text-base text-[#FFFFFF] opacity-[80%] hover:opacity-[100%] duration-300'>Por qué elegirnos</a></li>
                <li><a href="" className=' font-inter font-medium leading-[25.6px] text-base text-[#FFFFFF] opacity-[80%] hover:opacity-[100%] duration-300'>Ofertas</a></li>
                <li className=' lg:ml-[60px]  min-[1200px]:ml-[133px] block min-[576px]:hidden min-[992px]:block'><COmmonbtn text='Acceso'/></li>
            </ul>
            <ul className='  min-[992px]:hidden flex items-center gap-[20px]'>
            <li className=' hidden min-[450px]:block'><COmmonbtn text='Acceso'/></li>
            <button onClick={mobile} className={`${show === false ? "rotate-90" : "rotate-360"} block 992:hidden relative z-[6] font-bold text-[27px] text-[#FFFFFF]  duration-300`}>{show === false ? "|||" : "X"}</button>
            </ul>
        </div>
        </div>
    )
}

export default Pagenav