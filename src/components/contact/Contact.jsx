import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsTelephone} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>pinanicolasagustin@gmail.com</h5>
            <a href="mailto:pinanicolasagustin@gmail.com" target="_blank">Send a message</a>

          </article>
          <article className='contact__option'>
            <BsTelephone className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>54 011 63612903</h5>
            <a href="https://api.whatsapp.com/send?phone=+1163612903" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Nicolás Agustín Piña</h5>
            <a href="https://www.linkedin.com/in/nicolas-agustin-pina/" target="_blank">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact