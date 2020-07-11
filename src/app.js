import ROUTES  from "./constants/routes.js"

export const handleSubmitEmployee =  e => {
  localStorage.setItem("user", JSON.stringify({
    type: "Employee",
    email: document.querySelector(`input[data-testid="employee-email-input"]`).value,
    password: document.querySelector(`input[data-testid="employee-password-input"]`).value,
    status: "connected"
  }))
  e.preventDefault()
  onNavigate('/employe/note-de-frais')
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
  
  window.onpopstate = () => {
    rootDiv.innerHTML = ROUTES[window.location.pathname]
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
 
