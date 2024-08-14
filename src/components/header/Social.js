import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

export default function Social() {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/serhat-karabiyik-a7a503220" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/serhatkarabiyik" target="_blank"><FaGithub /></a>
    </div>
  )
}
