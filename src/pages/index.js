import React from 'react'
import { Link } from 'gatsby'

import '../style/index.css'

const IndexPage = () => (
    <div className="cp-fullsize-container">
      <h1 className="cp-title">Bienvenue sur ma candidature pour le pic P21</h1>
      <p className="cp-text">Le site a pour but de me présenter de façon moins formel :)</p>
      <p className="cp-text">Et aussi de vous montrer ce que je sais faire !</p>
      <p className="cp-text">Bonne navigation !</p>
      <Link to="/PresentationMe/">
        <div className="cp-start">Commencer</div>
      </Link>
    </div>
)

export default IndexPage
