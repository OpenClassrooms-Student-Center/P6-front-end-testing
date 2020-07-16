import { ROUTES_PATH } from '../constants/routes.js'

export const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  const ye = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(date)
  const mo = new Intl.DateTimeFormat('fr', { month: 'short' }).format(date)
  const da = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(date)
  const month = mo.charAt(0).toUpperCase() + mo.slice(1)
  return `${parseInt(da)} ${month.substr(0,3)}. ${ye.toString().substr(0,2)}`
}

export const formatStatus = (status) => {
  switch (status) {
    case "pending":
      return "En attente"
    case "accepted":
      return "Accepté"
    case "refused":
      return "Refused"
  }
}

export default class Bills {
  constructor({ document, onNavigate, firestore }) {
    this.document = document
    this.onNavigate = onNavigate
    this.firestore = firestore
    const buttonNewBill = document.querySelector(`button[data-testid="btn-new-bill"]`)
    buttonNewBill.addEventListener('click', this.handleClickNewBill)
    const iconEye = document.querySelectorAll(`div[data-testid="icon-eye"]`)
    if (iconEye) iconEye.forEach((icon, index) => icon.addEventListener('click', this.handleClickIconEye))
    const iconDownload = document.querySelectorAll(`div[data-testid="icon-download"]`)
    if (iconDownload) iconDownload.forEach((icon, index) => icon.addEventListener('click', this.handleClickIconDownload))
    $('#modaleFile').on('show.bs.modal', function (event) {
      $(this).find(".modal-body").html(`<img src=https://firebasestorage.googleapis.com/v0/b/billable-677b6.appspot.com/o/justificatifs%2Fpreview-facture-free-201801-pdf-1.jpg?alt=media&token=5f9e9bc5-b23a-4595-a13f-d2084a3934c0" />`)
    })
  }

  handleClickNewBill = e => {
    this.onNavigate(ROUTES_PATH['NewBill'])
  }

  handleClickIconEye = (index) => {
    $('#modaleFile').modal('show')
  }

  handleClickIconDownload = (e) => {
    console.log(e)
    // https://blog.logrocket.com/programmatic-file-downloads-in-the-browser-9a5186298d5c/
  }

  getBills = () => {
    const userEmail = localStorage.getItem('user') ?
      JSON.parse(localStorage.getItem('user')).email : ""
    console.log('getBills userEmail', userEmail)
    return this.firestore
      .bills()
      .get()
      .then(snapshot => {
        const bills = snapshot.docs
        .map(doc => ({
          ...doc.data(),
          date: formatDate(doc.data().date),
          status: formatStatus(doc.data().status)
        }))
        .filter(bill => bill.email === userEmail)
        return bills
      })
      .catch(console.log)
  }
}