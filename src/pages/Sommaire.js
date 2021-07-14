import React from 'react'
import { Link } from 'gatsby'

import '../style/index.css'

const SommairePage = () => (
    <div className="cp-fullsize-container">
        <h1 className="cp-title">Sommaire du site</h1>
        <ul>
          <Link to="/PresentationMe/">
            <li>Qui suis-je</li>
          </Link>
          <Link to="/Candidature/">
            <li>Ce que je demande dans le pic</li>
          </Link>
          <Link to="/Formation/">
            <li>Mes formations</li>
          </Link>
          <Link to="/Experiences">
            <li>Mes expériences (assos + pro)</li>
          </Link>
          <Link to="Resume">
            <li>Résumé de ma candidature</li>
          </Link>
        </ul>
    </div>
)

export default SommairePage
