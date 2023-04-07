import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import NavbarItem from './NavbarItem'
import styles from './Navbar.module.css'

function Navbar() {
    let [mobile_nav_expand, updateMobileNavExpand] = useState(false);
    return (
        <>
            <Head>
                <title>My Site</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
            </Head>
            <nav className='hidden sm:block fixed h-full w-fit bg-blue-700 shadow-lg shadow-slate-900'>
                <div className='text-center text-white font-bold px-4 mt-2 text-5xl'>
                    <Link href="/#home_page">JC</Link>
                </div>
                <ul className={styles.nav_ul}>
                    <li><NavbarItem icon='home' text='Home' link='/#home_page'></NavbarItem></li>
                    <li><NavbarItem icon='skills' text='Skills' link='/#skills_page'></NavbarItem></li>
                    <li><NavbarItem icon='experience' text='Experience' link='/#experience_page'></NavbarItem></li>
                    <li><NavbarItem icon='education' text='Education' link='/#education_page'></NavbarItem></li>
                </ul>
            </nav>
            <nav className='block sm:hidden fixed h-full w-16 ml-3 pt-3 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.25)]'>
                <ul className={styles.nav_ul_mobile}>
                    <li onClick={() => updateMobileNavExpand(!mobile_nav_expand)}>
                        { mobile_nav_expand ?
                            <span className='text-white font-bold text-3xl'>JC</span>
                            :
                            <NavbarItem icon='arrow_down'></NavbarItem>
                        }
                    </li>
                    <li className={mobile_nav_expand ? styles.show : styles.hide}><NavbarItem icon='home' text='Home' link='/#home_page'></NavbarItem></li>
                    <li className={mobile_nav_expand ? styles.show : styles.hide}><NavbarItem icon='skills' text='Skills' link='/#skills_page'></NavbarItem></li>
                    <li className={mobile_nav_expand ? styles.show : styles.hide}><NavbarItem icon='experience' text='Experience' link='/#experience_page'></NavbarItem></li>
                    <li className={mobile_nav_expand ? styles.show : styles.hide}><NavbarItem icon='education' text='Education' link='/#education_page'></NavbarItem></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar