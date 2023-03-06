import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>Nico Piña</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/nicolas-agustin-pina/"><BsLinkedin/></a>
          <a href="https://www.instagram.com/"><FiInstagram/></a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Nico Piña</small>
        </div>
    </footer>
  )
}

export default Footer