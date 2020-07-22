import { fireEvent, screen } from "@testing-library/dom"
import userEvent from '@testing-library/user-event'
import DashboardFormUI from "../views/DashboardFormUI.js"
import DashboardUI from "../views/DashboardUI.js"
import Dashboard, { filteredBills, cards } from "../containers/Dashboard.js"
import { ROUTES } from "../constants/routes"
import { localStorageMock } from "../__mocks__/localStorage.js"

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
    "pct": 20,
    "email": "john.snow@billable.com"
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
    test('Then, filteredBills by pending status should return 1 bill', () => {
      const filtered_bills = filteredBills(bills, "pending")
      expect(filtered_bills.length).toBe(1)
    })
  })
  describe('When I am on Dashboard page, there are bills, and there is one accepted', () => {
    test('Then, filteredBills by accepted status should return 1 bill', () => {
      const filtered_bills = filteredBills(bills, "accepted")
      expect(filtered_bills.length).toBe(1)
    })
  })
  describe('When I am on Dashboard page, there are bills, and there is two refused', () => {
    test('Then, filteredBills by accepted status should return 2 bills', () => {
      const filtered_bills = filteredBills(bills, "refused")
      expect(filtered_bills.length).toBe(2)
    })
  })
  describe('When I am on Dashboard page but it is loading', () => {
    test('Then, Loading page should be rendered', () => {
      const html = DashboardUI({ loading: true })
      document.body.innerHTML = html
      expect(screen.getAllByText('Loading...')).toBeTruthy()
    })
  })
  describe('When I am on Dashboard page but back-end send an error message', () => {
    test('Then, Error page should be rendered', () => {
      const html = DashboardUI({ error: 'some error message' })
      document.body.innerHTML = html
      expect(screen.getAllByText('Erreur')).toBeTruthy()
    })
  })

  describe('When I am on Dashboard page and I click on arrow', () => {
    test('Then, tickets list should be unfolding, and cars should contain first and lastname', () => {
      const html = DashboardUI({ data: bills })
      document.body.innerHTML = html

      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      const firestore = null

      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      const dashboard = new Dashboard({
        document, onNavigate, firestore, bills, localStorage: window.localStorage
      })
      const handleShowTickets1 = jest.fn((e) => dashboard.handleShowTickets(e, bills, 1)) 
      const handleShowTickets2 = jest.fn((e) => dashboard.handleShowTickets(e, bills, 2))    
      const handleShowTickets3 = jest.fn((e) => dashboard.handleShowTickets(e, bills, 3))    

      const icon1 = screen.getByTestId('arrow-icon1')
      const icon2 = screen.getByTestId('arrow-icon2')
      const icon3 = screen.getByTestId('arrow-icon3')

      icon1.addEventListener('click', handleShowTickets1)
      userEvent.click(icon1)
      expect(handleShowTickets1).toHaveBeenCalled()
      
      icon2.addEventListener('click', handleShowTickets2)
      userEvent.click(icon2)
      expect(handleShowTickets2).toHaveBeenCalled()

      icon3.addEventListener('click', handleShowTickets3)
      userEvent.click(icon3)
      expect(handleShowTickets3).toHaveBeenCalled()

    })
  })

  describe('When I am on Dashboard page and I click on edit icon of a card', () => {
    test('Then, right form should be filled', () => {
      const html = cards(bills)
      document.body.innerHTML = html

      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      const firestore = null

      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      const dashboard = new Dashboard({
        document, onNavigate, firestore, bills, localStorage: window.localStorage
      })

      const handleEditTicket = jest.fn((e) => dashboard.handleEditTicket(e, bills[0], bills))   
      const iconEdit = screen.getByTestId('open-bill47qAXb6fIm2zOKkLzMro')
      iconEdit.addEventListener('click', handleEditTicket)
      userEvent.click(iconEdit)
      expect(handleEditTicket).toHaveBeenCalled()
      userEvent.click(iconEdit)
      expect(handleEditTicket).toHaveBeenCalled()
    })
  })

  describe('When I am on Dashboard and there are no bills', () => {
    test('Then, no cards should be shown', () => {
      const html = cards([])
      document.body.innerHTML = html

      const iconEdit = screen.queryByTestId('open-bill47qAXb6fIm2zOKkLzMro')
      expect(iconEdit).toBeNull()
    })
  })
})

describe('Given I am connected as Admin, and I am on Dashboard page, and I clicked on a pending bill', () => {
  describe('When I click on accept button', () => {
    test('I should be sent on Dashboard with big billable icon instead of form', () => {
      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Admin'
      }))
      const html = DashboardFormUI(bills[0])
      document.body.innerHTML = html
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      const firestore = null
      const dashboard = new Dashboard({
        document, onNavigate, firestore, bills, localStorage: window.localStorage
      })

      const acceptButton = screen.getByTestId("btn-accept-bill-d")
      const handleAcceptSubmit = jest.fn((e) => dashboard.handleAcceptSubmit(e, bills[0]))
      acceptButton.addEventListener("click", handleAcceptSubmit)
      fireEvent.click(acceptButton)
      expect(handleAcceptSubmit).toHaveBeenCalled()
      const bigBillableIcon = screen.queryByTestId("big-billable-icon")
      expect(bigBillableIcon).toBeTruthy()
    })
  })
  describe('When I click on refuse button', () => {
    test('I should be sent on Dashboard with big billable icon instead of form', () => {
      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Admin'
      }))
      const html = DashboardFormUI(bills[0])
      document.body.innerHTML = html
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      const firestore = null
      const dashboard = new Dashboard({
        document, onNavigate, firestore, bills, localStorage: window.localStorage
      })
      const refuseButton = screen.getByTestId("btn-refuse-bill-d")
      const handleRefuseSubmit = jest.fn((e) => dashboard.handleRefuseSubmit(e, bills[0]))
      refuseButton.addEventListener("click", handleRefuseSubmit)
      fireEvent.click(refuseButton)
      expect(handleRefuseSubmit).toHaveBeenCalled()
      const bigBillableIcon = screen.queryByTestId("big-billable-icon")
      expect(bigBillableIcon).toBeTruthy()
    })
  })
})

describe('Given I am connected as Admin and I am on Dashboard page and I clicked on a bill', () => {
  describe('When I click on the icon eye', () => {
    test('A modal should open, showing the file', () => {
      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Admin'
      }))
      const html = DashboardFormUI(bills[0])
      document.body.innerHTML = html
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      const firestore = null
      const dashboard = new Dashboard({
        document, onNavigate, firestore, bills, localStorage: window.localStorage
      })

      const handleClickIconEye = jest.fn(dashboard.handleClickIconEye)
      const eye = screen.getByTestId('icon-eye-d')
      eye.addEventListener('click', handleClickIconEye)
      userEvent.click(eye)
      expect(handleClickIconEye).toHaveBeenCalled()

      const modale = screen.getByTestId('modaleFileAdmin')
      expect(modale).toBeTruthy()
    })
  })
})

