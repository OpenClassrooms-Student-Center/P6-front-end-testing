import Login from "./views/Login.js"
import NoteDeFrais from "./views/NotesDeFrais.js"
import NouvelleNoteDeFrais from "./views/nouvelleNoteDeFrais.js"
import Dashboard from "./views/Dashboard.js"
import DashboardSelected from "./views/DashboardSelected.js"

const routes = {
  '/' : Login,
  '/employe/note-de-frais' : NoteDeFrais,
  '/employe/note-de-frais/nouvelle' : NouvelleNoteDeFrais,
  '/admin/dashboard' : Dashboard,
  '/admin/dashboard-selected' : DashboardSelected,
}

const store = {}
 
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

if (window.location.pathname === "/") {
  document.body.style.backgroundColor="#0E5AE5"
}

const formEmployee = document.getElementById("form-employee")
const formAdmin = document.getElementById("form-admin")

formEmployee.addEventListener("submit", e => {
    store["user"] = {
      type: "Employee",
      email: document.getElementById('inputEmailEmployee').value,
      password: document.getElementById('inputPasswordEmployee').value
    }
    console.log("store", JSON.stringify(store))
    e.preventDefault()
    onNavigate('/employe/note-de-frais')
    document.body.style.backgroundColor="#fff"
})

formAdmin.addEventListener("submit", e => {
  store["user"] = {
    type: "Admin",
    email: document.getElementById('inputEmailEmployee').value,
    password: document.getElementById('inputPasswordEmployee').value
  }
  console.log("store", JSON.stringify(store))
  e.preventDefault()
  onNavigate('/admin/dashboard')
  document.body.style.backgroundColor="#fff"
})