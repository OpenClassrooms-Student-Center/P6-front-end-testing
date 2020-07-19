import { screen } from "@testing-library/dom"
import Actions from "../views/Actions.js"

describe('Given we are connected as an employee', () => {
  describe('When we are on Bills page and there are bills', () => {
    test(('Then, it should render Actions even if bill file has not url'), () => {
      const html = Actions(null)
      document.body.innerHTML = html
      expect(screen.getByTestId('icon-eye')).toBeTruthy()
    })
    test(('Then, it should render Actions even if bill file has url'), () => {
      const url = '/fake_url'
      const html = Actions(url)
      document.body.innerHTML = html
      expect(screen.getByTestId('icon-eye')).toBeTruthy()
    })
  })
})