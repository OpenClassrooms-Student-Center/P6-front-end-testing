import { screen } from "@testing-library/dom"
import BillsUI from "../views/BillsUI.js"

describe("Given I am connected as an employee", () => {
  describe("When I am on Bills Page", () => {
    test("Then bill icon should be highlighted", () => {
      const html = BillsUI()
      document.body.innerHTML = html
      //to-do write expect expression
      expect(screen.getAllByText('Erreur')).toBeTruthy()
    })
  })
})