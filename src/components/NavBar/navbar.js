import React, { useState } from 'react';
import "./navbar.css";
import logo from '../../assets/logo (1).png';
import contact from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />

      {/* Desktop Menu */}
      <div className="desktopMenulist">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={50} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass='active' to='certifications' spy={true} smooth={true} offset={50} duration={500} className="desktopMenuListItem">Certifications</Link>
        <Link activeClass='active' to='education' spy={true} smooth={true} offset={50} duration={500} className="desktopMenuListItem">Education</Link>
      </div>

      {/* Contact Button */}
      <button
        onClick={() => {
          document.getElementsByClassName('contact')[0].scrollIntoView({ behavior: 'smooth' });
        }}
        className="desktopMenuContact"
      >
        <img src={contact} alt="contact" className="desktopMenuImg" /> Contact Me
      </button>

      {/* Mobile Menu Icon */}
      <img
        src={menu}
        alt="menu"
        className='mobMenu'
        onClick={() => setShowMenu(!showMenu)}
      />

      {/* Mobile Dropdown Menu */}
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='certifications' spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Certifications</Link>
        <Link activeClass='active' to='education' spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Education</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
