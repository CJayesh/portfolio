import React from 'react'
import WorkExpItem from '@/components/WorkExpItem'

const data = [
    {
        company_name: 'VA',
        location: 'Mumbai',
        duration: '1 year',
        role: 'SDE 2',
        tasks: ['go', 'come', 'leave']
    },
    {
        company_name: 'ZL',
        location: 'Mumbai',
        duration: '2 year',
        role: 'SDE',
        tasks: ['go', 'come', 'leave']
    }
]


function Experience() {
    return (
        <div id="experience_page" className='flex flex-col h-screen justify-center'>
            <div className='text-center text-2xl mb-2'>Work Experience</div>
            {data.map((obj, i) => <WorkExpItem key={i} {...obj}></WorkExpItem>)}
        </div>
    )
}

export default Experience