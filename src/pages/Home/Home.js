import React from 'react'

import './Home.css'
import img from '../../assets/img/nizar.jpeg'
import { faGithub, faInstagram, faLinkedin, faWhatsapp, } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  return (
    <div className='home'>
      <div className='photo'>
        <img src={img} />
      </div>
      <div className='identity'>
        <span>NIZAR MARIFAT</span>
        <i>Programmer based in Jakarta</i>
        <div className='social-media'>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} className="effect-3 effect" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} className="effect-3 effect" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} className="effect-3 effect" />
          </a>

        </div>
      </div>
    </div>
  )
}

export default Home