import React from 'react'
import Navbar from './Navbar'

type Props = {
    children: any
}

function Layout({children}: Props) {
  return (
    <>
        <Navbar />
        <div id='content' className='h-screen flex items-center justify-center pt-40 pb-40 pl-80 pr-60'>
            <main>{children}</main>    
        </div>
    </>
  )
}

export default Layout