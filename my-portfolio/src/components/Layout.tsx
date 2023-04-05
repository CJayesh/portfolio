import React from 'react'
import Navbar from './Navbar'

type Props = {
    children: any
}

function Layout({children}: Props) {
  return (
    <>
        <Navbar />
        <div id='content' className='h-screen flex items-center justify-center pl-80 pr-40 flex-wrap overflow-auto scroll-smooth'>
            <main>{children}</main>    
        </div>
    </>
  )
}

export default Layout