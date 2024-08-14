import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import './contact.css'

import {AiOutlineMail, AiOutlineLinkedin} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'



export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_u82k8ls', 'template_bx9glcr', form.current, '8OHZ9BJlMcrwFC-Oq')
    e.target.reset()
  }

  return (
    <section id='contact'>
        <h2>Contactez-moi</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <AiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>serhat.krbyk.1905@gmail.com</h5>
              <a href="mailto:serhat.krbyk.1905@gmail.com">Envoyez un message</a>
            </article>
            <article className="contact__option">
              <AiOutlineLinkedin className='contact__option-icon'/>
              <h4>Linkedin</h4>
              <h5>Serhat KARABIYIK</h5>
              <a href="https://linkedin.com/in/serhat-karabiyik-a7a503220" target='_blank'>Envoyez un message</a>
            </article>
            <article className="contact__option">
              <BsTelephone className='contact__option-icon'/>
              <h4>Numéro</h4>
              <h5>07 82 33 02 95</h5>
              <a href="tel:+330782330295">Téléphoner</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Votre nom' required />
            <input type="email" name="email" placeholder='Votre Email' required/>
            <textarea name="message" rows="10" placeholder='Votre message ...' required></textarea>
            <button type='submit' className='btn btn-primary'>Envoyez !</button>
          </form>
        </div>
    </section>
  )
}
