import React from 'react'
import EducationItem, {Props as EduProps} from '@/components/EducationItem'


const edu_data: Array<EduProps> = [
    {
        uni_name: 'University of Paderborn',
        location: 'Paderborn, Germany',
        duration: '2022-Present',
        degree: 'Masters in Computer Science'
    },
    {
        uni_name: 'Mumbai University',
        location: 'Mumbai, India',
        duration: '2015-2019',
        degree: 'Bachelors in Computer Engineering'
    }
]


function Education() {
    return (
        <div id='education_page' className='flex h-screen flex-col justify-center items-center'>
            <div className='text-center text-2xl mb-4'>Education</div>
            {
                edu_data.map((obj, i) => <EducationItem {...obj} key={i}></EducationItem>)
            }
        </div>
    )
}

export default Education