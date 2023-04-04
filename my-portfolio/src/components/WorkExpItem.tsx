import React from 'react'


type Props = {
    company_name: string,
    duration: string,
    role: string,
    location: string,
    tasks: any[]
}


function WorkExpItem({company_name, duration, role, location, tasks}: Props) {
  return (
    <div className='flex flex-wrap rounded-lg mb-8 px-8 py-6 bg-white drop-shadow-md hover:drop-shadow-lg w-1/2'>
        <div className='w-full flex-[0_0_50%] font-bold'>{role}</div>
        <div className='w-full flex-[0_0_50%] text-right text-sm'>{location}</div>
        <div className='w-full flex-[0_0_50%] font-semibold'>{company_name}</div>
        <div className='w-full flex-[0_0_50%] text-right text-sm'>{duration}</div>
        <div className='w-full border-t-2 pt-2 mt-1 flex justify-evenly'>
            {tasks.map((task, i) => task)}
        </div>
    </div>
  )
}

export default WorkExpItem