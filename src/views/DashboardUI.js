import VerticalLayout from './VerticalLayout.js'

export default () => {
  const user = localStorage.getItem("user")
  console.log('Bills')
  // console.log('user', user)

  return (`
    <div class='layout'>
      ${VerticalLayout()}
      <div class='content'>
        <div class='bills-feed'>
          <div class='status-bills-container'>
            <h3> En attente (1) </h3>
            <div class='bill-card'>
              <div class='bill-card-name-container'>
                <div class='bill-card-name'>Josiane Elemena </div>
                <span class='bill-card-grey'> ... </span>
              </div>
              <div class='name-price-container'>
                <span> Avion Londres </span>
                <span> 348 € </span>
              </div>
              <div class='date-type-container'>
                <span> ${Date.now()} </span>
                <span> Transport </span>
              </div>
            </div>
          </div>
          <div class='status-bills-container'>
            <h3> Accepté (1) </h3>
            <div class='bill-card'>
              <div class='bill-card-name-container'>
                <div class='bill-card-name'>Josiane Elemena </div>
                <span class='bill-card-grey'> ... </span>
              </div>
              <div class='name-price-container'>
                <span> Avion Londres </span>
                <span> 348 € </span>
              </div>
              <div class='date-type-container'>
                <span> ${Date.now()} </span>
                <span> Transport </span>
              </div>
            </div>
          </div>
          <div class='status-bills-container'>
            <h3> Refusé (1) </h3>
            <div class='bill-card'>
              <div class='bill-card-name-container'>
                <div class='bill-card-name'>Josiane Elemena </div>
                <span class='bill-card-grey'> ... </span>
              </div>
              <div class='name-price-container'>
                <span> Avion Londres </span>
                <span> 348 € </span>
              </div>
              <div class='date-type-container'>
                <span> ${Date.now()} </span>
                <span> Transport </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
  )
}