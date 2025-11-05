import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './testimonials.css'

const Testimonials = () => {
  const { t } = useTranslation()

  const clients = [
    {
      id: 1,
      name: 'Compañía Digital',
      logo: 'Compañía Digital',
      description: t('testimonials.companiaDigital.description'),
      testimonial: t('testimonials.companiaDigital.testimonial')
    },
    {
      id: 2,
      name: 'CMC Language',
      logo: 'CMC Language',
      description: t('testimonials.cmc.description'),
      testimonial: t('testimonials.cmc.testimonial')
    },
    {
      id: 3,
      name: 'Ofinita',
      logo: 'Ofinita',
      description: t('testimonials.ofinita.description'),
      testimonial: t('testimonials.ofinita.testimonial')
    }
  ]

  return (
    <section id='testimonials'>
      <h5>{t('testimonials.subtitle')}</h5>
      <h2>{t('testimonials.title')}</h2>

      <div className="container testimonials__container">
        <div className="testimonials__clients">
          <h3>{t('testimonials.clientsTitle')}</h3>
          <div className="clients__grid">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                className="client__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="client__logo">
                  <h4>{client.logo}</h4>
                </div>
                <p className="client__description">{client.description}</p>
                {client.testimonial && (
                  <div className="client__testimonial">
                    <p className="testimonial__quote">"{client.testimonial}"</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="testimonials__collaboration">
          <h3>{t('testimonials.collaborationTitle')}</h3>
          <p>{t('testimonials.collaborationText')}</p>
          <a href='#contact' className='btn btn-primary'>
            {t('testimonials.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

