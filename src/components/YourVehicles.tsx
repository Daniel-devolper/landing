import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

const YourVehicles = () => {
  return (
    <div className='px-3 lg:flex flex-col lg:gap-x-3 bg-[#1B1B1B] items-center border h-[464px] rounded-lg border-[#3D3D3D]'>
      <div className='w-full flex-row flex h-[85%] ml-5 image-vector'>
        <div className='h-[341px] w-[30%] mt-5 bg-[#2C2C2C] rounded-[10px] p-[25px]'>
          <div className='flex flex-row font-semibold justify-between text-2xl leading-[28.8px] text-[#FFFFFF]'>
            <span>Tus vehículos</span>
            <span>3</span>
          </div>

          <div className='flex flex-col gap-[6px] mt-[30px]'>
            <div className='flex flex-row w-full gap-1 bg-[#232323] items-center rounded border-2 border-transparent border-l-[#999999]'>
              <div className='flex flex-col w-[90%] p-4'>
                <div className='leading-[16.8px] flex gap-2 font-semibold text-sm text-[#999999]'>
                  <span>ABC</span>
                  <span>123</span>
                  <span className='leading-3 text-[10px] font-normal bg-[#2C2C2C] px-2 py-1 rounded text-[#999999]'>ACTIVO</span>
                </div>
              </div>

              <div className='w-[10%] mr-1'>
                <div className='h-4 w-4 mr-3 rounded-full border border-[#999999]'>

                </div>
              </div>
            </div>

            <div className='flex flex-row w-full gap-1 bg-[#232323] items-center rounded border-2 border-transparent border-l-[#00F1C7]'>
              <div className='flex flex-col w-[90%] p-4'>
                <div className='leading-[16.8px] font-semibold flex gap-2 text-sm text-[#00F1C7]'>
                  <span>DEF</span>
                  <span>456</span>
                  <span className='leading-3 text-[10px] font-normal bg-[#2C2C2C] px-2 py-1 rounded text-[#F49221]'>INACTIVO</span>
                </div>
              </div>

              <div className='w-[10%] mr-1'>
                <div className='h-4 w-4 bg-[#00F1C7] rounded-full'>

                </div>
              </div>
            </div>

            <div className='flex flex-row w-full gap-1 bg-[#232323] items-center rounded border-2 border-transparent border-l-[#999999]'>
              <div className='flex flex-col w-[90%] p-4'>
                <div className='leading-[16.8px] font-semibold flex gap-2 text-sm text-[#999999]'>
                  <span>GHI</span>
                  <span>789</span>
                  <span className='leading-3 text-[10px] font-normal bg-[#2C2C2C] px-2 py-1 rounded text-[#999999]'>ACTIVO</span>
                </div>
              </div>

              <div className='w-[10%] mr-1'>
                <div className='h-4 w-4 mr-3 rounded-full border border-[#999999]'>

                </div>
              </div>
            </div>
          </div>

          <div className='mt-4'>
            <button className='w-32 h-10 rounded-lg bg-[#00F1C7] text-black text-sm leading-4 font-semibold hover:border hover:border-[#00F1C7] hover:text-[#00F1C7] hover:bg-transparent cursor-pointer'>Agregar</button>
          </div>
        </div>

        <div className='h-[341px] w-[70%]'>
          <img 
           src="/car.svg" 
           alt="car_image"
           className='bg-cover' 
          />
        </div>
      </div>

      <div className='w-full flex flex-row h-[15%]'>
        <div className='w-[80%] flex flex-row gap-2'>
          <div className="px-3 lg:flex lg:gap-x-3 items-center h-12 p-1 border border-transparent border-r-[#2C2C2C]">
            <div className='px-1 justify-center lg:flex lg:gap-x-3 bg-[#2C2C2C] items-center h-12 w-[75px] rounded-lg p-1'>
              <img
                alt="logo_settings"
                src="/Icon_caret_icon.svg"
                className='h-6 w-6'
              />
            </div>
            <div className='flex flex-col w-full'>
              <span className='font-semibold block text-xs leading-[14.4px] text-[#999999]'>Placa</span>
              <span className='font-light text-sm block leading-5 text-[#FFFFFF]'>DEF 456</span>
            </div>
          </div>

          <div className="px-3 lg:flex lg:gap-x-3 items-center h-12 p-1 border border-transparent border-r-[#2C2C2C]">
            <div className='px-1 justify-center lg:flex lg:gap-x-3 bg-[#2C2C2C] items-center h-12 w-[75px] rounded-lg p-1'>
              <img
                alt="logo_settings"
                src="/Icon_caret_icon.svg"
                className='h-6 w-6'
              />
            </div>
            <div className='flex flex-col w-full'>
              <span className='font-semibold block text-xs leading-[14.4px] text-[#999999]'>Marca</span>
              <span className='font-light text-sm block leading-5 text-[#FFFFFF]'>MAZDA</span>
            </div>
          </div>

          <div className="px-3 lg:flex lg:gap-x-3 items-center h-12 p-1 border border-transparent border-r-[#2C2C2C]">
            <div className='px-1 justify-center lg:flex lg:gap-x-3 bg-[#2C2C2C] items-center h-12 w-[75px] rounded-lg p-1'>
              <img
                alt="logo_settings"
                src="/Icon_caret_icon.svg"
                className='h-6 w-6'
              />
            </div>
            <div className='flex flex-col w-full'>
              <span className='font-semibold block text-xs leading-[14.4px] text-[#999999]'>Modelo</span>
              <span className='font-light text-sm block leading-5 text-[#FFFFFF]'>2019</span>
            </div>
          </div>

          <div className="px-3 lg:flex lg:gap-x-3 items-center h-12 p-1">
            <div className='px-1 lg:flex lg:gap-x-3 justify-center bg-[#2C2C2C] items-center h-12 w-14 rounded-lg p-1'>
              <img
                alt="logo_settings"
                src="/Icon_caret_icon.svg"
                className='h-6 w-6'
              />
            </div>
            <div className='flex flex-col w-full'>
              <span className='font-semibold block text-xs leading-[14.4px] text-[#999999]'>Línea</span>
              <span className='font-light text-sm block leading-5 text-[#FFFFFF]'>3 MHEV eSKYACTOVG</span>
            </div>
          </div>
        </div>

        <div className='w-[20%] flex justify-end'>
          <div className="lg:flex lg:gap-x-3 items-center h-12 p-1">
            <div className='px-1 lg:flex lg:gap-x-3 bg-[#2C2C2C] items-center justify-center h-12 w-[70px] rounded-lg p-1'>
              <img
                alt="logo_settings"
                src="/Icon_caret_not.svg"
              />
            </div>
            <div className='flex flex-col w-full'>
              <span className='font-semibold block text-xs leading-[14.4px] text-[#999999]'>Estado</span>
              <span className='font-light text-sm block leading-5 text-[#F49221]'>Inactivo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourVehicles