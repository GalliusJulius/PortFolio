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
            <p className="cp-text">Dans cette section, je vais vous présenter mes formations et ce que j'ai pu y apprendre, et ce qui serait utile pour le PIC.</p>
          </div>
          <div className="section">
            <h1 className="cp-title">Lycée</h1>
            <Img className="cp-big-image" fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
            <p className="cp-text">J'ai fait un BAC S SI option ISN.</p>
            <p className="cp-text">C'est là que j'ai découvert le code :</p>
            <ul style={{width: "fit-content", margin: "auto"}}>
              <li className="cp-text">Le python en ISN</li>
              <li className="cp-text">Un peu de web (html/css) également en ISN</li>
              <li className="cp-text">Arduino en Science de l'ingénieur</li>
            </ul>
            <p className="cp-text">concrètement je ne savais pas faire grand chose mais ça me plaisait</p>
          </div>
          <div className="section">
            <h1 className="cp-title">DUT</h1>
            <Img className="cp-big-image" fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
            <p className="cp-text">Un choix par défaut, ma terminale n'ayant pas été à la hauteur de l'algo APB j'ai eu mon dernier choix..</p>
            <p className="cp-text">Cependant maintenant je pense réellement que cette formation me correspondait</p>
            <p className="cp-text">J'ai beaucoup découvert avec notamment :</p>
            <ul style={{width: "fit-content", margin: "auto"}}>
              <li className="cp-text" >Les langages logiciels : Java, C, Python</li>
              <li className="cp-text" >Le web : HTML, CSS, JavaScript, PHP (Symfony)</li>
              <li className="cp-text" >Les BDD : SQL / PLSQL</li>
              <li className="cp-text" >Les réseaux, la sécurité informatique</li>
              <li className="cp-text" >La gestion / conception de projets informatiques</li>
            </ul>
            <p className="cp-text">C'est là donc que j'ai appris à coder et le mieux possible. J'ai surkiffé et j'ai fini 2ème sur une promo de 140 ce qui m'a ouvert toutes les portes post DUT info.</p>
          </div>
          <div className="section">
            <h1 className="cp-title">UTC</h1>
            <Img className="cp-big-image" fluid={data.allFile.edges[2].node.childImageSharp.fluid} />
            <p className="cp-text">Venant de DUT mes matières à l'UTC étaient plutôt dédiées à rattraper mon niveau scientifique.</p>
            <p className="cp-text">Je trouve que j'ai surtout appris (pour l'informatique) en dehors des cours avec les assos, les projets.. (prochaine section)</p>
            <p className="cp-text">Comme matières d'informatique j'ai fait : SY31, MI01, LO21, NF16</p>
            <p className="cp-text">Sinon : MT11 (2x..), FQ01 (le traquenard), GE37, LC14..</p>
          </div>
          <div className="section">
            <p className="cp-text">Voilà pour mes formations, très orientée informatique</p>
            <p className="cp-text">Je vous invite à cliquer sur le boutton pour voir la partie sur mes expériences</p>
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
