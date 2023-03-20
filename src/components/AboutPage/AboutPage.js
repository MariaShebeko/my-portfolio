import './AboutPage.scss'
import Loader from 'react-loaders'

import React, { useState, useEffect } from 'react'
import { AnimatedLetters } from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGit,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

export const AboutPage = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className='container about-page'>
        <div className='text-wrapper'>
          <h1>
            <AnimatedLetters
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I'm front-end developer looking for a role in IT company with the
            opportunity to work with the latest technologies on challenging and
            diverse projects.
          </p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my skills.
          </p>
          <p>
            I enjoy developing web applications or web sites. My stack of
            technologies: HTML, CSS, JavaScript, React, Node.js.
          </p>
        </div>

        <div className='cube-wrapper'>
          <div className='cube-spinner'>
            <div className='icon1'>
              <FontAwesomeIcon icon={faReact} color='#5Ed4F4' />
            </div>
            <div className='icon2'>
              <FontAwesomeIcon icon={faHtml5} color='#f06529' />
            </div>
            <div className='icon3'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='icon4'>
              <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
            </div>
            <div className='icon5'>
              <FontAwesomeIcon icon={faGit} color='#ec4d28' />
            </div>
            <div className='icon6'>
              <FontAwesomeIcon icon={faNodeJs} color='#43853d' />
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}
