import Image from 'next/image'
import React from 'react'
import pic from '../../public/images/my-pic.png'
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'
import { SiXing, SiHackerrank } from 'react-icons/si'
import { FaFileDownload } from 'react-icons/fa'


function Home() {
    const media_icon_style = 'h-7 w-7 mr-4 cursor-pointer text-blue-700 hover:drop-shadow-md'
    return (
        <div id="home_page" className='flex flex-col lg:flex-row justify-center items-center min-h-screen'>
            <div className='w-2/4 lg:w-[300px]'>
                <Image src={pic} alt='my-pic' priority></Image>
            </div>
            <div className='max-w-lg'>
                <div className='text-4xl font-medium mb-5 text-blue-700'>Hi there, I&apos;m Jayesh...</div>
                <div className='text-lg md:text-xl italic mb-5'>As an experienced developer with expertise in Web Development,
                I am passionate about creating innovative solutions that solve complex problems.
                With a talent for crafting clean, efficient code, I have worked on a wide range of projects,
                from websites to large-scale enterprise applications. Let me help you take your project to the next level!
                </div>
                <div className='flex w-full items-center justify-center lg:justify-start'>
                    <a href='\assets\JayeshChavanResume.pdf' download={true}>
                        <button className='font-medium flex items-center p-2 mr-16 border-b border-blue-500 rounded-md hover:shadow-md text-blue-700'>
                            <FaFileDownload className='inline mr-1 h-5 w-5 animate-bounce' />
                            Resume
                        </button>
                    </a>
                    <a href='https://www.linkedin.com/in/cjayesh/' target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className={media_icon_style}/>
                    </a>
                    <a href="https://www.xing.com/profile/JayeshMangesh_Chavan" target="_blank" rel="noopener noreferrer">
                        <SiXing className={media_icon_style}/>
                    </a>
                    <a href="https://github.com/CJayesh" target="_blank" rel="noopener noreferrer">
                        <BsGithub className={media_icon_style}/>
                    </a>
                    <a href="https://www.hackerrank.com/cJayesh" target="_blank" rel="noopener noreferrer">
                        <SiHackerrank className={media_icon_style}/>
                    </a>
                    <a href="https://www.instagram.com/c._.jayesh/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram className={media_icon_style}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home