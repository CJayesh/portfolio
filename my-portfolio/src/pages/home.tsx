import Image from 'next/image'
import React from 'react'
import pic from '../../public/images/my-pic.png'
import { BsLinkedin, BsInstagram, BsDownload } from 'react-icons/bs'
import { SiXing } from 'react-icons/si'


function Home() {
    const media_icon_style = 'h-7 w-7 mr-4 cursor-pointer text-blue-700 hover:drop-shadow-md'
    return (
        <div id="home_page" className='flex items-center h-screen'>
            <div>
                <Image src={pic} alt='my-pic' priority></Image>
            </div>
            <div>
                <div className='text-4xl font-bold mb-5 text-blue-700'>Hi, I am Jayesh</div>
                <div className='text-xl italic mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quasi sed 
                    cupiditate eligendi beatae libero consectetur cum non ex, maiores excepturi doloribus odit
                    dolor quidem alias numquam aperiam commodi corporis?
                </div>
                <div className='flex w-full items-center'>
                    <a href='\assets\JayeshChavanResume.pdf' download={true}>
                        <button className='flex items-center p-2 mr-16 border-b border-blue-500 rounded-md hover:shadow-md text-blue-700'>
                            <BsDownload className='inline mr-1 h-5 w-5' />
                            Resume
                        </button>
                    </a>
                    <a href='https://www.linkedin.com/in/cjayesh/' target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className={media_icon_style}/>
                    </a>
                    <a href="https://www.xing.com/profile/JayeshMangesh_Chavan" target="_blank" rel="noopener noreferrer">
                        <SiXing className={media_icon_style}/>
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