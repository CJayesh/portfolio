import Image from 'next/image'
import React from 'react'
import pic from '../../public/images/my-pic.png'
import { BsLinkedin, BsInstagram, BsDownload } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import Link from 'next/link'

function Home() {
    const media_icon_style = 'h-6 w-6 mr-4 cursor-pointer'
    return (
        <div className='flex items-center'>
            <div>
                <Image src={pic} alt='my-pic'></Image>
            </div>
            <div>
                <div className='text-4xl font-bold mb-5'>Hi, I am Jayesh</div>
                <div className='text-2xl italic mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quasi sed 
                    cupiditate eligendi beatae libero consectetur cum non ex, maiores excepturi doloribus odit
                    dolor quidem alias numquam aperiam commodi corporis?
                </div>
                <div className='flex w-full items-center'>
                    <button className='flex items-center p-1 mr-16 border-b border-blue-500 rounded-md'><BsDownload className='inline mr-1 h-5 w-5' />Resume</button>
                    <a href='https://www.linkedin.com/in/cjayesh/'>
                        <BsLinkedin className={media_icon_style}/>
                    </a>
                    <a href="mailto:chavan.jayesh.15121996@gmail.com">
                        <SiGmail className={media_icon_style}/>
                    </a>
                    <a href="https://www.instagram.com/c._.jayesh/">
                        <BsInstagram className={media_icon_style}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home