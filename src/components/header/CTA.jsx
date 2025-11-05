import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import CV_WORD from '../../assets/documents/Sebastian-Villa-FullStack.docx'
import CV_PDF from '../../assets/documents/Sebastian-Villa-FullStack.docx.pdf'

const CTA = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='cta'>
       <div className="cta__dropdown" ref={dropdownRef}>
         <a 
           href="#"
           className='btn'
           onClick={(e) => {
             e.preventDefault()
             setIsOpen(!isOpen)
           }}
         >
           {t('header.downloadCV') || 'Download CV'}
         </a>
         {isOpen && (
           <motion.div 
             className="cta__dropdown-menu"
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -10 }}
           >
             <a href={CV_WORD} download className='cta__dropdown-item'>
               Word
             </a>
             <a href={CV_PDF} download className='cta__dropdown-item'>
               PDF
             </a>
           </motion.div>
         )}
       </div>
       <motion.a 
         href='#contact' 
         className='btn btn-primary cta__main'
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
       >
         {t('header.cta') || '¿Querés construir algo juntos? Contactame →'}
       </motion.a>
    </div>
  )
}

export default CTA