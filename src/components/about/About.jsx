import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {LuFolders} from 'react-icons/lu'

const About = () => {
  return (
    <section 
    id='about'>
  <h5>Get To Know</h5>
  <h2>About Me</h2>

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
      <h5>Experience</h5>
      <small>Looking for my First IT job!</small>
      </article>

      <article className='about__card'>
      <FiUsers className='about__icon'/>
      <h5>Clients</h5>
      <small>Coming soon!</small>
      </article>

      <article className='about__card'>
      <LuFolders className='about__icon'/>
      <h5>Proyects</h5>
      <small>5+ completed proyects</small>
      </article>
    </div>

    <p>
    I am passionate about technology and I love interact with it. Being able to create new things seems incredible to me.

I am looking for my first job as a Full Stack Developer, I have the management of technologies such as: •HTML • CSS • JavaScript • NodeJS • MySQL • Scrum • Sequelize • SQL • MongoDB || Mongoose

Also some frameworks and libraries: • Bootstrap • React • Redux • ExpressJS

Do not hesitate to contact me! Together we can create a great project and changes the life of many people!
    </p>

    <a href='#contact' className='btn btn-primary'>Lets Talk!</a>
    </div>
  </div>
    </section>
  )
}

export default About