import Link from 'next/link'
import React from 'react'
import { BsBookFill, BsPuzzleFill, BsQuestionCircle, BsFillHouseFill, BsLaptopFill } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'

type Props = {
    icon: 'education' | 'skills' | 'experience' | 'home' | 'menu',
    text?: string,
    link?: string
}

function getIcon(icon_name: string) {
    const classes = 'h-8 w-8';
    switch (icon_name) {
        case 'education':
            return <BsBookFill className={classes}></BsBookFill>
        case 'experience':
            return <BsLaptopFill className={classes}></BsLaptopFill>
        case 'skills':
            return <BsPuzzleFill className={classes}></BsPuzzleFill>
        case 'home':
            return <BsFillHouseFill className={classes}></BsFillHouseFill>
        case 'menu':
            return <AiOutlineMenu className={classes}></AiOutlineMenu>
        default:
            return <BsQuestionCircle className={classes}></BsQuestionCircle>
    }
}

function NavbarItem({ icon, text, link }: Props) {
    return (
        <>
        { link ?
            <Link href={link} scroll={false}>
                <div className='text-white flex items-center flex-col sm:flex-row'>
                    <span>{getIcon(icon)}</span>
                    { text &&
                        <span className='text-xs font-thin sm:font-normal sm:pl-2 sm:text-lg'>{text}</span>
                    }
                </div>
            </Link>
            :
            <div className='text-white flex items-center flex-col sm:flex-row'>
                <span>{getIcon(icon)}</span>
                { text &&
                    <span className='text-xs font-thin sm:font-normal sm:pl-2 sm:text-lg'>{text}</span>
                }
            </div>
        }
        </>
    )
}

export default NavbarItem