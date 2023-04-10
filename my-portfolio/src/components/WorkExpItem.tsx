import React from 'react'


type Props = {
    company_name: string,
    duration: string,
    role: string,
    location: string,
    tasks: Array<any>
}


function WorkExpItem({ company_name, duration, role, location, tasks }: Props) {
    return (
        <div className='flex flex-wrap rounded-lg mb-8 px-2 py-3 min-w-[280px] max-w-xl sm:px-8 sm:py-6 md:w-96 lg:w-[640px] bg-white shadow-md hover:shadow-lg w-1/2'>
            <div className='w-full flex-[0_0_50%] font-semibold'>{role}</div>
            <div className='w-full flex-[0_0_50%] text-right text-sm italic'>{location}</div>
            <div className='w-full flex-[0_0_50%] font-medium'>{company_name}</div>
            <div className='w-full flex-[0_0_50%] text-right text-sm italic'>{duration}</div>
            <div className='w-full border-t-2 pt-2 mt-1 flex flex-wrap gap-1 md:gap-2 lg:gap-3 justify-center'>
                {tasks.map((icon, i) =>icon)}
            </div>
        </div>
    )
}

export default WorkExpItem