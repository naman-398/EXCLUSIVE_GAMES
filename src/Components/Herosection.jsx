import React from 'react'
import Pagenav from './Pagenav'
import Commonbtnn from '../Commonbtn/Commonbtnn'

const Herosection = () => {
    return (
        <div className=' bg-[url(../src/assets//Images/Hero-img.webp)] bg-100%  bg-center  min-[1200px]:min-h-screen overflow-hidden' >
            <Pagenav />
            <div className='  max-w-[1364px] mx-auto px-3 py-[100px] min-[992px]:py-[140px] min-[1200px]:pt-[140px] min-[1200px]:py-[unset]'>
            <h1 className=' font-Anton font-normal max-w-[505px] text-[50px] 450:text-[60px] 576:text-[72px] leading-[60px] 450:leading-[75.4px] 576:leading-[86.4px] text-center text-[#FFFFFF] mx-auto'>Exclusive Games. Pasión por ganar</h1>
            <p className=' font-inter font-medium text-[14px] 576:text-base text-center leading-[normal] 576:leading-[25.6px] max-w-[727px]  opacity-[80%] mx-auto mt-[16px] text-[#FFFFFF]'>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
            <div className='mt-[40px] text-center'><Commonbtnn name='Empezar'/></div>
            </div>
        </div>
    )
}

export default Herosection