import React from 'react'
import './about.css';



export default function About() {
  return (
    <section id='about'>
        
        <h2>&#192; Propos</h2>

        <div className="container about__container">
          <p>
            J'aide les entreprises et les particuliers à créer leurs site web et à offrir une expérience utilisateur exceptionnelle.
            Je suis passionné par la conception de sites Web.  
            Mon objectif est d'améliorer le Web en concevant de superbe expérience, d’aider un maximum de personne à développer leurs projets. 
            Que ce soit pour un projet d'application web, de site personnel ou encore un portfolio.
          </p>
        </div>

        <div className="container about__formation">
          <h4>Formation</h4>
          <div className="formation">
              <h5>2020 - 2022</h5>
              <h3>DUT Informatique</h3>
              <p>IUT Reims-Châlons-Charleville</p>
          </div>
          
          <div className="formation">
              <h5>2020</h5>
              <h3>Baccalauréat Scientifique</h3>
              <p>Lycée Jean de La Fontaine</p>
              <p>02400 Château-Thierry</p>
          </div>
        </div>
    </section>
  )
}
