import { screen } from "@testing-library/dom"
import DashboardUI, { filteredBills } from "../views/DashboardUI.js"
import Dashboard from "../containers/Dashboard.js"

const bills = [{
    "id": "47qAXb6fIm2zOKkLzMro",
    "vat": "80",
    "fileUrl": "https://firebasestorage.googleapis.com/v0/b/billable-677b6.a…f-1.jpg?alt=media&token=c1640e12-a24b-4b11-ae52-529112e9602a",
    "status": "pending",
    "type": "Hôtel et logement",
    "commentary": "séminaire billable",
    "name": "encore",
    "fileName": "preview-facture-free-201801-pdf-1.jpg",
    "date": "2004-04-04",
    "amount": 400,
    "commentAdmin": "ok",
    "email": "a@a",
    "pct": 20
  },
  {
    "id": "BeKy5Mo4jkmdfPGYpTxZ",
    "vat": "",
    "amount": 100,
    "name": "test1",
    "fileName": "1592770761.jpeg",
    "commentary": "plop",
    "pct": 20,
    "type": "Transports",
    "email": "a@a",
    "fileUrl": "https://firebasestorage.googleapis.com/v0/b/billable-677b6.a…61.jpeg?alt=media&token=7685cd61-c112-42bc-9929-8a799bb82d8b",
    "date": "2001-01-01",
    "status": "refused",
    "commentAdmin": "en fait non"
  },
  {
    "id": "UIUZtnPQvnbFnB0ozvJh",
    "name": "test3",
    "email": "a@a",
    "type": "Services en ligne",
    "vat": "60",
    "pct": 20,
    "commentAdmin": "bon bah d'accord",
    "amount": 300,
    "status": "accepted",
    "date": "2003-03-03",
    "commentary": "",
    "fileName": "facture-client-php-exportee-dans-document-pdf-enregistre-sur-disque-dur.png",
    "fileUrl": "https://firebasestorage.googleapis.com/v0/b/billable-677b6.a…dur.png?alt=media&token=571d34cb-9c8f-430a-af52-66221cae1da3"
  },
  {
    "id": "qcCK3SzECmaZAGRrHjaC",
    "status": "refused",
    "pct": 20,
    "amount": 200,
    "email": "a@a",
    "name": "test2",
    "vat": "40",
    "fileName": "preview-facture-free-201801-pdf-1.jpg",
    "date": "2002-02-02",
    "commentAdmin": "pas la bonne facture",
    "commentary": "test2",
    "type": "Restaurants et bars",
    "fileUrl": "https://firebasestorage.googleapis.com/v0/b/billable-677b6.a…f-1.jpg?alt=media&token=4df6ed2c-12c8-42a2-b013-346c1346f732"
  }
]
describe('Given I am connected as an Admin', () => {
  describe('When I am on Dashboard page, there are bills, and there is one pending', () => {
    test(('Then, filteredBills by pending status should return 1 bill'), () => {
      const filtered_bills = filteredBills(bills, "pending")
      expect(filtered_bills.length).toBe(1)
    })
  })
  describe('When I am on Dashboard page, there are bills, and there is one accepted', () => {
    test(('Then, filteredBills by accepted status should return 1 bill'), () => {
      const filtered_bills = filteredBills(bills, "accepted")
      expect(filtered_bills.length).toBe(1)
    })
  })
  describe('When I am on Dashboard page, there are bills, and there is two refused', () => {
    test(('Then, filteredBills by accepted status should return 2 bills'), () => {
      const filtered_bills = filteredBills(bills, "refused")
      expect(filtered_bills.length).toBe(2)
    })
  })
  describe('When I am on Dashboard page but it is loading', () => {
    test(('Then, Loading page should be rendered'), () => {
      const html = DashboardUI({ loading: true })
      document.body.innerHTML = html
      expect(screen.getAllByText('Loading...')).toBeTruthy()
    })
  })
  describe('When I am on Dashboard page but back-end send an error message', () => {
    test(('Then, Error page should be rendered'), () => {
      const html = DashboardUI({ error: 'some error message' })
      document.body.innerHTML = html
      expect(screen.getAllByText('Erreur')).toBeTruthy()
    })
  })
})