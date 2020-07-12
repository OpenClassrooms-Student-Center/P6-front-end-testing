
export let PREVIOUS_LOCATION = ''

export default () => {
  const handleSubmitEmployee =  e => {
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
  
  const handleSubmitAdmin = e => {
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
  
  const formEmployee = window.document.querySelector(`form[data-testid="form-employee"]`)
  formEmployee.addEventListener("submit", handleSubmitEmployee)
  
  const formAdmin = window.document.querySelector(`form[data-testid="form-admin"]`)
  formAdmin.addEventListener("submit", handleSubmitAdmin)

  return null
}
