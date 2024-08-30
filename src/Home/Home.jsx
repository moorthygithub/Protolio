import React from 'react'
import './Home.css'
import hand from '../Assests/hand_icon.png'
import arrow from '../Assests/arrow.png'
import hero from '../Assests/hero_image.jpg'
const Home = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <div>
            <div className="hero-hand-icon">
                <p>Hello,It's Me</p>
                <img src={hand} alt="" />
            </div>
            <p className='hero-name'> Moorthy</p>
            <p className='hero-course'>Full Stack Developer</p>
        </div>
        <div className="hero-latest-btn">
            <div>Contact Me</div>
            <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt="" />
      </div>
    </div>

  )
}

export default Home