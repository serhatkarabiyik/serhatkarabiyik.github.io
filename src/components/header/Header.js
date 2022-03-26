import React from 'react'
import CTA from './CTA'
import './header.css'
import Social from './Social'
import Moi from '../../doc/avatar.png'

import { Typewriter } from 'react-simple-typewriter'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour, je suis</h5>
        <h1>Serhat KARABIYIK</h1>
        <h5 className="text-light">
          Développeur 
        <Typewriter
            words={[' Full-Stack !', ' React !', ' PHP !', ' Symfony !']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={90}
            deleteSpeed={100}
            delaySpeed={1500}
          />
        </h5>
        <CTA></CTA>
        <div className='to'>
          <Social></Social>
          <div className="moi">
            <img src={Moi}  alt="Moi" />
          </div>
        </div>
        
      </div>
    </header>
  )
}
