import React from 'react'
import cryptoVideo from '../assets/pexels-rodnae-productions-8370138.mp4'
import '../css/About.css'

const About = () => {
    return (
        <div className='about-page'>
            <div className='crypto-vid'>
            <video src={cryptoVideo} muted loop autoPlay></video>
            </div>
            <p>I am a firm believer that blockchain technology is the future, and I have a strong desire to be a part of the revolution.
            </p>
        </div>
    )
}

export default About
