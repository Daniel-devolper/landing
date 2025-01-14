import React from 'react'

const YourAvailableBalance = () => {
  return (
    <div className='px-3 lg:flex flex-col lg:gap-x-3 bg-[#1B1B1B] items-center justify-center border h-36 rounded-[10px] border-[#3D3D3D] p-1'>
      <div className='w-full text-right mr-9'>
        <span className='font-semibold text-base leading-5'>Tu saldo disponible</span>
      </div>

      <div className='w-full text-right mr-5'>
        <span className='font-semibold text-[64px] leading-[76.8px] text-[#00F1C7]'>$50.000</span>
      </div>
    </div>
  )
}

export default YourAvailableBalance