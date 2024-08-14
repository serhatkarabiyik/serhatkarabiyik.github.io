import React from 'react'
import CV from '../../doc/cv.pdf'

export default function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Télécharger CV</a>
        <a href="#contact" className='btn btn-primary'>Discutons !</a>
    </div>
  )
}
