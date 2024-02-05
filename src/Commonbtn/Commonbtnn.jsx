import React from 'react'

const Commonbtnn = (props) => {
  return (
    <div>
      <button className=' relative z-0'>
    <button className=' font-inter font-bold text-[14px ] 576:text-base leading-[25.6px] text-[#000] bg-gradient p-[8px_30px] 576:p-[13px_46px] rounded-[41px] border-[1px] border-[transparent] hover:text-[white] bg-gradient-hover'>{props.name}</button>
    <span className=' absolute left-[-6px] bottom-[-7px]'><svg width="107" height="28" viewBox="0 0 107 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 1C1.5 15.3594 13.1406 27 27.5 27H105.5" stroke="url(#paint0_linear_4006_7)" stroke-width="1.5" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_4006_7" x1="134.466" y1="25.6913" x2="113.531" y2="-37.3975" gradientUnits="userSpaceOnUse">
<stop stop-color="#51C8EF"/>
<stop offset="1" stop-color="#7AF57A"/>
</linearGradient>
</defs>
</svg>
</span></button>
</div>
  )
}

export default Commonbtnn