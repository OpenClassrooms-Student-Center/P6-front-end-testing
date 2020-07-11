import Login from "../views/Login"
import { fireEvent, screen } from "@testing-library/dom"



describe('Login Employee', () => {

  document.body.innerHTML = Login()
  // si on remplit les deux champs et qu'ils sont au bon format, on est envoyé vers /bills et on est identifié en tant qu'employé
  test("Si l'employee remplit les deux champs et qu'ils sont au bon format, on est envoyé vers /bills et on est identifié en tant qu'employé", () => {
    
    const inputData = {
      type: "User",
      email: "johndoe@email.com",
      password: "azerty",
      status: "connected"
    }

    const inputEmailUser = screen.getByTestId("employee-email-input")
    expect(inputEmailUser).toBeTruthy()
    fireEvent.change(inputEmailUser, { target: { value: inputData.email } })
    expect(inputEmailUser.value).toBe(inputData.email)
        
    const inputPasswordUser = screen.getByTestId("employee-password-input")
    expect(inputPasswordUser).toBeTruthy()
    fireEvent.change(inputPasswordUser, { target: { value: inputData.password } })
    expect(inputPasswordUser.value).toBe(inputData.password)

    const formEmployee = screen.getByTestId("form-employee")
    const handleSubmit = jest.fn(e => e.preventDefault())
    formEmployee.addEventListener("submit", handleSubmit)
    fireEvent.submit(formEmployee)
    expect(handleSubmit).toHaveBeenCalledTimes(1)

    // import handleSubmit
    // test locaStorage
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null)
      },
      writable: true
    })

    


  })

  // si champs empty on en change pas de page qiuand on login
  // si les champs ne sont pas empty mais ne sont pas au bon format (email)
  // si on revient, l'applicaiton nous identifie comme employee, on reste sur la page d'acceuil en tant qu'employee
  // si on se déconnecte et que l'on revient en arrière, on revient sur le login et les champs sont empty

})