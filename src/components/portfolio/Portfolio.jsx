import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/login.jpg'
import IMG2 from '../../assets/gpt3.jpg'
import IMG3 from '../../assets/form.jpg'
import IMG4 from '../../assets/cards.jpg'
import IMG5 from '../../assets/pandulce.jpg'
import IMG6 from '../../assets/pandulce.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='porfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="title" />
          </div>
          <h3>Log-In Page</h3>
          <div className="portfolio__item-cta">
          <a href="https://niicopina.github.io/Log-In-page/" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>      
          </article>
          
        <article className='porfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="title" />
          </div>
          <h3>GPT-3 page</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/niicopina/GPT-3_np" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>          
          
        </article>
        <article className='porfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="title" />
          </div>
          <h3>Form</h3>
          <div className="portfolio__item-cta">
          <a href="https://niicopina.github.io/formulario/" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>          
          
        </article>
        <article className='porfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="title" />
          </div>
          <h3>Dynamic Cards - CSS</h3>
          <div className="portfolio__item-cta">
          <a href="https://niicopina.github.io/project-Dynamic-Grid/" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>          
          
        </article>
        <article className='porfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="title" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>          
          
        </article>
        <article className='porfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="title" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>          
          
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio