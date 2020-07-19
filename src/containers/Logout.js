import { ROUTES_PATH } from '../constants/routes.js'

export default class Logout {
  constructor({ onNavigate, localStorage }) {
    this.onNavigate = onNavigate
    this.localStorage = localStorage
    $('#layout-disconnect').click(this.handleClick)
  }
  
  handleClick = (e) => {
    this.localStorage.clear()
    this.onNavigate(ROUTES_PATH['Login'])
  }
} 