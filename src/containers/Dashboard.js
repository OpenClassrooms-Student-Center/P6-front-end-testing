import { formatDate } from '../utils/format.js'

export default class {
  constructor({ document, onNavigate, firestore, bills }) {
    this.document = document
    this.onNavigate = onNavigate
    this.firestore = firestore
    $('#arrow-icon1').click((e) => this.handleShowTickets(e, bills, 1))
    $('#arrow-icon2').click((e) => this.handleShowTickets(e, bills, 2))
    $('#arrow-icon3').click((e) => this.handleShowTickets(e, bills, 3))
  }

  handleShowTickets(e, bills, index) {
    console.log('click')
    console.log('this.counter', this.counter)
    console.log('bills', bills)

    const filteredBills = (data, status) => {
      return (data && data.length) ?
        data.filter(bill => {
          return bill.status === status
        }) : []
    }
  
    const card = (bill) => {
      const firstAndLastNames = bill.email.split('@')[0]
      const firstName = firstAndLastNames.includes('.') ?
        firstAndLastNames.split('.')[0] : ''
      const lastName = firstAndLastNames.includes('.') ?
      firstAndLastNames.split('.')[1] : firstAndLastNames
  
      return (`
        <div class='bill-card'>
          <div class='bill-card-name-container'>
            <div class='bill-card-name'> ${firstName} ${lastName} </div>
            <span class='bill-card-grey'> ... </span>
          </div>
          <div class='name-price-container'>
            <span> ${bill.name} </span>
            <span> ${bill.amount} € </span>
          </div>
          <div class='date-type-container'>
            <span> ${formatDate(bill.date)} </span>
            <span> ${bill.type} </span>
          </div>
        </div>
      `)
    }
  
    const cards = (bills) => {
      return bills && bills.length ? bills.map(bill => card(bill)).join("") : []
    }

    const getStatus = (index) => {
      switch (index) {
        case 1:
          return "pending"
        case 2:
          return "accepted"
        case 3:
          return "refused"
      }
    }

    if (this.counter === undefined || this.index !== index) this.counter = 0
    if (this.index === undefined || this.index !== index) this.index = index
    if (this.counter % 2 === 0) {
      $(`#arrow-icon${index}`).css({ transform: 'rotate(0deg)'})
      $(`#status-bills-container${this.index}`).html(cards(filteredBills(bills, getStatus(index))))
      this.counter ++
    } else {
      $(`#arrow-icon${index}`).css({ transform: 'rotate(90deg)'})
      $(`#status-bills-container${this.index}`).html("")
      this.counter ++
    }
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
        return bills
      })
      .catch(error => error)
    }
}