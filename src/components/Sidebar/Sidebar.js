import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import letterM from '../../assets/images/letterM.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'

export const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={letterM} alt='logo' />
    </Link>
    <nav>
      <NavLink to='/'>
        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
      </NavLink>
      <NavLink to='/about' className='about-link'>
        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
      </NavLink>
      <NavLink to='/contact' className='contact-link'>
        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
      </NavLink>
    </nav>

    <ul className='socials-list'>
      <li>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/maria-shebeko/'
        >
          <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
        </a>
      </li>
      <li>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/MariaShebeko'
        >
          <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
        </a>
      </li>
      <li>
        <a target='_blank' rel='noreferrer' href='skype:live:mary-zp'>
          <FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
        </a>
      </li>
    </ul>
  </div>
)
