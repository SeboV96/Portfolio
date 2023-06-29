import React from 'react'
import './footer.css'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SVILLADEVELOPER</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/sebito.villa" target='_blank'><FaFacebookF/></a>
        <a href="https://instagram.com/sebitovilla/" target='_blank'><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/sebastian-villa-develop/" target='_blank'><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SVILLADEVELOPER. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer