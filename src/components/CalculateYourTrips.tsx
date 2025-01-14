import React from 'react'

const CalculateYourTrips = () => {
  return (
    <div className='px-3 lg:flex lg:gap-x-3 flex-col bg-[#1B1B1B] items-center border h-[340px] rounded-lg border-[#3D3D3D] p-1'>
      <div className='w-full text-left mt-[40px]'>
        <span className='font-semibold text-2xl leading-7 text-[#FFFFFF] ml-[17px]'>Calcula tu viaje</span>
      </div>

      <div className='flex w-full ml-[30px] mt-[30px] gap-4'>
        <div className='w-1/2'>
          <label htmlFor="init" className="block text-xs leading-[14.4px] font-semibold text-[#999999]">
            Inicio
          </label>
          <div className="mt-2 grid grid-cols-1">
            <input
              id="init"
              name="init"
              type="text"
              className="col-start-1 row-start-1 block w-full rounded-xl bg-transparent py-1.5 pl-10 pr-3 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 sm:pl-9 sm:text-sm/6"
            />
            <img 
              src="/Angles.svg" 
              alt="location" 
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
            />
          </div>
        </div>

        <div className='w-1/2 mr-[30px]'>
          <label htmlFor="init" className="block text-xs leading-[14.4px] font-semibold text-[#999999]">
            Inicio
          </label>
          <div className="mt-2 grid grid-cols-1">
            <input
              id="init"
              name="init"
              type="text"
              className="col-start-1 row-start-1 block w-full rounded-xl bg-transparent py-1.5 pl-10 pr-3 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 sm:pl-9 sm:text-sm/6"
            />
            <img 
              src="/Angles.svg" 
              alt="location" 
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
            />
          </div>
        </div>
      </div>

      <div className='flex w-full justify-end mt-[18px] flex-row gap-[10px] mr-[30px]'>
        <button className='w-[164px] h-10 rounded-lg hover:bg-[#00F1C7] cursor-pointer hover:text-black border border-[#00F1C7]  text-[#00F1C7] text-sm leading-4 font-semibold'>Ruta sugerida</button>

        <button className='w-[164px] h-10 rounded-lg bg-[#00F1C7] text-black text-sm leading-4 font-semibold hover:border hover:border-[#00F1C7] hover:text-[#00F1C7] hover:bg-transparent cursor-pointer'>Calcular</button>
      </div>

    </div>
  )
}

export default CalculateYourTrips