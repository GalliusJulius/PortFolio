import React from 'react'
import { Link } from 'gatsby'

import '../style/index.css'

const IndexPage = () => (
    <div className="cp-fullsize-container">
      <h1 className="cp-title">Bienvenue sur ma candidature pour le pic A21!</h1>
      <p className="cp-text">Je vais vous parler de moi et de ce que je veux faire dans le pic 😃</p>
      <p className="cp-text">Et surtout je vais vous montrer que je suis <b>SUPER</b> motivé!</p>
      <p className="cp-text">Bonne navigation !</p>
      <Link to="/Sommaire/">
        <div className="cp-start">Commencer la visite 👀</div>
      </Link>
    </div>
)

export default IndexPage
