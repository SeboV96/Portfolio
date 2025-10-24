import React from 'react'
import { useTranslation } from 'react-i18next'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  const { t } = useTranslation()

  return (
    <section id='experience'>
      <h5>{t('experience.subtitle')}</h5>
      <h2>{t('experience.title')}</h2>

      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>{t('experience.frontend')}</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>{t('experience.experienced')}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>{t('experience.intermediate')}</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>{t('experience.experienced')}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>{t('experience.intermediate')}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>{t('experience.experienced')}</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience_backend">
        <h3>{t('experience.backend')}</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>{t('experience.experienced')}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>{t('experience.experienced')}</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>{t('experience.intermediate')}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>PostgreSQL</h4>
              <small className='text-light'>{t('experience.intermediate')}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Typescript</h4>
              <small className='text-light'>{t('experience.comingSoon')}</small>
              </div>
            </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience