import { screen } from "@testing-library/dom"
import ErrorPage from "../views/ErrorPage.js"

describe('Given I am connected on app (as an Employee or an HR admin)', () => {
  describe('When ErrorPage is called without and error in its signature', () => {
    test(('Then, it should render ErrorPage anyway'), () => {
      const html = ErrorPage()
      document.body.innerHTML = html
      expect(screen.getAllByText('Erreur')).toBeTruthy()
    })
  })
  describe('When ErrorPage is called with error message in its signature', () => {
    test(('Then, it should render ErrorPage with its error message'), () => {
      const error = 'Erreur de connexion internet'
      const html = ErrorPage(error)
      document.body.innerHTML = html
      expect(screen.getAllByText(error)).toBeTruthy()
    })
  })
})