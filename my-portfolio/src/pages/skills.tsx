import React from 'react'
import SkillItem from '@/components/SkillItem'
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiAngular, SiReact, SiNextdotjs, SiPython, SiPytest, SiDjango,
    SiRabbitmq, SiMysql, SiMongodb, SiJira, SiMiro, SiRedmine, SiAmazonaws, SiLinux, SiDocker, SiGit, SiGitlab, SiPycharm,
    SiSass, SiTailwindcss } from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'
import en_icon from '../..//public/icons/en-language-icon.svg'
import de_icon from '../..//public/icons/de-language-icon.svg'
import Image from 'next/image'


function Skills() {
    const icon_style = 'h-8 w-8 text-[#2a5298]'
    const heading_style = 'text-2xl mb-2'
    return (
        <div className='text-center'>
            <div className='mb-12'>
                <div className={heading_style}>Tech</div>
                <div className='flex flex-wrap justify-center'>
                    <SkillItem icon={<SiHtml5 className={icon_style}></SiHtml5>} text='HTML5'></SkillItem>
                    <SkillItem icon={<SiCss3 className={icon_style}></SiCss3>} text='CSS3'></SkillItem>
                    <SkillItem icon={<SiJavascript className={icon_style}></SiJavascript>} text='Javascript'></SkillItem>
                    <SkillItem icon={<SiTypescript className={icon_style}></SiTypescript>} text='Typescript'></SkillItem>
                    <SkillItem icon={<SiAngular className={icon_style}></SiAngular>} text='Angular'></SkillItem>
                    <SkillItem icon={<SiReact className={icon_style}></SiReact>} text='React'></SkillItem>
                    <SkillItem icon={<SiNextdotjs className={icon_style}></SiNextdotjs>} text='NextJs'></SkillItem>
                    <SkillItem icon={<SiSass className={icon_style}></SiSass>} text='Sass'></SkillItem>
                    <SkillItem icon={<SiTailwindcss className={icon_style}></SiTailwindcss>} text='TailwindCss'></SkillItem>
                    <SkillItem icon={<SiPython className={icon_style}></SiPython>} text='Python3'></SkillItem>
                    <SkillItem icon={<SiDjango className={icon_style}></SiDjango>} text='Django'></SkillItem>
                    <SkillItem icon={<SiPytest className={icon_style}></SiPytest>} text='Pytest'></SkillItem>
                    <SkillItem icon={<SiRabbitmq className={icon_style}></SiRabbitmq>} text='Rabbitmq'></SkillItem>
                    <SkillItem icon={<SiMysql className={icon_style}></SiMysql>} text='MyDql'></SkillItem>
                    <SkillItem icon={<SiMongodb className={icon_style}></SiMongodb>} text='Mongodb'></SkillItem>
                    <SkillItem icon={<SiAmazonaws className={icon_style}></SiAmazonaws>} text='AWS'></SkillItem>
                    <SkillItem icon={<SiLinux className={icon_style}></SiLinux>} text='Linux'></SkillItem>
                    <SkillItem icon={<SiDocker className={icon_style}></SiDocker>} text='Docker'></SkillItem>
                    <SkillItem icon={<SiGit className={icon_style}></SiGit>} text='Git'></SkillItem>
                    <SkillItem icon={<SiGitlab className={icon_style}></SiGitlab>} text='GitLab'></SkillItem>
                </div>
            </div>
            <div className='mb-12'>
                <div className={heading_style}>Tools</div>
                <div className='flex flex-wrap justify-center'>
                    <SkillItem icon={<SiJira className={icon_style}></SiJira>} text='Jira'></SkillItem>
                    <SkillItem icon={<SiMiro className={icon_style}></SiMiro>} text='Miro'></SkillItem>
                    <SkillItem icon={<SiRedmine className={icon_style}></SiRedmine>} text='Redmine'></SkillItem>
                    <SkillItem icon={<SiPycharm className={icon_style}></SiPycharm>} text='Pycharm'></SkillItem>
                    <SkillItem icon={<TbBrandVscode className={icon_style}></TbBrandVscode>} text='VsCode'></SkillItem>
                </div>
            </div>
            <div className='mb-12'>
                <div className={heading_style}>Languages</div>
                <div className='flex flex-wrap justify-center'>
                    <SkillItem icon={<Image src={en_icon} width={32} alt='english'></Image>} text='English: Proficient'></SkillItem>
                    <SkillItem icon={<Image src={de_icon} width={32} alt='english'></Image>} text='German: Beginner'></SkillItem>
                </div>
            </div>
        </div>
    )
}

export default Skills