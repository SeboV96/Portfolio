import React, {useRef, useState} from 'react'
import { useTranslation } from 'react-i18next'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {PiMessengerLogoBold} from 'react-icons/pi'
import {FaWhatsapp} from 'react-icons/fa'
import {FiCheckCircle, FiXCircle, FiLoader} from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { t } = useTranslation()
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    setMessage('');

    emailjs.sendForm('service_fxjfxxq', 'template_6dsgseg', form.current, 'm-3ZhoZEWyAOKfKMZ')
      .then((result) => {
          console.log(result.text);
          setIsSuccess(true);
          setMessage(t('contact.form.success'));
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          setIsError(true);
          setMessage(t('contact.form.error'));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id='contact'>
      <h5>{t('contact.subtitle')}</h5>
      <h2>{t('contact.title')}</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>{t('contact.email')}</h4>
            <h5>sebovilla96@gmail.com</h5>
            <a href="mailto:sebovilla96@gmail.com" target='_blank' rel='noreferrer'>{t('contact.sendMessage')}</a>
          </article>

          <article className="contact__option">
            <PiMessengerLogoBold className='contact__option-icon'/>
            <h4>{t('contact.messenger')}</h4>
            <h5>Sebastian Villa</h5>
            <a href="https://m.me/sebito.villa" target='_blank' rel='noreferrer'>{t('contact.sendMessage')}</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>{t('contact.whatsapp')}</h4>
            <h5>+54 3816187168</h5>
            <a href="https://wa.me/5493816187168" target='_blank' rel='noreferrer'>{t('contact.sendMessage')}</a>
          </article>

        </div>
        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={t('contact.form.name')} required />
          <input type="email" name='email' placeholder={t('contact.form.email')} required />
          <textarea name="message" rows="7" placeholder={t('contact.form.message')} required></textarea>
          
          {/* Feedback visual */}
          {message && (
            <div className={`form__message ${isSuccess ? 'success' : isError ? 'error' : ''}`}>
              {isSuccess && <FiCheckCircle className="message__icon" />}
              {isError && <FiXCircle className="message__icon" />}
              <span>{message}</span>
            </div>
          )}
          
          <button 
            type='submit' 
            className='btn btn-primary' 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <FiLoader className="btn__spinner" />
                {t('contact.form.sending')}
              </>
            ) : (
              t('contact.form.submit')
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact