/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

/* global window, document */
const scrollTo = (id) => () => {
    const el = document.querySelector(id)
    if (el) return window.scrollTo(0, el.offsetTop - 20)
    return false
  }
  
  export const onRouteUpdate = ({ location: { hash } }) => {
    console.log(location)
    if (hash) {
      window.setTimeout(scrollTo(hash), 10)
    }
  