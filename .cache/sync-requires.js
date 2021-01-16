const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/victor/Documents/git_clone/PortFolio/.cache/dev-404-page.js"))),
  "component---src-pages-experiences-js": hot(preferDefault(require("/Users/victor/Documents/git_clone/PortFolio/src/pages/Experiences.js"))),
  "component---src-pages-formation-js": hot(preferDefault(require("/Users/victor/Documents/git_clone/PortFolio/src/pages/Formation.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/victor/Documents/git_clone/PortFolio/src/pages/index.js"))),
  "component---src-pages-presentation-me-js": hot(preferDefault(require("/Users/victor/Documents/git_clone/PortFolio/src/pages/PresentationMe.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/Users/victor/Documents/git_clone/PortFolio/src/pages/Resume.js")))
}

