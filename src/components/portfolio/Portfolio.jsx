import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pandulce.jpg'
import IMG2 from '../../assets/pandulce.jpg'
import IMG3 from '../../assets/pandulce.jpg'
import IMG4 from '../../assets/pandulce.jpg'
import IMG5 from '../../assets/pandulce.jpg'
import IMG6 from '../../assets/pandulce.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>My recent work</h4>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='porfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="title" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>      
          </article>
          
        <article className='porfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="title" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>          
          
        </article>
        <article className='porfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="title" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>          
          
        </article>
        <article className='porfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="title" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
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