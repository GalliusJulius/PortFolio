import React from "react"
import ReactFullpage from '@fullpage/react-fullpage'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const fullpageOptions = {
  sectionsColor: ['#282c34', '#ff5f45', '#0798ec','#04D642','#7150F6'],
  callbacks: ['onLeave', 'afterLoad'],
}

export default  ({ data }) => (
  <ReactFullpage
    {...fullpageOptions}
    render={({ state, fullpageApi }) => {
      console.log('render prop change', state) // eslint-disable-line no-console

      if (state.callback === 'onLeave') {
        if (state.direction === 'down') {
          console.log('going down...' + state.origin.index)
        }
      }
      return (
        <div id="fullpage-wrapper">
          <div className="section">
            <h1 className="cp-title">Mes experiences</h1>
            <p className="cp-text">J'ai eu la chance d'avoir plusieurs d'expériences professionnels ou associatives à côté de mes études</p>
            <p className="cp-text">Elles sont je pense au moins aussi importantes que ma formation</p>
          </div>
          <div className="section">
            <p className="cp-text">Et voila! Je vous invite maintenant à la dernière partie.</p>
            <p className="cp-text">Un petit récapitatif de ma candature ☺️</p>
            <Link to="/Resume/">
              <div className="cp-start">Résumé</div>
            </Link>
          </div>
        </div>

      )
    }}
  />
)
