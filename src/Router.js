import { ROUTES, ROUTES_PATH } from "./constants/routes.js"
import { PREVIOUS_LOCATION } from "./containers/Login.js"
import Bills from "./containers/Bills.js"
import NewBill from "./containers/NewBill.js"
import firestore from "./Firestore.js"
import BillsUI from "./views/BillsUI.js"

export default () => {
  const rootDiv = document.getElementById('root')
  rootDiv.innerHTML = ROUTES({ pathname: window.location.pathname })
  
  window.onNavigate = (pathname) => {
    console.log('on navigate')

    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
    if (pathname === ROUTES_PATH['Bills']) {
      // const bills = new Bills({ document, onNavigate, firestore })
      // const data = bills.getBills()
      // rootDiv.innerHTML = ROUTES({ pathname, data })
      const data = [{
        amount: 1799,
        commentary: "Appareil photo pour l'évènement Billable",
        date: "2019-01-16",
        email: "cedric.hiely@billable.com",
        justificatifs: "https://firebasestorage.googleapis.com/v0/b/billable-677b6.appspot.com/o/justificatifs%2F1592770761.jpeg?alt=media&token=27677e56-5f10-4332-9059-b668d652a891",
        name: "Appareil photo",
        pct: 20,
        status: "pending",
        type: "IT et électronique",
        vat: ""
      }]
      rootDiv.innerHTML = ROUTES({ pathname, data })
      new Bills({ document, onNavigate, firestore })

      const divIcon1 = document.getElementById('layout-icon1')
      const divIcon2 = document.getElementById('layout-icon2')
      divIcon1.classList.add('active-icon')
      divIcon2.classList.remove('active-icon')
    } else if (pathname === ROUTES_PATH['NewBill']) {
      rootDiv.innerHTML = ROUTES({ pathname })
      new NewBill({ document, onNavigate, firestore })
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
  return null
}
 
