import VerticalLayout from './VerticalLayout.js'

export default () => {
  const user = localStorage.getItem("user")
  console.log('Bills')
  // console.log('user', user)

  return (`
    <div class='layout'>
      ${VerticalLayout()}
      <div class='content'>
        <div class='content-header'>
          <div class='content-title'> Mes notes de Frais </div>
          <button type="button" id='btn-new-bill' class="btn btn-primary">Nouvelle note de frais</button>
        </div>
      </div>
    </div>`
  )
}