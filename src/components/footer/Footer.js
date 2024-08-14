import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer>
      <ul className="footer__links">
        <li><a href="#">Accueil</a></li>
        <li><a href="#about">&#192; propos</a></li>
        <li><a href="#competence">Compétence</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Serhat KARABIYIK | All rights reserved</small>
      </div>
    </footer>
  )
}
