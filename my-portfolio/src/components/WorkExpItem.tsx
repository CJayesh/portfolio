import React from 'react'


type Props = {
    company_name: string,
    duration: string,
    role: string,
    location: string,
    tasks: string[]
}


function WorkExpItem({company_name, duration, role, location, tasks}: Props) {
  return (
    <div className='flex flex-wrap rounded border border-blue-500 mb-8 py-3 px-2'>
        <div className='w-full flex-[0_0_50%]'>{company_name}</div>
        <div className='w-full flex-[0_0_50%] text-right'>{location}</div>
        <div className='w-full flex-[0_0_50%]'>{role}</div>
        <div className='w-full flex-[0_0_50%] text-right'>{duration}</div>
        <div className='w-full'>
            <ul className='list-disc list-inside'>
                {tasks.map((task, i) => <li key={i}>{task}</li>)}
            </ul>
        </div>
    </div>
  )
}

export default WorkExpItem