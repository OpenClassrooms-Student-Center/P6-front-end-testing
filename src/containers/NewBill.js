
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
    const email = JSON.parse(localStorage.getItem("user")).email

    const createBill = () => {
      firestore
        .bills()
        .add({
          test: 'coucou',
          email: email
        })
        .then(() => {
          this.onNavigate(ROUTES_PATH['Bills'])
        })
        .catch(error => {
          console.log(error)
        })
    }

    // find user, if it does not exist create it
    // add a user field in bills

    firestore
      .user(email)
      .get()
      .then((doc) => {
        if (doc.exists) {
          createBill()
        } else {
          console.log(`Firebase error: document with id ${email} not found`)
          createUser()
          createBill()
        }
      }).catch(error => {
        console.log(error)
      })
  }
}