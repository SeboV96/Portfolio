import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/tiefling-brujo.jpg'
import IMG2 from '../../assets/tiefling-brujo2.jpg'
import IMG3 from '../../assets/tiefling-brujo3.jpg'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
        </div>
          <h3>Henry PEDI-VERY</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/SeboV96/PF_HENRY-PEDIVERY" className='btn' target='_blank'>Github</a>
          <a href="https://www.linkedin.com/in/sebastian-villa-develop/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>

        <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG2} alt="" />
        </div>
          <h3>Pokemon Project</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/SeboV96/Pokemon-Project" className='btn' target='_blank'>Github</a>
          <a href="https://www.linkedin.com/in/sebastian-villa-develop/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>

        <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG3} alt="" />
        </div>
          <h3>TIC-TAC-TOE</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/SeboV96/TIC-TAC-TOE" className='btn' target='_blank'>Github</a>
          <a href="https://www.linkedin.com/in/sebastian-villa-develop/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>

        
      </div>
    </section>
  )
}

export default Portfolio