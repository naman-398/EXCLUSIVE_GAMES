import React from 'react'

const COmmonbtn = (props) => {
    return (
        <div>
            <button className=' font-inter font-bold text-[14px ] 576:text-base leading-[25.6px] text-[#FFFFFF] p-[8px_30px] 576:p-[13px_46px] rounded-[41px] border-[1px] border-[#FFFFFF] hover:border-transparent  relative bg-300% hover:shadow-[inset_18rem_0_0_0_#64dbaa] hover:text-[#00141b] shadow-[inset_0_0_0_0]  duration-500'>{props.text}
            <span className=' absolute left-[-6px] bottom-[-7px]'><svg width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>
</span></button>
        </div>
    )
}

export default COmmonbtn