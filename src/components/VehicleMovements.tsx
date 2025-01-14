import { ChevronDoubleRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

const data = [
  {
    day : "Hoy",
    info:[
      {
        status: "Exitosa",
        type: "Parqueadero",
        address: "Cra 71D No. 6-90, Plaza de las...",
        date: "12/11/2024 - 10:00am"
      },
      {
        status: "Exitosa",
        type: "Peaje",
        address: "Peaje Calle 13",
        date: "12/11/2024 - 10:00am"
      },
      {
        status: "Exitosa",
        type: "Peaje",
        address: "Peaje Calle 13",
        date: "12/11/2024 - 10:00am"
      }
    ]
  },
  {
    day : "Ayer - 11/11/2024",
    info:[
      {
        status: "Exitosa",
        type: "Parqueadero",
        address: "Cra 71D No. 6-90, Plaza de las...",
        date: "11/11/2024 - 10:00am"
      },
      {
        status: "Exitosa",
        type: "Peaje",
        address: "Peaje Calle 13",
        date: "11/11/2024 - 10:00am"
      },
      {
        status: "Exitosa",
        type: "Peaje",
        address: "Peaje Calle 13",
        date: "11/11/2024 - 10:00am"
      }
    ]
  }
]

const VehicleMovements = () => {
  return (
    <div className='px-3 lg:flex lg:gap-x-3 flex-col bg-[#1B1B1B] items-center border h-[658px] rounded-lg border-[#3D3D3D] p-1'>
      <div className='w-full text-left self-start mt-[40px]'>
        <span className='font-semibold text-2xl leading-7 text-[#FFFFFF] ml-[17px]'>Movimientos del vehículo</span>
      </div>
      {/*  */}
      <div className='w-full mt-3 overflow-auto scroll-custom pr-2'>
        {
          data.map((item)=>(
            <div key={item.day} className='flex flex-col gap-1'>
              <span key={item.day} className='block mt-4 font-semibold leading-[14.4px] text-xs text-[#999999]'>
                {item.day}
              </span>
              <div className='flex flex-col gap-1'>
                {
                  item.info.map((info, index)=>(
                    <div className='flex flex-row w-full gap-1 bg-[#2C2C2C] items-center rounded border-2 border-transparent border-l-[#00F1C7]' key={index}>
                      <div className='flex flex-col w-[90%] p-4'>
                        <div className='leading-[16.8px] font-semibold text-sm text-[#999999]'>
                          <span>{info.type}</span> - <span className='text-[#00F1C7]'>{info.status}</span>
                        </div>

                        <div>
                          <span className='truncate leading-[16.8px] font-normal text-sm text-[#FFFFFF]'>{info.address}</span>
                        </div>

                        <div className='w-full text-right'>
                          <span className='text-xs leading-4 font-normal tracking-[1%]'>{info.date}</span>
                        </div>
                      </div>

                      <div className='w-[10%]'>
                        <ChevronRightIcon
                          className='h-5 w-5 text-black'
                        />
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default VehicleMovements