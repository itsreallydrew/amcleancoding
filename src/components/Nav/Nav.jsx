import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Nav.css'
import github from '../../assets/github.svg'
import twitter from '../../assets/twitter.svg'
import linkedIn from '../../assets/linkedin.svg'


const Nav = () => {
    return (
        <div className='nav'>
            <Link smooth to='/projects'>Projects</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/about' >About</Link>
            <a href="https://docs.google.com/document/d/1vhwqPW7YZ822H0L7rRRy5G0CUGDh0OSU2niu1bcHaQo/edit?usp=sharing">Resume</a>
            <a href = "mailto: a.mclean2526@gmail.com">Contact Me</a>
            <div className='social-link'>
            <a href="https://www.linkedin.com/in/iamandrewmclean/"><img src={linkedIn} alt="" /></a>
            </div>
            <div className='social-link'>
            <a href="https://github.com/itsreallydrew"><img src={github} alt="" /></a>
            </div>
            <div className='social-link'>
            <a href="https://twitter.com/am_cleancoding"><img src={twitter} alt="" /></a>
            </div>
        </div>
    )
}

export default Nav
