
import { ROUTES_PATH } from '../constants/routes.js'
import firestore from '../Firestore.js'

export default class NewBill {
  constructor({ document, onNavigate }) {
    this.document = document
    this.onNavigate = onNavigate
    console.log("firebase1", firebase)
    const formNewBill = this.document.querySelector(`form[data-testid="form-new-bill"]`)
    console.log("formNewBill", formNewBill)
    formNewBill.addEventListener("submit", this.handleSubmit)
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log("firebase2", firebase)
    firestore
      .bills()
      .add({
        test: 'coucou'
      })
      .then(() => {
        this.onNavigate(ROUTES_PATH['Bills'])
      })
      .catch(error => {
        console.log(error)
      })
  }
}