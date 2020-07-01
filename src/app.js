import signin from "./views/signin.js"
import bills from "./views/bills.js"

const routes = {
  '/' : signin,
  '/bills' : bills,
}
 
const rootDiv = document.getElementById('root')
rootDiv.innerHTML = routes[window.location.pathname]

window.onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  rootDiv.innerHTML = routes[pathname]
}

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]
}