// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/rogerwilco/github/giveth-galaxy/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/rogerwilco/github/giveth-galaxy/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/rogerwilco/github/giveth-galaxy/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/home/rogerwilco/github/giveth-galaxy/src/pages/page-2.js"))
}

