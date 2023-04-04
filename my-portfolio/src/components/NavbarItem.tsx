import Link from 'next/link'
import React, { ReactElement, ReactNode } from 'react'
import { BsBook, BsPuzzle, BsQuestionCircle } from 'react-icons/bs'
import { HiOfficeBuilding } from 'react-icons/hi'

type Props = {
    icon: 'education' | 'skills' | 'experience',
    text: string,
    link: string
}

function getIcon(icon_name: string) {
    const classes = 'h-6 w-6';
    switch (icon_name) {
        case 'education':
            return <BsBook className={classes}></BsBook>
        case 'experience':
            return <HiOfficeBuilding className={classes}></HiOfficeBuilding>
        case 'skills':
            return <BsPuzzle className={classes}></BsPuzzle>
        default:
            return <BsQuestionCircle className={classes}></BsQuestionCircle>
    }
}

function NavbarItem({ icon, text, link }: Props) {
    return (
        <Link href={link} scroll={false}>
            <div className='text-white mb-3 p-1 flex items-center hover:text-blue-300'>
                {getIcon(icon)}
                <span className='pl-2 text-lg'>{text}</span>
            </div>
        </Link>
    )
}

export default NavbarItem