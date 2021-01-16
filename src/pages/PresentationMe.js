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
            <h1 className="cp-title">D'où je viens, qui-suis je ?</h1>
            <p className="cp-text">Tout d'abord enchanté.</p>
            <p className="cp-text">Je m'apelle Victor Moreliere j'ai 21 ans et à travers ce site j'espere vous montrer qui je suis et ce que je peux apporter au PIC dans la team info.</p>
            <p className="cp-text">Slide vers le bas pour en savoir plus.</p>
          </div>
          <div className="section">
              <h1 className="cp-title">Ça part de là !</h1>
              <p className="cp-text">Je suis né dans la banlieue de Rouen (Mont St aignant)</p>
              <p className="cp-text">J'y suis resté jusque mes 5 ans.</p>
              <Img className="cp-big-image" fixed={data.file.childImageSharp.fixed} />
          </div>
          <div className="section">
            <div className="slide">
              <h1 className="cp-title">Le TER-TER !</h1>
              <p className="cp-text">J'ai ensuite eu l'incroyable chance de déménager et de m'enraciner dans l'une des plus belles regions de France : LA LORRAINE.</p>
              <p className="cp-text">Je vivais à St Avold, à côté de la frontière allemande et pas loin de Metz.</p>
              <p className="cp-text">Une région rude par son climat, les vestiges de la guerre MAIS magnifique par ces habitants et ces liqueurs.</p>
              <Img className="cp-big-image" fixed={data.file.childImageSharp.fixed} />
            </div>
            <div className="slide">
              <h1 className="cp-title">Ce que je faisais</h1>
              <p className="cp-text">C'est là-bas que j'ai fait mon primaire, college, lycée.</p>
              <p className="cp-text">J'ai appris à faire pleins de choses dans les champs et les forêts, jeune : des purs cabanes et plus vieux des purs soirées.</p>
              <p className="cp-text">C'est là-bas également que j'ai rencontré des amis qui me sont encore très cher.</p>
              <p className="cp-text">Je faisais beaucoup de sport (à l'époque : foot, natation, judo).</p>
              <p className="cp-text">Je jouais également aux jeux vidéos (ce qui n'a pas changé pour le coup). 😇</p>
            </div>
            <div className="slide">
              <h1 className="cp-title">Fun fact</h1>
              <p className="cp-text">C'est dans ma petit ville mosellane que Miss France 2021 a fait sa première apparition (noraj).</p>
            </div>
          </div>
          <div className="section">
            <h1 className="cp-title">Début de la vie adulte!</h1>
            <p className="cp-text">Nous y reviendrons mais j'ai fait mon DUT informatique à Nancy.</p>
            <p className="cp-text">Ce fut donc pendant 2 ans la découverte de la vie étudiante "loin" des parents.</p>
            <p className="cp-text">Ville réelement sous-côté ! 😔</p>
          </div>
          <div className="section">
            <p className="cp-text">Voila pour le breve présentation me concernant 😁</p>
            <p className="cp-text">Maintenant on va passer à la partie CV!</p>
            <Link to="/Formation/">
              <div className="cp-start">Continuer</div>
            </Link>
          </div>
        </div>
      )
    }}
  />
)

export const query = graphql`
  query {
    file(relativePath: { eq: "RouenMap.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 500, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
