import { ROUTES, ROUTES_PATH } from "../constants/routes"
import { screen } from "@testing-library/dom"

const data = []
const loading = false
const error = null

describe('Given we are on some page of the app', () => {
  describe('When we navigate to Login', () => {
    test(('Then, it should render Login UI'), () => {
      const pathname = ROUTES_PATH['Login']
      const html = ROUTES({ 
        pathname,
        data,
        loading,
        error
       })
       document.body.innerHTML = html
       expect(screen.getAllByText('Administration')).toBeTruthy()
    })
  })
  describe('When we navigate to Bills', () => {
    test(('Then, it should render Bills UI'), () => {
      const pathname = ROUTES_PATH['Bills']
      const html = ROUTES({ 
        pathname,
        data,
        loading,
        error
       })
       document.body.innerHTML = html
       expect(screen.getAllByText('Mes notes de frais')).toBeTruthy()
    })
  })
  describe('When we navigate to NewBill', () => {
    test(('Then, it should render NewBill UI'), () => {
      const pathname = ROUTES_PATH['NewBill']
      const html = ROUTES({ 
        pathname,
        data,
        loading,
        error
       })
       document.body.innerHTML = html
       expect(screen.getAllByText('Envoyer une note de frais')).toBeTruthy()
    })
  })
  describe('When we navigate to Dashboard', () => {
    test(('Then, it should render Dashboard UI'), () => {
      const pathname = ROUTES_PATH['Dashboard']
      const html = ROUTES({ 
        pathname,
        data,
        loading,
        error
       })
       document.body.innerHTML = html
       expect(screen.getAllByText('Validations')).toBeTruthy()
    })
  })
  describe('When we navigate to anywhere else other than Login, Bills, NewBill, Dashboard', () => {
    test(('Then, it should render Login UI'), () => {
      const pathname = '/anywhere-else'
      const html = ROUTES({ 
        pathname,
        data,
        loading,
        error
       })
       document.body.innerHTML = html
       expect(screen.getAllByText('Administration')).toBeTruthy()
    })
  })
})
