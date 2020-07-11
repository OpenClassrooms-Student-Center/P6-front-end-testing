import ROUTES  from "./constants/routes.js"

let PREVIOUS_LOCATION = ''

export const handleSubmitEmployee =  e => {
  localStorage.setItem("user", JSON.stringify({
    type: "Employee",
    email: document.querySelector(`input[data-testid="employee-email-input"]`).value,
    password: document.querySelector(`input[data-testid="employee-password-input"]`).value,
    status: "connected"
  }))
  e.preventDefault()
  onNavigate('/employe/note-de-frais')
  PREVIOUS_LOCATION='/employe/note-de-frais'
  document.body.style.backgroundColor="#fff"
}

export const handleSubmitAdmin = e => {
  localStorage.setItem("user", JSON.stringify({
    type: "Admin",
    email: document.querySelector(`input[data-testid="employee-email-input"]`).value,
    password: document.querySelector(`input[data-testid="employee-password-input"]`).value,
    status: "connected"
  }))
  e.preventDefault()
  onNavigate('/admin/dashboard')
  PREVIOUS_LOCATION='/admin/dashboard'
  document.body.style.backgroundColor="#fff"
}

export default () => {
  console.log('App')
  const rootDiv = document.getElementById('root')
  rootDiv.innerHTML = ROUTES[window.location.pathname]
  
  window.onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
    rootDiv.innerHTML = ROUTES[pathname]
  }
  
  window.onpopstate = (e) => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log('PREVIOUS_LOCATION', PREVIOUS_LOCATION)
    console.log('user', user)

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
  
  const formEmployee = document.querySelector(`form[data-testid="form-employee"]`)
  formEmployee.addEventListener("submit", handleSubmitEmployee)
  
  const formAdmin = document.querySelector(`form[data-testid="form-admin"]`)
  formAdmin.addEventListener("submit", handleSubmitAdmin)

  return rootDiv
}
 
