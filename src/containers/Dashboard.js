
export default class {
  constructor({ document, onNavigate, firestore }) {
    this.document = document
    this.onNavigate = onNavigate
    this.firestore = firestore
    this.getBillsAllUsers()
  }

  getBillsAllUsers = () => {
    return this.firestore
      .bills()
      .get()
      .then(snapshot => {
        const bills = snapshot.docs
        .map(doc => ({
          ...doc.data(),
          date: doc.data().date,
          status: doc.data().status
        }))
        console.log(bills)
        return bills
      })
      .catch(console.log)
    }
}