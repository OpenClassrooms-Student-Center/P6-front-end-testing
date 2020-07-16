import { ROUTES_PATH } from '../constants/routes.js'

export default class Bills {
  constructor({ document, onNavigate, firestore }) {
    this.document = document
    this.onNavigate = onNavigate
    this.firestore = firestore
    const buttonNewBill = document.querySelector(`button[data-testid="btn-new-bill"]`)
    buttonNewBill.addEventListener('click', this.handleClick)
    console.log('buttonNewBill', buttonNewBill)
  }

  handleClick = e => {
    this.onNavigate(ROUTES_PATH['NewBill'])
  }

  getBills = () => {
    const userEmail = localStorage.getItem('user') ?
      JSON.parse(localStorage.getItem('user')).email : ""
    console.log('getBills userEmail', userEmail)
    return this.firestore
      .bills()
      .get()
      .then(snapshot =>
        snapshot.docs
          .map(doc => doc.data())
          .filter(bill => bill.email === userEmail)
      )
      .catch(console.log)
  }
}