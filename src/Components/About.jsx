import React from 'react'
import Carousel from 'react-multi-carousel'
import cat from '../images/cat-image.png'
import cat2 from '../images/chadcat.jpg'
import cat3 from '../images/catglasses.jpg'
import { PiHandWavingLight } from 'react-icons/pi'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 901 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

const About = () => {
  return (
    <section className="info-section">
      <Carousel
        infinite={true}
        autoPlaySpeed={4000}
        autoPlay={true}
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
      >
        <div className="foto-container">
          <img src={cat} className="foto"></img>
        </div>
        <div className="foto-container">
          <img src={cat2} className="foto"></img>
        </div>
        <div className="foto-container">
          <img src={cat3} className="foto"></img>
        </div>
      </Carousel>
      <article className="info-article">
        <div className="info">
          <h1>
            Hello <PiHandWavingLight className="wave"></PiHandWavingLight>,{' '}
            <br></br> i'm DawalaDeny
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis, quo reprehenderit dicta repellat velit autem sit
            tempora? Cum, ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis, quo reprehender consectetur quaerat?
          </p>
        </div>
      </article>
      
    </section>
  )
}

export default About
