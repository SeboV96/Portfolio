import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './portfolio.css'
// import IMG1 from '../../assets/images/portfolio/tiefling-brujo.jpg'
import IMG2 from '../../assets/images/portfolio/Pokeapp.jpg'
import IMG3 from '../../assets/images/portfolio/Screenshot_1.jpg'
import IMG4 from '../../assets/images/portfolio/netflix-clone.jpg'
import IMG_CMC from '../../assets/images/portfolio/cmclaguage.png'
import IMG_OFINITA from '../../assets/images/portfolio/Ofinita.png'
import IMG_FUNDAMENTAL from '../../assets/images/portfolio/Fundamental.png'
import IMG_CHAKA from '../../assets/images/portfolio/Chaka.png'
import IMG_SCHUJMAN from '../../assets/images/portfolio/Schujman.png'
import IMG_AYBAR from '../../assets/images/portfolio/AybarPropiedades.png'
import IMG_COINXBET from '../../assets/images/portfolio/CoinXBet.png'



const Portfolio = () => {
  const { t } = useTranslation()

  const data = [
    {
      id: 7,
      image: IMG_COINXBET,
      title: t('portfolio.titles.coinxbet'),
      description: t('portfolio.descriptions.coinxbet'),
      github: '',
      demo: "https://cxbdev.vercel.app"
    },
    {
      id: 1,
      image: IMG_CMC,
      title: t('portfolio.titles.cmc'),
      description: t('portfolio.descriptions.cmc'),
      github: '',
      demo: "https://www.cmclanguage.com"
    },
    {
      id: 2,
      image: IMG_OFINITA,
      title: t('portfolio.titles.ofinita'),
      description: t('portfolio.descriptions.ofinita'),
      github: '',
      demo: "https://www.ofinita.com"
    },
    {
      id: 3,
      image: IMG_FUNDAMENTAL,
      title: t('portfolio.titles.fundamental'),
      description: t('portfolio.descriptions.fundamental'),
      github: '',
      demo: "https://www.fundamentalatam.com"
    },
    {
      id: 4,
      image: IMG_CHAKA,
      title: t('portfolio.titles.chaka'),
      description: t('portfolio.descriptions.chaka'),
      github: '',
      demo: "https://www.fundacionchaka.org"
    },
    {
      id: 5,
      image: IMG_SCHUJMAN,
      title: t('portfolio.titles.schujman'),
      description: t('portfolio.descriptions.schujman'),
      github: '',
      demo: "https://www.schujman.com"
    },
    {
      id: 6,
      image: IMG_AYBAR,
      title: t('portfolio.titles.aybar'),
      description: t('portfolio.descriptions.aybar'),
      github: '',
      demo: "https://www.aybarpropiedades.com"
    },
    {
      id: 8,
      image: IMG2, // Imagen original de Pokemon
      title: t('portfolio.titles.henry'),
      description: t('portfolio.descriptions.henry'),
      github: 'https://github.com/SeboV96/PF_HENRY-PEDIVERY',
      demo: "https://pf-henry-plum.vercel.app"
    },
    {
      id: 9,
      image: IMG2, // Imagen original de Pokemon
      title: t('portfolio.titles.pokemon'),
      description: t('portfolio.descriptions.pokemon'),
      github: "https://github.com/SeboV96/Pokemon-Project",
      demo: "https://pokemon-project-eight.vercel.app/"
    },
    {
      id: 10,
      image: IMG3, // Imagen original de TIC-TAC-TOE
      title: t('portfolio.titles.tictactoe'),
      description: t('portfolio.descriptions.tictactoe'),
      github: "https://github.com/SeboV96/TIC-TAC-TOE",
      demo: "https://tic-tac-toe-one-ruddy.vercel.app"
    },
    {
      id: 11,
      image: IMG4, // Imagen original de Netflix-Clone
      title: t('portfolio.titles.netflix'),
      description: t('portfolio.descriptions.netflix'),
      github: "https://github.com/SeboV96/Netflix-clone",
      demo: "https://github.com/SeboV96/Netflix-clone"
    },
  ]

  return (
    <section id='portfolio'>
      <h5>{t('portfolio.subtitle') || 'My recent work'}</h5>
      <h2>{t('portfolio.title') || 'Portfolio'}</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, github, demo}, index) => {
            return (
              <motion.article 
                key={id} 
                className='portfolio__item'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p className='portfolio__description'>{description}</p>
                <div className='portfolio__item-cta'>
                  {github && <a href={github} className='btn' target='_blank' rel='noreferrer'>{t('portfolio.github') || 'Github'}</a>}
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>
                    {id <= 7 ? (t('portfolio.goToSite') || 'Go to Site') : (t('portfolio.demo') || 'Live Demo')}
                  </a>
                </div>
              </motion.article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio