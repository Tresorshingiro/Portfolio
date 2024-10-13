import React from 'react'
import '../App.css'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer-container'>
        <div className='social-links'>
          <a href='https://github.com/Tresorshingiro' target='_blank' rel='noopener noreferrer'>
            <img src={github} alt='github'/> 
            <p>Tresor shingiro</p>
          </a>
          <a href='https://www.linkedin.com/in/tresor-shingiro-5706042ab/' target='_blank' rel='noopener noreferrer'>
            <img src={linkedin} alt='Linkedin'/>
            <p>Tresor Shingiro</p>
          </a>
          <a href='https://www.instagram.com/tresorshingiro26/' target='_blank' rel='noopener noreferrer'>
            <img src={instagram} alt='instagram'/>
            <p>tresorshingiro26</p>
          </a>
        </div>
        <p className='footer-text'>&copy; 2024 Tresor Shingiro. All Rights Reserved.</p>
    </div>
    </footer>
  )
}

export default Footer
