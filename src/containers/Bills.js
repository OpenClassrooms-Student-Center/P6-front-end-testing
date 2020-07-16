import { ROUTES_PATH } from '../constants/routes.js'

export default class Bills {
  constructor({ document, onNavigate, firestore }) {
    this.document = document
    this.onNavigate = onNavigate
    this.firestore = firestore
    const buttonNewBill = document.querySelector(`button[data-testid="btn-new-bill"]`)
    if (buttonNewBill) buttonNewBill.addEventListener('click', this.handleClick)
    console.log('buttonNewBill', buttonNewBill)
    this.getBills()
  }

  handleClick = e => {
    console.log("ROUTES_PATH['NewBill']", ROUTES_PATH['NewBill'])
    this.onNavigate(ROUTES_PATH['NewBill'])
  }

  getBills = () => {
    const bills = []
    this.firestore
      .bills()
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => bills.push(doc.data()))
        console.log("bills", bills)
      })
      .catch(console.log)
    return bills
  }
}