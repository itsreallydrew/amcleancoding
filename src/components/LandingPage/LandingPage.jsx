import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/personal-brand-profile-pic-twitter.png'
import '../../css/LandingPage.css'
import video from '../../assets/pixelated-3d-logo-video.mp4'

const LandingPage = () => {
    return (
        <div id='logo-page'>
            <video src={video} muted loop autoPlay></video>
            {/* <div id='logo'>
                <span></span>
                <img id='image' src={logo} alt="logo"/> */}
            {/* </div> */}
        </div>
    )
}

export default LandingPage
