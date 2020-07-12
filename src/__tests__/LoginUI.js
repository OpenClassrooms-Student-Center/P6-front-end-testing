import Login from "../views/LoginUI"
import ROUTES from "../constants/routes"
import { fireEvent, screen } from "@testing-library/dom"


describe('Login Employee', () => {
  describe("Si l'employee ne remplit pas les champs et clique sur le bouton se connecter", () => {
    test("Il reste sur la page Login", () => {
      document.body.innerHTML = Login()

      const inputEmailUser = screen.getByTestId("employee-email-input")
      expect(inputEmailUser.value).toBe("")
          
      const inputPasswordUser = screen.getByTestId("employee-password-input")
      expect(inputPasswordUser.value).toBe("")
  
      const form = screen.getByTestId("form-employee")
      const handleSubmit = jest.fn(e => e.preventDefault())  
  
      form.addEventListener("submit", handleSubmit)
      fireEvent.submit(form) 
      expect(screen.getByTestId("form-employee")).toBeTruthy()
    })
  })

  describe("Si l'employee remplit les champs au mauvais format et clique sur le bouton se connecter", () => {
    test("Il reste sur la page Login", () => {
      document.body.innerHTML = Login()

      const inputEmailUser = screen.getByTestId("employee-email-input")
      fireEvent.change(inputEmailUser, { target: { value: "pasunemail" } })
      expect(inputEmailUser.value).toBe("pasunemail")
          
      const inputPasswordUser = screen.getByTestId("employee-password-input")
      fireEvent.change(inputPasswordUser, { target: { value: "azerty" } })
      expect(inputPasswordUser.value).toBe("azerty")
  
      const form = screen.getByTestId("form-employee")
      const handleSubmit = jest.fn(e => e.preventDefault())  
  
      form.addEventListener("submit", handleSubmit)
      fireEvent.submit(form) 
      expect(screen.getByTestId("form-employee")).toBeTruthy()
    })
  })

  describe("Si l'employee remplit les deux champs du Login Employee au bon format et clique sur le bouton se connecter", () => {
    test("Il est identifié en tant qu'employé", () => {
      document.body.innerHTML = Login()
    const inputData = {
      email: "johndoe@email.com",
      password: "azerty"
    }

    const inputEmailUser = screen.getByTestId("employee-email-input")
    fireEvent.change(inputEmailUser, { target: { value: inputData.email } })
    expect(inputEmailUser.value).toBe(inputData.email)
        
    const inputPasswordUser = screen.getByTestId("employee-password-input")
    fireEvent.change(inputPasswordUser, { target: { value: inputData.password } })
    expect(inputPasswordUser.value).toBe(inputData.password)

    const form = screen.getByTestId("form-employee")
    
    // localStorage should be populated with form data
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null)
      },
      writable: true
    })

    // we have to mock navigation to test it
    const onNavigate = (pathname) => {
      document.body.innerHTML = ROUTES[pathname]
    }

    const handleSubmit = jest.fn(e => {
      window.localStorage.setItem("user", JSON.stringify({
        type: "Employee",
        email: document.querySelector(`input[data-testid="employee-email-input"]`).value,
        password: document.querySelector(`input[data-testid="employee-password-input"]`).value,        status: "connected"
      }))
      e.preventDefault()
      onNavigate('/employe/note-de-frais')
    })    
    form.addEventListener("submit", handleSubmit)
    fireEvent.submit(form)
      expect(handleSubmit).toHaveBeenCalledTimes(1)
      expect(window.localStorage.setItem).toHaveBeenCalledTimes(1)
      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        "user",
        JSON.stringify({
          type: "Employee",
          email: inputData.email,
          password: inputData.password,
          status: "connected"
        })
      )
    })  

    test("Il navigue vers /note-de-frais", () => {
      expect(screen.getAllByText('Mes notes de Frais')).toBeTruthy()
    })

  })
})

describe('Login Admin', () => {
  describe("Si l'admin ne remplit pas les champs et clique sur le bouton se connecter", () => {
    test("Il reste sur la page Login", () => {
      document.body.innerHTML = Login()

      const inputEmailUser = screen.getByTestId("admin-email-input")
      expect(inputEmailUser.value).toBe("")
          
      const inputPasswordUser = screen.getByTestId("admin-password-input")
      expect(inputPasswordUser.value).toBe("")
  
      const form = screen.getByTestId("form-admin")
      const handleSubmit = jest.fn(e => e.preventDefault())  
  
      form.addEventListener("submit", handleSubmit)
      fireEvent.submit(form) 
      expect(screen.getByTestId("form-admin")).toBeTruthy()
    })
  })

  describe("Si l'admin remplit les champs au mauvais format et clique sur le bouton se connecter", () => {
    test("Il reste sur la page Login", () => {
      document.body.innerHTML = Login()

      const inputEmailUser = screen.getByTestId("admin-email-input")
      fireEvent.change(inputEmailUser, { target: { value: "pasunemail" } })
      expect(inputEmailUser.value).toBe("pasunemail")
          
      const inputPasswordUser = screen.getByTestId("admin-password-input")
      fireEvent.change(inputPasswordUser, { target: { value: "azerty" } })
      expect(inputPasswordUser.value).toBe("azerty")
  
      const form = screen.getByTestId("form-admin")
      const handleSubmit = jest.fn(e => e.preventDefault())  
  
      form.addEventListener("submit", handleSubmit)
      fireEvent.submit(form) 
      expect(screen.getByTestId("form-admin")).toBeTruthy()
    })
  })

  describe("Si l'admin remplit les deux champs du Login admin au bon format et clique sur le bouton se connecter", () => {
    test("Il est identifié en tant qu'admin", () => {
      document.body.innerHTML = Login()
    const inputData = {
      type: "Admin",
      email: "johndoe@email.com",
      password: "azerty",
      status: "connected"
    }

    const inputEmailUser = screen.getByTestId("admin-email-input")
    fireEvent.change(inputEmailUser, { target: { value: inputData.email } })
    expect(inputEmailUser.value).toBe(inputData.email)
        
    const inputPasswordUser = screen.getByTestId("admin-password-input")
    fireEvent.change(inputPasswordUser, { target: { value: inputData.password } })
    expect(inputPasswordUser.value).toBe(inputData.password)

    const form = screen.getByTestId("form-admin")
    
    // localStorage should be populated with form data
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null)
      },
      writable: true
    })

    // we have to mock navigation to test it
    const onNavigate = (pathname) => {
      document.body.innerHTML = ROUTES[pathname]
    }

    const handleSubmit = jest.fn(e => {
      window.localStorage.setItem("user", JSON.stringify({
        type: "Admin",
        // email: document.querySelector(`input[data-testid="employee-email-input"]`).value,
        // password: document.querySelector(`input[data-testid="employee-password-input"]`).value,
        email: document.querySelector(`input[data-testid="admin-email-input"]`).value,
        password: document.querySelector(`input[data-testid="admin-password-input"]`).value,
        status: "connected"
      }))
      e.preventDefault()
      onNavigate('/admin/dashboard')
    })
    form.addEventListener("submit", handleSubmit)
    fireEvent.submit(form)
      expect(handleSubmit).toHaveBeenCalledTimes(1)
      expect(window.localStorage.setItem).toHaveBeenCalledTimes(1)
      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        "user",
        JSON.stringify({
          type: "Admin",
          email: inputData.email,
          password: inputData.password,
          status: "connected"
        })
      )
    })  

    test("Il navigue vers /admin/dashboard", () => {
      expect(screen.getAllByText('Dashboard')).toBeTruthy()
    })
  
  })
})
