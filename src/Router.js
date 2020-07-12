import { ROUTES, ROUTES_PATH } from "./constants/routes.js"
import { PREVIOUS_LOCATION } from "./containers/Login.js"

export default () => {
  const rootDiv = document.getElementById('root')
  rootDiv.innerHTML = ROUTES[window.location.pathname]
  
  window.onNavigate = (pathname) => {
    console.log('on navigate')

    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
    rootDiv.innerHTML = ROUTES[pathname]
    if (pathname === ROUTES_PATH['Bills']) {
      const divIcon1 = document.getElementById('layout-icon1')
      const divIcon2 = document.getElementById('layout-icon2')
      divIcon1.classList.add('active-icon')
      divIcon2.classList.remove('active-icon')
    } else if (pathname === ROUTES_PATH['NewBill']) {
      const divIcon1 = document.getElementById('layout-icon1')
      const divIcon2 = document.getElementById('layout-icon2')
      divIcon1.classList.remove('active-icon')
      divIcon2.classList.add('active-icon')
    }
  }
  
  window.onpopstate = (e) => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (window.location.pathname === "/" && !user) {
      document.body.style.backgroundColor="#0E5AE5"
      rootDiv.innerHTML = ROUTES[window.location.pathname]
    } else if (user) {
      onNavigate(PREVIOUS_LOCATION)
    }
  }

  if (window.location.pathname === "/") {
    document.body.style.backgroundColor="#0E5AE5"
  }

  return rootDiv
}
 
