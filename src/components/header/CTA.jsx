import React from 'react'
import CV from '../../assets/Sebastian-Villa-FullStack-1.1.docx'

const CTA = () => {
  return (
    <div className='cta'>
       <a href={CV} download className='btn'>Download CV</a>
       <a href='#contact' className='btn btn-primary'>Contact me!</a>
    </div>
  )
}

export default CTA