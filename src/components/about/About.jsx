import React from 'react'
import { useTranslation } from 'react-i18next'
import './about.css'
import ME from '../../assets/images/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {LuFolders} from 'react-icons/lu'

const About = () => {
  const { t } = useTranslation()

  return (
    <section 
    id='about'>
  <h5>{t('about.subtitle')}</h5>
  <h2>{t('about.title')}</h2>

  <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt='About image'/>
      </div>
    </div>
    <div className="about__content">
    <div className="about__cards">
      <article className='about__card'>
      <FaAward className='about__icon'/>
      <h5>{t('about.experience')}</h5>
      <small>{t('about.experienceText')}</small>
      </article>

      <article className='about__card'>
      <FiUsers className='about__icon'/>
      <h5>{t('about.clients')}</h5>
      <small>{t('about.clientsText')}</small>
      </article>

      <article className='about__card'>
      <LuFolders className='about__icon'/>
      <h5>{t('about.projects')}</h5>
      <small>{t('about.projectsText')}</small>
      </article>
    </div>

    <p>
    {t('about.description')}
    </p>

    <a href='#contact' className='btn btn-primary'>{t('about.cta')}</a>
    </div>
  </div>
    </section>
  )
}

export default About