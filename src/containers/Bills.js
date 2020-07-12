import { ROUTES_PATH } from '../constants/routes.js'

export default class Bills {
  constructor({ document, onNavigate }) {
    this.document = document
    this.onNavigate = onNavigate
    const buttonNewBill = document.querySelector('#btn-new-bill')
    if (buttonNewBill) buttonNewBill.addEventListener('click', this.handleClick)
  }

  handleClick = e => {
    this.onNavigate(ROUTES_PATH['NewBill'])
  }
}