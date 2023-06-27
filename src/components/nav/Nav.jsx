import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookmarkCheck} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineContactPhone} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a 
       href='#'
       onClick={()=> setActiveNav('#')} 
       className={activeNav === '#' ? 'active' : ''}>
        <BiHome/>
        </a>
      <a
       href='#about'
       onClick={()=> setActiveNav('#about')} 
       className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser/>
        </a>
      <a 
      href='#experience' 
      onClick={()=> setActiveNav('#experience')} 
      className={activeNav === '#experience' ? 'active' : ''}>
        <BsBookmarkCheck/>
        </a>
      <a 
      href='#services' 
      onClick={()=> setActiveNav('#services')} 
      className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceLine/>
        </a>
      <a 
      href='#contact' 
      onClick={()=> setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' : ''}>
        <MdOutlineContactPhone/>
        </a>
    </nav>
  )
}

export default Nav