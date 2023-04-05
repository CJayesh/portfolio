import React from 'react'
import WorkExpItem from '@/components/WorkExpItem'
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiAngular, SiReact, SiNextdotjs, SiPython, SiPytest, SiDjango,
    SiRabbitmq, SiMysql, SiMongodb, SiJira, SiMiro, SiRedmine, SiAmazonaws, SiLinux, SiDocker, SiGit, SiGitlab, SiPycharm,
    SiSass, SiTailwindcss
} from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'


const icon_style = 'h-8 w-8 text-blue-700'

const data = [
    {
        company_name: 'Visible Alpha',
        location: 'Mumbai, India',
        duration: 'Nov 2021-Sep 2022',
        role: 'SDE 2',
        tasks: [<SiPython className={icon_style}></SiPython>, <SiReact className={icon_style}></SiReact>,
        <SiDjango className={icon_style}></SiDjango>, <SiDocker className={icon_style}></SiDocker>,
        <SiGit className={icon_style}></SiGit>, <SiJira className={icon_style}></SiJira>]
    },
    {
        company_name: 'Zeus Learning',
        location: 'Mumbai, India',
        duration: 'Jun 2019-Nov 2021',
        role: 'Software Engineer',
        tasks: [<SiHtml5 className={icon_style}></SiHtml5>, <SiCss3 className={icon_style}></SiCss3>,
        <SiAngular className={icon_style}></SiAngular>, <SiAmazonaws className={icon_style}></SiAmazonaws>,
        <SiGitlab className={icon_style}></SiGitlab>, <SiLinux className={icon_style}></SiLinux>]
    }
]


function Experience() {
    return (
        <div id="experience_page" className='h-screen flex flex-col justify-center items-center'>
            <div className='text-center text-2xl mb-4'>Work Experience</div>
            {data.map((obj, i) => <WorkExpItem key={i} {...obj}></WorkExpItem>)}
        </div>
    )
}

export default Experience