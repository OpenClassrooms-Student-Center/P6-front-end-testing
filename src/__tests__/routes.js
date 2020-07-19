import { ROUTES, ROUTES_PATH } from "../constants/routes"
import { screen } from "@testing-library/dom"

describe('Given we are on the app', () => {
  describe('When we navigate on Login', () => {
    test(('Then, it should render Login UI'), () => {
      const data = []
      const loading = false
      const error = null
      const pathname = ROUTES_PATH['Login']
      // const mockLoginUI = jest.fn({ data, error, loading })
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
