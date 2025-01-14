'use client'

import React from 'react'

const PostHeader = () => {
  return (
    <div className="mx-auto flex max-w-[1400px] items-center justify-between p-6 lg:px-8">
      <div>
        <h1 className='font-semibold text-5xl leading-[57.6px] text-white'>Centro de control</h1>    
        <span className='ml-1 font-normal text-sm leading-4'>Esto es lo que tenemos para ti el día de hoy.</span>
      </div>

      <div className='mr-2'>
        <button className='w-40 h-10 rounded-lg bg-[#00F1C7] text-black text-sm leading-4 font-semibold hover:border hover:border-[#00F1C7] hover:text-[#00F1C7] hover:bg-transparent cursor-pointer'>Recargar saldo</button>
      </div>
    </div>
  )
}

export default PostHeader