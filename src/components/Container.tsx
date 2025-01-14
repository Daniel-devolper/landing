import React from 'react'
import YourVehicles from './YourVehicles'
import YourNetwork from './YourNetwork'
import YourAvailableBalance from './YourAvailableBalance'
import VehicleMovements from './VehicleMovements'
import CalculateYourTrips from './CalculateYourTrips'

const Container = () => {
  return (
    <div className="mx-auto flex flex-row gap-4 max-w-[1400px] items-center justify-between p-6 lg:px-8">
      <div className='flex flex-col w-[73%]'>
        <div className='w-full'>
          <YourVehicles/>
        </div>

        <div className='flex flex-row w-full gap-4'>
          <div className='w-[27%] mt-4'>
            <YourNetwork/>
          </div>

          <div className='w-[73%] mt-4'>
            <CalculateYourTrips/>
          </div>
        </div>
      </div>

      <div className='flex flex-col w-[27%] gap-4'>
        <div className='w-full'>
          <YourAvailableBalance/>
        </div>

        <div className='w-full'>
          <VehicleMovements/>
        </div>
      </div>
    </div>
  )
}

export default Container