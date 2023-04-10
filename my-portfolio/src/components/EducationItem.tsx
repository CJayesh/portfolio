import React from 'react'

export type Props = {
    uni_name: string,
    location: string,
    duration: string,
    degree: string,
    specialisation?: string
}

function EducationItem(data: Props) {
    return (
        <div className='flex flex-wrap rounded-lg mb-8 px-2 py-3 min-w-[280px] max-w-xl sm:px-8 sm:py-6 md:w-96 lg:w-[640px] bg-white shadow-md hover:shadow-lg w-1/2'>
            <div className='w-full flex-[0_0_50%] font-semibold'>{data.uni_name}</div>
            <div className='w-full flex-[0_0_50%] text-right text-sm italic'>{data.location}</div>
            <div className='w-full flex-[0_0_50%] font-medium'>{data.degree}</div>
            <div className='w-full flex-[0_0_50%] text-right text-sm italic'>{data.duration}</div>
            <div className={data.specialisation ? 'w-full block' : 'hidden'} >{data.specialisation}</div>
        </div>
    )
}

export default EducationItem