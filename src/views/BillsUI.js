import VerticalLayout from './VerticalLayout.js'

export default () => {
  const user = localStorage.getItem("user")
  console.log('Bills')
  // console.log('user', user)

  return (`
    <div class='layout'>
      ${VerticalLayout()}
      <div class='content'>
        <h1> Mes notes de Frais </h1>
      </div>
    </div>`
  )
}