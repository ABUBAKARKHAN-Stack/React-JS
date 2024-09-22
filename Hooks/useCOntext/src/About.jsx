import React from 'react'
import { useBioContext } from './BioData'

function About() {
    const { user } = useBioContext()
    return (
        <div>My Name is {user.name}(About). I am {user.age} Years Old.</div>
    )
}

export default About;