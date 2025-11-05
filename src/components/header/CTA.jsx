import React, { useState, useRef, useEffect } from 'react'
import CV_WORD from '../../assets/documents/Sebastian-Villa-FullStack.docx'
import CV_PDF from '../../assets/documents/Sebastian-Villa-FullStack.docx.pdf'

const CTA = () => {
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
           Download CV
         </a>
         {isOpen && (
           <div className="cta__dropdown-menu">
             <a href={CV_WORD} download className='cta__dropdown-item'>
               Word
             </a>
             <a href={CV_PDF} download className='cta__dropdown-item'>
               PDF
             </a>
           </div>
         )}
       </div>
       <a href='#contact' className='btn btn-primary'>Contact me!</a>
    </div>
  )
}

export default CTA