import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import NavbarItem from './NavbarItem'

function Navbar() {
  return (
    <>
        <Head>
            <title>My Site</title>
        </Head>
        <div id='navbar' className='absolute z-2 w-fit h-screen px-5 py-1 flex flex-col bg-blue-700 shadow-lg shadow-slate-900'>
            <div id='navbar-header' className='text-center text-white font-bold text-5xl mb-5'>
                <Link href="/#home_page">JC</Link>
            </div>
            <div id='navbar-content' className='flex flex-col flex-grow justify-center'>
                <NavbarItem icon='home' text='Home' link='/#home_page'></NavbarItem>
                <NavbarItem icon='skills' text='Skills' link='/#skills_page'></NavbarItem>
                <NavbarItem icon='experience' text='Experience' link='/#experience_page'></NavbarItem>
                <NavbarItem icon='education' text='Education' link='/#education_page'></NavbarItem>
            </div>
        </div>
    </>
  )
}

export default Navbar