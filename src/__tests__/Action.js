import { screen } from "@testing-library/dom"
import BillsUI from "../views/BillsUI.js"

const loading = false
const error = null

describe('Given we are connected as an employee and that we already have sent at least one bill', () => {
  describe('When we are on Bills page', () => {
    test(('Then, it should render Actions'), () => {
      const data = [{
        amount: 400,
        commentAdmin: "ok",
        commentary: "séminaire billable",
        date: "4 Avr. 20",
        email: "a@a",
        fileName: "preview-facture-free-201801-pdf-1.jpg",
        fileUrl: "https://firebasestorage.googleapis.com/v0/b/billable-677b6.a…f-1.jpg?alt=media&token=c1640e12-a24b-4b11-ae52-529112e9602a",
        id: "47qAXb6fIm2zOKkLzMro",
        name: "encore",
        pct: 20,
        status: "Accepté",
        type: "Hôtel et logement",
        vat: "80",
      }]
      const html = BillsUI({ 
        data,
        loading,
        error
       })
       document.body.innerHTML = html
       expect(screen.getByTestId('icon-eye')).toBeTruthy()
    })
  })
})


describe('Given we are connected as an employee that we never never have sent any bill', () => {
  describe('When we are on Bills page', () => {
    test(('Then, it should not render Actions'), () => {
      const data = []

      const html = BillsUI({ 
        data,
        loading,
        error
       })
       document.body.innerHTML = html
       expect(screen.queryByTestId('icon-eye')).toBeNull()
    })
  })
})