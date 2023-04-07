import React from 'react'
import Navbar from './Navbar'

type Props = {
    children: any
}

function Layout({children}: Props) {
  return (
    <>
        <Navbar />
        <div id='content' className='h-screen flex items-center justify-center px-2 sm:pl-44 sm:pr-16 lg:pl-52 lg:pr-16 flex-wrap overflow-auto scroll-smooth'>
            <main>{children}</main>    
        </div>
    </>
  )
}

export default Layout