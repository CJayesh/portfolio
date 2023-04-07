import Link from 'next/link'
import React, { ReactElement, ReactNode } from 'react'
import { BsBookFill, BsPuzzleFill, BsQuestionCircle, BsFillHouseFill, BsLaptopFill } from 'react-icons/bs'

type Props = {
    icon: 'education' | 'skills' | 'experience' | 'home',
    text: string,
    link: string
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
        default:
            return <BsQuestionCircle className={classes}></BsQuestionCircle>
    }
}

function NavbarItem({ icon, text, link }: Props) {
    return (
        <Link href={link} scroll={false}>
            <div className='text-white flex items-center'>
                <span>{getIcon(icon)}</span>
                <span className='pl-2 text-lg hidden sm:inline'>{text}</span>
            </div>
        </Link>
    )
}

export default NavbarItem