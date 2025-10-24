import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookmarkCheck} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineContactPhone} from 'react-icons/md'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const Nav = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeNav, setActiveNav] = useState('#')

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: '#', element: document.querySelector('header') },
        { id: '#about', element: document.querySelector('#about') },
        { id: '#experience', element: document.querySelector('#experience') },
        { id: '#services', element: document.querySelector('#services') },
        { id: '#portfolio', element: document.querySelector('#portfolio') },
        { id: '#contact', element: document.querySelector('#contact') }
      ]

      let currentSection = '#'
      let minDistance = Infinity

      sections.forEach(({ id, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect()
          const distance = Math.abs(rect.top)
          
          // Si la sección está visible y es la más cercana al top
          if (rect.top <= 200 && rect.bottom >= 0 && distance < minDistance) {
            minDistance = distance
            currentSection = id
          }
        }
      })

      setActiveNav(currentSection)
    }

    // Ejecutar al cargar la página
    handleScroll()
    
    // Agregar listener de scroll con throttling para mejor performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', throttledScroll)
    
    // Cleanup
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [])

  // Manejar cambios de URL
  useEffect(() => {
    const path = location.pathname
    if (path === '/') {
      setActiveNav('#')
    } else if (path === '/about') {
      setActiveNav('#about')
      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
    } else if (path === '/experience') {
      setActiveNav('#experience')
      document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })
    } else if (path === '/services') {
      setActiveNav('#services')
      document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
    } else if (path === '/portfolio') {
      setActiveNav('#portfolio')
      document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
    } else if (path === '/contact') {
      setActiveNav('#contact')
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.pathname])

  return (
        <nav>
          <a 
           href='#'
           onClick={(e) => {
             e.preventDefault()
             setActiveNav('#')
             navigate('/')
             document.querySelector('header')?.scrollIntoView({ behavior: 'smooth' })
           }} 
           className={activeNav === '#' ? 'active' : ''}>
            <BiHome/>
            </a>
          <a
           href='#about'
           onClick={(e) => {
             e.preventDefault()
             setActiveNav('#about')
             navigate('/about')
             document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
           }} 
           className={activeNav === '#about' ? 'active' : ''}>
            <AiOutlineUser/>
            </a>
          <a 
          href='#experience' 
          onClick={(e) => {
            e.preventDefault()
            setActiveNav('#experience')
            navigate('/experience')
            document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })
          }} 
          className={activeNav === '#experience' ? 'active' : ''}>
            <BsBookmarkCheck/>
            </a>
          <a 
          href='#services' 
          onClick={(e) => {
            e.preventDefault()
            setActiveNav('#services')
            navigate('/services')
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
          }} 
          className={activeNav === '#services' ? 'active' : ''}>
            <RiServiceLine/>
            </a>
          <a 
          href='#portfolio' 
          onClick={(e) => {
            e.preventDefault()
            setActiveNav('#portfolio')
            navigate('/portfolio')
            document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
          }} 
          className={activeNav === '#portfolio' ? 'active' : ''}>
            <AiOutlineFolderOpen/>
            </a>
          <a 
          href='#contact' 
          onClick={(e) => {
            e.preventDefault()
            setActiveNav('#contact')
            navigate('/contact')
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }} 
          className={activeNav === '#contact' ? 'active' : ''}>
            <MdOutlineContactPhone/>
            </a>
        </nav>
  )
}

export default Nav