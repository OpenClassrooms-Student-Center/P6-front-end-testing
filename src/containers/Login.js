
import { ROUTES_PATH } from '../constants/routes.js'
export let PREVIOUS_LOCATION = ''

// we use a class so as to test its methods in e2e tests
export default class Login {
  constructor({ document, localStorage, onNavigate, PREVIOUS_LOCATION }) {
    this.document = document
    this.localStorage = localStorage
    this.onNavigate = onNavigate
    this.PREVIOUS_LOCATION = PREVIOUS_LOCATION
    const formEmployee = this.document.querySelector(`form[data-testid="form-employee"]`)
    formEmployee.addEventListener("submit", this.handleSubmitEmployee)
    const formAdmin = this.document.querySelector(`form[data-testid="form-admin"]`)
    formAdmin.addEventListener("submit", this.handleSubmitAdmin)
  }
  handleSubmitEmployee = e => {
    this.localStorage.setItem("user", JSON.stringify({
      type: "Employee",
      email: e.target.querySelector(`input[data-testid="employee-email-input"]`).value,
      password: e.target.querySelector(`input[data-testid="employee-password-input"]`).value,
      status: "connected"
    }))
    e.preventDefault()
    this.onNavigate(ROUTES_PATH['Bills'])
    this.PREVIOUS_LOCATION = ROUTES_PATH['Bills']
    PREVIOUS_LOCATION = this.PREVIOUS_LOCATION
    this.document.body.style.backgroundColor="#fff"
  }

  handleSubmitAdmin = e => {
    localStorage.setItem("user", JSON.stringify({
      type: "Admin",
      email: e.target.querySelector(`input[data-testid="admin-email-input"]`).value,
      password: e.target.querySelector(`input[data-testid="admin-password-input"]`).value,
      status: "connected"
    }))
    e.preventDefault()
    this.onNavigate(ROUTES_PATH['Dashboard'])
    this.PREVIOUS_LOCATION = ROUTES_PATH['Dashboard']
    PREVIOUS_LOCATION = this.PREVIOUS_LOCATION
    document.body.style.backgroundColor="#fff"
  }
} 