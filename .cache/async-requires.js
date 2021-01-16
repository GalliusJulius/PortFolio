// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-experiences-js": () => import("./../../../src/pages/Experiences.js" /* webpackChunkName: "component---src-pages-experiences-js" */),
  "component---src-pages-formation-js": () => import("./../../../src/pages/Formation.js" /* webpackChunkName: "component---src-pages-formation-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-presentation-me-js": () => import("./../../../src/pages/PresentationMe.js" /* webpackChunkName: "component---src-pages-presentation-me-js" */),
  "component---src-pages-resume-js": () => import("./../../../src/pages/Resume.js" /* webpackChunkName: "component---src-pages-resume-js" */)
}

