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
            <h1 className="cp-title">Mes expériences</h1>
            <p className="cp-text">J'ai eu la chance d'avoir plusieurs expériences professionnelles ou associatives à côté de mes études</p>
            <p className="cp-text">Je pense qu'elles sont tout aussi importantes que ma formation</p>
          </div>
          <div className="section">
            <div className="slide">
              <h1 className="cp-title">Expérience pro : freelance</h1>
              <p className="cp-text">Depuis Octobre dernier, je me suis lancé en freelance web et mobile.</p>
              <p className="cp-text">En plus de gagner un peu d'argent, cela m'apprend à travailler avec des clients ainsi que monter en compétences</p>
              <p className="cp-text">Actuellement je travaille pour une startup de mesure de qualité de l'air</p>
              <p className="cp-text">Je développe une application sous react native, elle permet de faire les relevés avec des capteurs et de les partager</p>
              <Img className="cp-big-image" style={{width: "150px"}} fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
            </div>
            <div className="slide">
              <h1 className="cp-title">Expérience pro : TNO9 chez Amadeus</h1>
              <Img className="cp-big-image" fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
              <p className="cp-text">Je suis actuellement en TNO9 que je réalise chez Amadeus à Sofia Antipolis</p>
              <p className="cp-text">Ma mission est de refaire une application qui est devenue trop vieille pour être maintenue</p>
              <p className="cp-text">J'ai dû donc faire un retro-engineering de l'ancienne, une maquette de la prochaine application ainsi qu'un choix pour les technologies</p>
              <p className="cp-text">J'ai développé l'application côté front-end sous Angular et je suis en train de finir le back-end sous Spring</p>
              <p className="cp-text">Ce stage a été ma première expérience dans une grosse société avec un système d'information aussi complexe</p>
            </div>
            <div className="slide">
              <h1 className="cp-title">Expérience pro : stage de fin de DUT</h1>
              <p className="cp-text">J'ai réalisé mon stage de fin de DUT dans une équipe de recherche en robotique du LORIA (INRIA)</p>
              <p className="cp-text">J'ai découvert là-bas le monde de la recherche ainsi que le framework ROS</p>
              <p className="cp-text">J'ai travaillé là-bas sur des drones (les intels aero pour vous donner une idée)</p>
              <p className="cp-text">L'objectif était de faire de la navigation autonome en sous-terrain (donc sans GPS) en se basant sur des algos d'odométrie</p>
              <p className="cp-text">Ce que j'ai pu faire : créer des modules permettant de contrôler les drones</p>
              <p className="cp-text">Faire des vols autonomes (avec un plan de vol + des détections d'obstacles)</p>
              <p className="cp-text">Implémenter des algorithmes d'odométrie sur les drones</p>
              <Img className="cp-big-image" fluid={data.allFile.edges[2].node.childImageSharp.fluid} />
            </div>
          </div>
          <div className="section">
            <div className="slide">
              <h1 className="cp-title">Expérience : 24h des IUT</h1>
              <p className="cp-text">Le principe est simple : des équipes de 6 de tous les IUT de France et 3 épreuves de 8h : web, IA et sécurité</p>
              <p className="cp-text">C'est là que j'ai appris à travailler dans le rush et même si ce n'était que 24h j'ai vraiment beaucoup appris</p>
              <p className="cp-text">Avec mon équipe nous sommes arrivés 3ème au classement général, une belle perf comme on dit dans le milieu</p>
            </div>
            <div className="slide">
              <h1 className="cp-title">Expérience : la nuit de l'informatique</h1>
              <p className="cp-text">Même genre que les 24h des IUT mais dans toute la France</p>
              <p className="cp-text">L'expérience fut vraiment super, le point fort était que nous n'étions pas que avec des DUT donc nous avons pu beaucoup échanger!</p>
            </div>
          </div>
          <div className="section">
            <div className="slide">
              <h1 className="cp-title">Assos : Imaginarium Festival</h1>
              <Img className="cp-big-image" fluid={data.allFile.edges[3].node.childImageSharp.fluid} />
              <p className="cp-text">J'étais dev à l'IF édition 2020</p>
              <p className="cp-text">Une très belle expérience aussi bien humainement que techniquement</p>
              <p className="cp-text">J'ai compris que participer aux associations me plaisait énormément</p>
              <p className="cp-text">Nous avions réalisé un site avec gatsby (genre de react) et commencé une application sous flutter</p>
            </div>
            <div className="slide">
              <h1 className="cp-title">Assos Fablab UTC et fablab IUT</h1>
              <Img className="cp-big-image" fluid={data.allFile.edges[4].node.childImageSharp.fluid} />
              <p className="cp-text">L'une des seules assos à l'IUT, je m'amusais avec des petits robots / applications web</p>
              <p className="cp-text">Je l'ai aussi faite à l'UTC mais j'étais très peu actif..</p>
            </div>
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

export const query = graphql`
  query {
      allFile(
        sort: {order: ASC, fields: name}
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "section3" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
`
