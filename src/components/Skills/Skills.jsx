import React from 'react'
import '../../css/Skills.css'
import ReactLogo from '../../assets/react.svg'
import GitLogo from '../../assets/git.svg'
import CssLogo from '../../assets/css3.svg'
import HtmlLogo from '../../assets/html5.svg'
import JavaScriptLogo from '../../assets/javascript.svg'
import SolidityLogo from '../../assets/solidity.svg'
import NodeJsLogo from '../../assets/nodedotjs.svg'
import SassLogo from '../../assets/sass.svg'
import GimpLogo from '../../assets/gimp.svg'
import MongoLogo from '../../assets/mongodb.svg'

const Skills = () => {
    return (
        <div className='all-skills'>
            <div className='skill-logo'><img src={ReactLogo} alt="" srcset="" />React</div>
            <div className='skill-logo'><img src={HtmlLogo} alt="" srcset="" />HTML5</div>
            <div className='skill-logo'><img src={CssLogo} alt="" srcset="" />CSS3</div>
            <div className='skill-logo'><img src={JavaScriptLogo} alt="" srcset="" />JavaScript</div>
            <div className='skill-logo'><img src={NodeJsLogo} alt="" srcset="" />Node.js</div>
            <div className='skill-logo'><img src={GitLogo} alt="" srcset="" />Git</div>
            <div className='skill-logo'><img src={SassLogo} alt="" srcset="" />Sass</div>
            <div className='skill-logo'><img src={SolidityLogo} alt="" srcset="" />Solidity</div>
            <div className='skill-logo'><img src={GimpLogo} alt="" srcset="" />Gimp</div>
            <div className='skill-logo'><img src={MongoLogo} alt="" srcset="" />MongoDB</div>
        </div>
    )
}

export default Skills
