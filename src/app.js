import Login from "./views/Login.js"
import Bills from "./views/Bills.js"
import NewBill from "./views/NewBill.js"
import Dashboard from "./views/Dashboard.js"
import DashboardSelected from "./views/DashboardSelected.js"

const routes = {
  '/' : Login,
  '/employe/note-de-frais' : Bills,
  '/employe/note-de-frais/nouvelle' : NewBill,
  '/admin/dashboard' : Dashboard,
  '/admin/dashboard-selected' : DashboardSelected,
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

if (window.location.pathname === "/") {
  document.body.style.backgroundColor="#0E5AE5"
}

const formEmployee = document.getElementById("form-employee")
const formAdmin = document.getElementById("form-admin")

formEmployee.addEventListener("submit", e => {
    localStorage.setItem("user", JSON.stringify({
      type: "User",
      email: document.getElementById('inputEmailEmployee').value,
      password: document.getElementById('inputPasswordEmployee').value,
      status: "connected"
    }))
    e.preventDefault()
    onNavigate('/employe/note-de-frais')
    document.body.style.backgroundColor="#fff"
})

formAdmin.addEventListener("submit", e => {
  localStorage.setItem("user", JSON.stringify({
    type: "Admin",
    email: document.getElementById('inputEmailEmployee').value,
    password: document.getElementById('inputPasswordEmployee').value,
    status: "connected"
  }))
  e.preventDefault()
  onNavigate('/admin/dashboard')
  document.body.style.backgroundColor="#fff"
})