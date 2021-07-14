import React from 'react'
import {graphql, Link} from 'gatsby'

import '../style/index.css'
import ReactFullpage from '@fullpage/react-fullpage'
import Img from "gatsby-image";

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
      <h1 className="cp-title">Qu'est ce que je peux bien demander?</h1>
      <p className="cp-text">Dans cette section je vais vous parler des 3 postes qui m'intéressent dans le pic</p>
      <p className="cp-text">En vous expliquant pourquoi ils me plaisent et ce que je veux mettre en place</p>
    </div>
    <div className="section">
      <div className="slide">
        <h1 className="cp-title">Appro biere</h1>
        <p className="cp-text">Et oui, pas de l'info en 1er choix!</p>
        <p className="cp-text">J'aimerais bien participer au défi que constitue la transition vers un nouveau fournisseur</p>
        <p className="cp-text">Je pense avoir le sérieux, la rigueur ainsi que l'assiduité pour ce poste</p>
        <p className="cp-text">Sans compter que j'adore la biere (et aussi le poiré)</p>
        <p className="cp-text">Évidement même si j'étais appro bière je resterai disponible pour la team info</p>
      </div>
      <div className="slide">
        <h1 className="cp-title">Illustration de mon amour pour la bière</h1>
        <Img className="cp-big-image" fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
      </div>
    </div>
    <div className="section">
      <h1 className="cp-title">Resp info / team info</h1>
      <p className="cp-text">Objectif 1er : la <b>CONTINUITÉ</b></p>
      <p className='cp-text'>Avec mon expérience je pourrai former la nouvelle team</p>
      <p className='cp-text'>Quoi qu'il arrive l'app est en dev pour une sortie à la rentrée</p>
      <p className='cp-text'>Déjà expérimenté le "pire scénario" avec le covid et les bons rush</p>
      <p className='cp-text'>Toujours être force de proposition </p>
    </div>
    <div className="section">
      <h1 className="cp-title">Et voilà</h1>
      <p>Tu sais tout sur mes ambitions!</p>
      <p>Et maintenant passons à mes formations :)</p>
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
      allFile(
        sort: {order: ASC, fields: name}
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "section4" }
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


