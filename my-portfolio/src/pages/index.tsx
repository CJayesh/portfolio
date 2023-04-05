import React from 'react'
import Home from './home'
import Skills from './skills'
import Experience from './experience'
import Education from './education'


type Props = {}

function index({ }: Props) {
    return (
        <>
            <Home></Home>
            <Skills></Skills>
            <Experience></Experience>
            <Education></Education>
        </>
    )
}

export default index