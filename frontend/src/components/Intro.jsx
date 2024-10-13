import React from 'react'
import '../App.css'
import { Link } from 'react-scroll'
import bg from '../assets/bg.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Tresor</span> <br /> Software Developer</span>
            <p className='introPara'>I'm a Software Developer with a relentless curiosity for learning and exploring new technologies. <br />I thrive in dynamic environments where innovation and creativity are valued</p>
            <Link to='contact' smooth={true} offset={-40} duration={500}>
              <button className='btn'>Hire Me</button>
            </Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro
