import React from 'react'
import WorkExpItem from '@/components/WorkExpItem'
import {
    SiHtml5, SiCss3, SiTypescript, SiAngular, SiReact, SiPython, SiPytest, SiDjango,
    SiRabbitmq, SiMysql, SiMongodb, SiJira, SiAmazonaws, SiLinux, SiDocker, SiGit, SiGitlab, SiSass
} from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'


const icon_style = 'h-8 w-8 text-blue-700'

const data = [
    {
        company_name: 'Visible Alpha',
        location: 'Mumbai, India',
        duration: 'Nov 2021-Sep 2022',
        role: 'SDE 2',
        tasks: [<SiPython key='py' title='Python3' className={icon_style}></SiPython>,<SiReact key='re' title='React' className={icon_style}></SiReact>,
        <SiDjango key='dj' title='Django' className={icon_style}></SiDjango>, <SiDocker key='dk' title='Docker' className={icon_style}></SiDocker>,
        <SiGit key='git' title='Git' className={icon_style}></SiGit>, <SiGitlab key='gl' title='GitLab' className={icon_style}></SiGitlab>,
        <SiPytest key='pt' title='PyTest' className={icon_style}></SiPytest>, <SiMongodb key='mdb' title='MongoDb' className={icon_style}></SiMongodb>,
        <SiRabbitmq key='rmq' title='RabbitMQ' className={icon_style}></SiRabbitmq>, <SiJira key='jira' title='Jira' className={icon_style}></SiJira>]
    },
    {
        company_name: 'Zeus Learning',
        location: 'Mumbai, India',
        duration: 'Jun 2019-Nov 2021',
        role: 'Software Engineer',
        tasks: [<SiHtml5 key='html' title='HTML5' className={icon_style}></SiHtml5>, <SiCss3 key='css' title='CSS3' className={icon_style}></SiCss3>,
        <SiTypescript key='ts' title='Typescript' className={icon_style}></SiTypescript>,
        <SiGitlab key='gl' title='GitLab' className={icon_style}></SiGitlab>,
        <SiAngular key='ag' title='Angular' className={icon_style}></SiAngular>, <SiSass key='sass' title='SASS' className={icon_style}></SiSass>,
        <SiPython key='py' title='Python3' className={icon_style}></SiPython>, <SiAmazonaws key='aws' title='AWS' className={icon_style}></SiAmazonaws>,
        <SiMysql key='msql' title='MySQL' className={icon_style}></SiMysql>,<SiLinux key='linux' title='Linux' className={icon_style}></SiLinux>]
    }
]


function Experience() {
    return (
        <div id="experience_page" className='min-h-screen flex flex-col justify-center items-center'>
            <div className='text-center text-2xl mb-4 font-medium'>Work Experience</div>
            {data.map((obj, i) => <WorkExpItem key={i} {...obj}></WorkExpItem>)}
        </div>
    )
}

export default Experience