import { screen } from "@testing-library/dom"
import ErrorPage from "../views/ErrorPage.js"

describe('Given we are connected as an employee and that we already have sent at least one bill', () => {
  describe('When we are on Bills page', () => {
    test(('Then, it should render Actions'), () => {
      // const fakeUrl = '/fake_url'
      const html = Actions()
      document.body.innerHTML = html
      expect(screen.getByTestId('icon-eye')).toBeTruthy()
    })
  })
})