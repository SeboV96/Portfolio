import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  const { t } = useTranslation()

  return (
    <header>
      <div className="container header__container">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4>{t('header.greeting')}</h4>
          <h1>{t('header.name')}</h1>
          <h5 className="text-light">{t('header.title')}</h5>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CTA/>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <HeaderSocials/>
        </motion.div>

        <motion.div 
          className="me"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img src={ME} alt='me' />
        </motion.div>

        <motion.a 
          href='#contact' 
          className='scroll__down'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {t('header.scrollDown')}
        </motion.a>
      </div>
    </header>
  )
}

export default Header