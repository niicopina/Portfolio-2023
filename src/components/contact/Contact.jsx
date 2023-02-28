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
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>pinanicolasagustin@gmail.com</h5>
            <a href="mailto:pinanicolasagustin@gmail.com">Send a message</a>

          </article>
          <article className='contact__option'>
            <BsTelephone />
            <h4>Phone</h4>
            <h5>54 011 63612903</h5>
            <a href="mailto:pinanicolasagustin@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin />
            <h4>Linkedin</h4>
            <h5>Nicolás Agustín Piña</h5>
            <a href="https://www.linkedin.com/in/nicolas-agustin-pina/">Send a message</a>
          </article>
        </div>

        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact