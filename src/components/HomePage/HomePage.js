import React, { useState, useEffect } from 'react'
import './HomePage.scss'
import letterM from '../../assets/images/letterM.png'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../config'
import { AnimatedLetters } from '../AnimatedLetters'
import Loader from 'react-loaders'

export const HomePage = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'r', 'i', 'a']
  const workArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    'e',
    'n',
    'd',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className='container home-page'>
        <div className='text-wrapper'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={letterM} alt='name' />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={workArray}
              idx={22}
            />
          </h1>
          <h2> (JavaScript, React)</h2>
          <Link to={ROUTES.contact} className='contact-btn'>
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}
