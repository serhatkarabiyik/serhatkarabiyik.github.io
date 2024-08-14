import React from 'react'
import './competence.css'

import {AiOutlineHtml5, AiOutlineConsoleSql} from 'react-icons/ai'
import {FaCss3Alt, FaReact, FaSymfony, FaPhp, FaNodeJs} from 'react-icons/fa'
import {DiJavascript} from 'react-icons/di'

export default function Competence() {
  return (
    <section id='competence'>
        <h2>Mes compétences</h2>

        <div className="container competence__container">
          <div className="competence__frontend">
              <h3>Front-End</h3>
              <div className="competence__content">
                <article className="competence_detail">
                  <AiOutlineHtml5 className='competence_detail-icon'/>
                  <h4>HTML</h4>
                </article>
                <article className="competence_detail">
                  <FaCss3Alt className='competence_detail-icon'/>
                  <h4>CSS</h4>
                </article>
                <article className="competence_detail">
                  <DiJavascript className='competence_detail-icon'/>
                  <h4>Javascript</h4>
                </article>
                <article className="competence_detail">
                  <FaReact className='competence_detail-icon'/>
                  <h4>React</h4>
                </article>
              </div>
          </div>
          <div className="competence__backend">
          <h3>Back-End</h3>
              <div className="competence__content">
                <article className="competence_detail">
                  <FaPhp className='competence_detail-icon'/>
                  <h4>PHP</h4>
                </article>
                <article className="competence_detail">
                  <AiOutlineConsoleSql className='competence_detail-icon'/>
                  <h4>SQL</h4>
                </article>
                <article className="competence_detail">
                  <FaNodeJs className='competence_detail-icon'/>
                  <h4>NodeJS</h4>
                </article>
                <article className="competence_detail">
                  <FaSymfony className='competence_detail-icon'/>
                  <h4>Symfony</h4>
                </article>
              </div>
          </div>
        </div>
    </section>
  )
}
