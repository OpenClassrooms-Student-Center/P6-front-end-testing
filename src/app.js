import ROUTES  from "./constants/routes.js"

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
  
  const formEmployee = document.getElementById("form-employee")
  const formAdmin = document.getElementById("form-admin")
  
  formEmployee.addEventListener("submit", e => {
      localStorage.setItem("user", JSON.stringify({
        type: "Employee",
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

  return rootDiv
}
 
