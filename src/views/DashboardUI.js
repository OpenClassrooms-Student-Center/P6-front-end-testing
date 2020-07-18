import VerticalLayout from './VerticalLayout.js'
import ErrorPage from "./ErrorPage.js"
import LoadingPage from "./LoadingPage.js"

import ArrowIcon from '../assets/svg/arrow.js'
import BigBillableIcon from '../assets/svg/big_billable.js'
import DashboardFormUI from './DashboardFormUI.js'
import { formatDate } from '../utils/format.js'


export default ({ data, loading, error }) => {

  const pendingBills = (data) => {
    console.log('data = error,', data)
    return (data && typeof data === 'object' && data.length) ?
      data.filter(bill => {
        return bill.status === "pending"
      }) : []
  }

  const validBills = (data) => {
    return (data && data.length) ?
      data.filter(bill => bill.status === "valid") : []
  }

  const refusedBills = (data) => {
    return (data && data.length) ?
      data.filter(bill => bill.status === "refused") : []
  }

  const card = (bill) => {
    console.log('bill', bill)
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

  const selected = false
  const children = selected ? DashboardFormUI() : (`
    <div class="centered-svg-container"> ${BigBillableIcon} </div>
  `)

  if (loading) {
    return LoadingPage()
  } else if (error) {
    return ErrorPage()
  }

  return (`
    <div class='layout'>
      ${!selected ? VerticalLayout(120) : VerticalLayout(220)}
      <div class='dashboard-content'>
        <div class='bills-feed'>
          <div class='status-bills-header'>
            <h3> En attente (${pendingBills(data).length}) </h3>
            <span>${ArrowIcon}</span>
          </div>
          <div class='status-bills-container'>
            ${cards(pendingBills(data))}
          </div>
          
          <div class='status-bills-container'>
            <div class='status-bills-header' style='margin-top: 20px;'>
              <h3> Validé (${validBills(data).length}) </h3>
              <span>${ArrowIcon}</span>
            </div>
            ${cards(validBills(data))}
          </div>

          <div class='status-bills-container'>
            <div class='status-bills-header' style='margin-top: 20px;'>
              <h3> Refusé (${refusedBills(data).length}) </h3>
              <span>${ArrowIcon}</span>
            </div>
            ${cards(refusedBills(data))}
          </div>
        </div>
        <div class="dashboard-right-container">
          <h3> Validations </h3>
          ${children}
        </div>
      </div>
    </div>`
  )
}