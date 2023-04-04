import React, { ReactElement } from 'react'
import { IconType } from 'react-icons/lib'


type Props = {
    company_name: string,
    duration: string,
    role: string,
    location: string,
    tasks: Array<any>
}


function WorkExpItem({ company_name, duration, role, location, tasks }: Props) {
    return (
        <div className='flex flex-wrap rounded-lg mb-8 px-8 py-6 bg-white shadow-md hover:shadow-lg w-1/2'>
            <div className='w-full flex-[0_0_50%] font-bold'>{role}</div>
            <div className='w-full flex-[0_0_50%] text-right text-sm italic'>{location}</div>
            <div className='w-full flex-[0_0_50%] font-semibold'>{company_name}</div>
            <div className='w-full flex-[0_0_50%] text-right text-sm italic'>{duration}</div>
            <div className='w-full border-t-2 pt-2 mt-1 flex justify-evenly'>
                {tasks.map((icon, i) => <span key={i}>{icon}</span>)}
            </div>
        </div>
    )
}

export default WorkExpItem