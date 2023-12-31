import React from 'react'
import './portfolio.css'
// import IMG1 from '../../assets/tiefling-brujo.jpg'
import IMG2 from '../../assets/Pokeapp.jpg'
import IMG3 from '../../assets/Screenshot_1.jpg'
import IMG4 from '../../assets/netflix-clone.jpg'



const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: "",
      title: 'Henry PEDI-VERY',
      github: 'https://github.com/SeboV96/PF_HENRY-PEDIVERY',
      demo: "https://pf-henry-plum.vercel.app"
    },
    {
      id: 2,
      image: IMG2,
      title: 'Pokemon Project',
      github: "https://github.com/SeboV96/Pokemon-Project",
      demo: "https://pokemon-project-eight.vercel.app/"
    },
    {
      id: 3,
      image: IMG3,
      title: 'TIC-TAC-TOE',
      github: "https://github.com/SeboV96/TIC-TAC-TOE",
      demo: "https://tic-tac-toe-one-ruddy.vercel.app"
    },
    {
      id: 4,
      image: IMG4,
      title: 'Netflix-Clone',
      github: "https://github.com/SeboV96/Netflix-clone",
      demo: "https://github.com/SeboV96/Netflix-clone"
    },
  ]

  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={image} alt={title} />
        </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio