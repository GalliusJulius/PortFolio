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
            <h1 className="cp-title">Mes formations</h1>
            <p className="cp-text">Dans cette section, je vais vous présenter mes formations et ce que j'ai pu y apprendre qui serait utile pour le PIC.</p>
          </div>
          <div className="section">
            <h1 className="cp-title">Lycée</h1>
            <Img className="cp-big-image" fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
            <p className="cp-text">J'ai fait un BAC S SI option ISN.</p>
            <p className="cp-text">C'est là que j'ai découvert le code :</p>
            <ul style={{width: "fit-content", margin: "auto"}}>
              <li className="cp-text" style={{textAlign:"left"}}>Le python en ISN</li>
              <li className="cp-text" style={{textAlign:"left"}}>Un peu de web (html/css) également en ISN</li>
              <li className="cp-text" style={{textAlign:"left"}}>Arduino en Science de l'ingénieur</li>
            </ul>
            <p className="cp-text">Concretement je ne savais pas faire grand chose mais ça me plaisait</p>
          </div>
          <div className="section">
            <h1 className="cp-title">DUT</h1>
            <Img className="cp-big-image" fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
            <p className="cp-text">Un choix par défaut, ma terminale n'ayant pas été à la hauteur de l'algo APB j'ai eu mon dernier choix..</p>
            <p className="cp-text">Cependant maintenant je pense réelement que cette formation me correspondait</p>
            <p className="cp-text">J'ai découvert beaucoup avec notamment :</p>
            <ul style={{width: "fit-content", margin: "auto"}}>
              <li className="cp-text" style={{textAlign:"left"}}>Les langages logiciels : Java, C, Python</li>
              <li className="cp-text" style={{textAlign:"left"}}>Le web : HTML, CSS, JavaScript, PHP (Symfony)</li>
              <li className="cp-text" style={{textAlign:"left"}}>Les BDD : SQL / PLSQL</li>
              <li className="cp-text" style={{textAlign:"left"}}>Les réseaux, la sécurité informatique</li>
              <li className="cp-text" style={{textAlign:"left"}}>La gestion / conception de projets informatiques</li>
            </ul>
            <p className="cp-text">C'est là donc que j'ai appris à coder et le mieu possible. J'ai surkiffé et j'ai fini 2ème sur une promo de 140 ce qui m'a ouvert toutes les portes post DUT info.</p>
          </div>
          <div className="section">
            <h1 className="cp-title">UTC</h1>
            <Img className="cp-big-image" fluid={data.allFile.edges[2].node.childImageSharp.fluid} />
            <p className="cp-text">Venant de DUT mes matières à l'UTC étaient plutôt dédiées à rattraper mon niveau scientifique.</p>
            <p className="cp-text">Je trouve que j'ai surtout appris (pour l'informatique) en dehors des cours avec les assocs, les projets.. (prochaine section)</p>
            <p className="cp-text">Comme matière d'informatique j'ai fait : SY31, MI01, LO21, NF16</p>
            <p className="cp-text">Sinon : MT11 (2x..), FQ01 (le traquenard), GE37, LC14..</p>
          </div>
          <div className="section">
            <p className="cp-text">Voila pour mes formations, très orienté informatique</p>
            <p className="cp-text">Je t'invite à cliquer sur la boutton pour voir la partie sur mes expériences</p>
            <Link to="/Experiences/">
              <div className="cp-start">Experiences</div>
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
          relativeDirectory: { eq: "section2" }
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
