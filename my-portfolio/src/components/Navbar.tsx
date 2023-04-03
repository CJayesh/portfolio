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
        <div id='navbar' className='absolute z-2 w-fit h-screen px-4 py-1 flex flex-col'>
            <div id='navbar-header' className='text-center text-white font-bold text-5xl mb-5'>
                <Link href="/">JC</Link>
            </div>
            <div id='navbar-content' className='flex flex-col flex-grow justify-center'>
                <NavbarItem icon='skills' text='Skills' link='/skills'></NavbarItem>
                <NavbarItem icon='experience' text='Experience' link='/experience'></NavbarItem>
                <NavbarItem icon='education' text='Education' link='/education'></NavbarItem>
            </div>
        </div>
    </>
  )
}

export default Navbar