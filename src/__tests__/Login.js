import Login from "../containers/Login"
import { fireEvent, screen } from "@testing-library/dom"


describe('Login', () => {
  describe("Si ", () => {
    test("Alors", () => {
      screen.debug()
      expect(Login).toBeTruthy()
    })
  })
})
