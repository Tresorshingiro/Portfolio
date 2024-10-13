import React, {useState} from 'react'
import { Link } from 'react-scroll'
import msg from '../assets/msg.png'
import menu from '../assets/menu.png'
import closeMenu from '../assets/closeMenu.png'
import '../App.css'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to toggle menu

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen); // Toggle menu open/close
  };

  return (
    <div>
      <nav className='navbar'>
        <img src='./logo.png' alt="logo" className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true}  offset={-50} duration={500} className='desktopMenuListItem'>Projects</Link>
        </div>
        <Link to='contact'  smooth={true} offset={-40} duration={500}>
            <button className='desktopMenuBtn'>
            <img src={msg} alt='msg icon'/>
              <p>Contact me</p>
            </button>
        </Link>

        <img
          src={isMobileMenuOpen ? closeMenu : menu} // Switch between menu and close icon
          alt="menu"
          className='mobMenu'
          onClick={toggleMobileMenu}
        />

        <div className={`navMenu ${isMobileMenuOpen ? 'active' : ''}`}> {/* Show menu based on state */}
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={toggleMobileMenu}>
            About
          </Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={toggleMobileMenu}>
            Projects
          </Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={toggleMobileMenu}>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
