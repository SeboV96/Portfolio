import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGlobe } from 'react-icons/fi'
import './languageSelector.css'

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const selectorRef = useRef(null)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setIsOpen(false)
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  // Cerrar selector cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <motion.div
      ref={selectorRef}
      className="language-selector"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="language-toggle">
        <motion.button
          className="language-trigger"
          onClick={toggleOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiGlobe className="language-icon" />
        </motion.button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="language-options"
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                className={`language-option ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EN
              </motion.button>
              <motion.button
                className={`language-option ${i18n.language === 'es' ? 'active' : ''}`}
                onClick={() => changeLanguage('es')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ES
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default LanguageSelector
