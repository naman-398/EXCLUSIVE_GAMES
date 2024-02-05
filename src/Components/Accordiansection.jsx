import React, { useState } from 'react'
import { Minus, Plus } from '../Commonicon/Icon';
const AccordionItem = ({ index, title, content, headingParaStyle, isOpen, onToggle }) => {
    return (
      <div className=" mb-[10px] 576:mb-[32px] p-[10px_15px] 576:p-[16px_20px] rounded-[6px] border-[1px] border-[#FFFFFF80]" data-aos="fade-up">
        <div className="flex justify-between items-center bg-transparent  cursor-pointer"  onClick={() => onToggle(index)}>
          <span style={headingParaStyle} className=' font-Anton text-[15px] 450:text-[17px] 576:text-[20px] leading-[normal] 576:leading-[26px] text-[#FFF] font-normal bg-transparent'>{title}</span>
          <span className=" font-normal  text-white ps-1">{isOpen ? <Minus/> : <Plus/>}</span>
        </div>
        {isOpen && (
          <div className="bg-transparent pt-1 576:pt-2">
            <p className='  font-inter text-[14px] 576:text-base text-[#FFF] leading-[normal] 576:leading-[25.6px] font-medium opacity-[80%] bg-transparent max-w-[880px]'>{content}</p>
          </div>
        )}
      </div>
    );
  };

const Accordiansection = () => {
    const accordionItems = [
        { title: '¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?', content: 'En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.' },
        { title: '¿Cómo garantizan la seguridad de las operaciones en sus juegos?', content: 'En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.' },
        { title: ' ¿Cuáles son las opciones de juego disponibles en las versiones Silver, Luxury y Platinum?', content: 'En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.' },
        { title: '¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?', content: 'En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.' },
        { title: '¿Qué métodos de pago aceptan?', content: 'En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.' },
        { title: '¿Puedo probar sus juegos antes de comprometerme?', content: 'En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.' },
      ];
      const [openIndex, setOpenIndex] = useState(null);
      const toggleAccordionItem = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
      };
  return (
    <div className=' max-w-[997px] mx-auto px-3 pt-[45px] 576:pt-[60px] md:pt-[90px] 992:pt-[150px]'>
                <p className=' font-Anton font-normal text-[48px] text-[#FFF] leading-[57.6px] text-center pb-[20px] md:pb-[60px]' data-aos="fade-up">Preguntas más frecuentes </p>
    {accordionItems.map((item, index) => (
      <AccordionItem
        key={index}
        index={index}
        title={item.title}
        content={item.content}
        headingParaStyle={item.headingParaStyle}
        isOpen={index === openIndex}
        onToggle={toggleAccordionItem}
      />
    ))}
  </div>
  )
}

export default Accordiansection