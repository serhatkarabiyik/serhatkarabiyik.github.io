import React from "react";
import "./portfolio.css";

import im1 from "../../doc/LaMuse.png";
import im2 from "../../doc/splash.png";

const data = [
  {
    id: 1,
    image: im1,
    title: "La Muse",
    description:
      "Ce site web permet de donner de l'inspiration aux artistes qui en sont en manques. L'artiste choisi un oeuvre et une image de fond. L'intelligence artificielle en génère une autre.",
    competences: "HTML, CSS, Javascript, PHP, MySQL",
  },
  {
    id: 2,
    image: im2,
    title: "Splash",
    description:
      "Création d'une application vitrine avec figma, nous avons crée un prototype d'application de chat.",
    competences: "Figma",
  },
];
export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, description, competences }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <p>Déscription : {description}</p>
              <p>Compétences : {competences}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
