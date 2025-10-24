import React from 'react'
import { useTranslation } from 'react-i18next'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  const { t } = useTranslation()

  return (
    <section id='services'>
      <h5>{t('services.subtitle')}</h5>
      <h2>{t('services.title')}</h2>

      <div className="container services__container">
       <article className='service'>
        <div className="service__head">
          <h3>{t('services.uiux.title')}</h3>
        </div>

        <ul className='service__list'>
          <li><BsCheck className='service__list-icon'/>
          <p>Intuitive and attractive interface design</p>
          </li>
          
          <li><BsCheck className='service__list-icon'/>
          <p>Application prototyping and wireframing</p>
          </li>

          <li><BsCheck className='service__list-icon'/>
          <p>User experience (UX) optimization</p>
          </li>

          <li><BsCheck className='service__list-icon'/>
          <p>Responsive design for all devices</p>
          </li>
        </ul>
        </article>

         <article className='service'>
        <div className="service__head">
          <h3>{t('services.webdev.title')}</h3>
        </div>

        <ul className='service__list'>
          <li><BsCheck className='service__list-icon'/>
          <p>Web application development with React</p>
          </li>
          
          <li><BsCheck className='service__list-icon'/>
          <p>RESTful APIs with Node.js and Express</p>
          </li>

          <li><BsCheck className='service__list-icon'/>
          <p>MongoDB and PostgreSQL databases</p>
          </li>

          <li><BsCheck className='service__list-icon'/>
          <p>Third-party service integration</p>
          </li>
        </ul>
        </article>

         <article className='service'>
        <div className="service__head">
          <h3>{t('services.consulting.title')}</h3>
        </div>

        <ul className='service__list'>
          <li><BsCheck className='service__list-icon'/>
          <p>Analysis and optimization of existing code</p>
          </li>
          
          <li><BsCheck className='service__list-icon'/>
          <p>Scalable software architecture</p>
          </li>

          <li><BsCheck className='service__list-icon'/>
          <p>Best practices implementation</p>
          </li>

          <li><BsCheck className='service__list-icon'/>
          <p>Web technology mentoring</p>
          </li>
        </ul>
        </article> 
      </div>

    </section>
  )
}

export default Services