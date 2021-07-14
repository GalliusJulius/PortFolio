import React, {useEffect} from "react"
import ReactFullpage from '@fullpage/react-fullpage'

const fullpageOptions = {
  sectionsColor: ['#282c34', '#ff5f45', '#0798ec','#04D642','#7150F6'],
  callbacks: ['onLeave', 'afterLoad'],
}

export default  ({ data }) => (
  <ReactFullpage
    {...fullpageOptions}
    render={({ state, fullpageApi }) => {
      console.log('render prop change', state)

      if (state.callback === 'onLeave') {
        if (state.direction === 'down') {
          console.log('going down...' + state.origin.index)
        }
      }
      return (
        <div id="fullpage-wrapper">
          <div className="section">
            <h1 className="cp-title">Le mot de la fin</h1>
          </div>
          <div className="section">
            <h1 className="cp-title">Mes connaissances en language</h1>
            <div style={{width: "min-content", margin: "auto"}}>
              <div>
                <p className="cp-text">Java</p>
                <div className="cp-progress-bar">
                  <div className="cp-progression-bar cp-progression-bar-full"></div>
                </div>
              </div>
              <div>
                <p className="cp-text">TypeScript / Javascript (dévelopement mobile)</p>
                <div className="cp-progress-bar">
                  <div className="cp-progression-bar cp-progression-bar-full-low"></div>
                </div>
              </div>
              <div>
                <p className="cp-text">C++ / C</p>
                <div className="cp-progress-bar">
                  <div className="cp-progression-bar cp-progression-bar-medium"></div>
                </div>
              </div>
              <div>
                <p className="cp-text">Python</p>
                <div className="cp-progress-bar">
                  <div className="cp-progression-bar cp-progression-bar-medium"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <h1 className="cp-title">Connaissances en web</h1>
            <div style={{width: "fit-content", margin: "auto"}}>
              <div>
                <p className="cp-text">Angular</p>
                <div className="cp-progress-bar" style={{width: "fit-content", margin: "auto"}}>
                  <div className="cp-progression-bar cp-progression-bar-full"></div>
                </div>
              </div>
              <div>
                <p className="cp-text">React</p>
                <div className="cp-progress-bar" style={{width: "fit-content", margin: "auto"}}>
                  <div className="cp-progression-bar cp-progression-bar-full-low"></div>
                </div>
              </div>
              <div>
                <p className="cp-text">Node</p>
                <div className="cp-progress-bar" style={{width: "fit-content", margin: "auto"}}>
                  <div className="cp-progression-bar cp-progression-bar-full-low"></div>
                </div>
              </div>
              <div>
                <p className="cp-text">Spring</p>
                <div className="cp-progress-bar" style={{width: "fit-content", margin: "auto"}}>
                  <div className="cp-progression-bar cp-progression-bar-low"></div>
                </div>
              </div>
              <div>
                <p className="cp-text">PHP</p>
                <div className="cp-progress-bar" style={{width: "fit-content", margin: "auto"}}>
                  <div className="cp-progression-bar cp-progression-bar-low"></div>
                </div>
              </div>
            </div>
            <p className="cp-text">A cela s'ajoute des notions en devops (JBoss principalement) même si j'ai plutôt l'habitude des services de déploiement continu comme Netlify</p>
            <p className="cp-text">Ainsi que très sommaire en SEO</p>
          </div>
          <div className="section">
            <h1 className="cp-title">Autres notions</h1>
            <div style={{width: "fit-content", margin: "auto"}}>
              <div>
                <p className="cp-text">Motivation</p>
                <div className="cp-progress-bar" style={{width: "fit-content", margin: "auto"}}>
                  <div className="cp-progression-bar cp-progression-bar-motivation"></div>
                </div>
              </div>
              <div>
                <p className="cp-text">Environnement Linux (réseau/server/sécurité)</p>
                <div className="cp-progress-bar" style={{width: "fit-content", margin: "auto"}}>
                  <div className="cp-progression-bar cp-progression-bar-full-low"></div>
                </div>
              </div>
              <div>
                <p className="cp-text">Design</p>
                <div className="cp-progress-bar" style={{width: "fit-content", margin: "auto"}}>
                  <div className="cp-progression-bar cp-progression-bar-low"></div>
                </div>
              </div>
              <div>
                <p className="cp-text">BDD (SQL)</p>
                <div className="cp-progress-bar" style={{width: "fit-content", margin: "auto"}}>
                  <div className="cp-progression-bar cp-progression-bar-low-low"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <p className="cp-text">Et voilà! Merci d'avoir pris le temps de voir ce site</p>
            <p className="cp-text">Il a été réalisé avec le framwork gatsby et est basé sur la libraire fullpage.js pour le style.️</p>
            <p className="cp-text">Je suis à votre disposition si vous avez d'autres questions. 😀️</p>
            <a href="https://www.youtube.com/watch?v=enYdAxVcNZA">
              <div className="cp-start">Petit bonus : comment est-ce que je me réveille chaque matin ?</div>
            </a>
          </div>
        </div>
      )
    }}
  />
)
