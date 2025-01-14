import React from 'react'

const data = [
  {
    id: "1",
    imgCar: "/Icon_caret.svg",
    placa: "UUX987",
    imgMoney: "/money.svg"
  },
  {
    id: "2",
    imgCar: "/Icon_caret.svg",
    placa: "UUX987",
    imgMoney: "/money.svg"
  },
  {
    id: "3",
    imgCar: "/Icon_caret.svg",
    placa: "UUX987",
    imgMoney: "/money.svg"
  }
]
const YourNetwork = () => {
  return (
    <div className='px-3 lg:flex justify-center flex-col lg:gap-x-3 bg-[#1B1B1B] items-center border h-[340px] rounded-[10px] border-[#3D3D3D] p-1'>
      <div className='w-full text-left mb-7'>
        <span className='font-semibold text-2xl leading-7'>Tu red Simon</span>
      </div>

      <div className='w-full'>
        <ul>
          {
            data.map((car) => (
              <li className='flex flex-row justify-center border-b mt-[10px] pb-[10px] border-[#2C2C2C] gap-[10px]' key={car.id}>
                <div className="px-4 lg:flex lg:gap-x-3 bg-[#5E5E5E] items-center border h-[46x] w-[60px] rounded-lg border-[#5E5E5E] p-1">
                  <img
                    alt="logo_settings"
                    src={car.imgCar}
                  />
                </div>

                <div className='w-full flex flex-col'>
                  <span className='font-light leading-5 text-base text-[#FFFFFF]'>Placa</span>
                  <span className='font-semibold leading-6 text-xl text-[#FFFFFF]'>{car.placa}</span>
                </div>

                <div className="lg:flex self-center px-1 bg-[#00F1C7] items-center border h-[30px] w-[45px] rounded-lg border-[#3D3D3D]">
                  <img
                    alt="logo_settings"
                    src={car.imgMoney}
                  />
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default YourNetwork