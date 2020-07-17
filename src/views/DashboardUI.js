import VerticalLayout from './VerticalLayout.js'
import Arrow from '../assets/svg/arrow.js'
import BigBillable from '../assets/svg/big_billable.js'

export default () => {
  const user = localStorage.getItem("user")
  console.log('Bills')
  // console.log('user', user)

  return (`
    <div class='layout'>
      ${VerticalLayout()}
      <div class='dashboard-content'>

        <div class='bills-feed'>
          <div class='status-bills-container'>
            <div class='status-bills-header'>
              <h3> En attente (1) </h3>
              <span>${Arrow()}</span>
            </div>
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
            <div class='status-bills-header'>
              <h3> Validé (1) </h3>
              <span>${Arrow()}</span>
            </div>
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
            <div class='status-bills-header'>
              <h3> Refusé (1) </h3>
              <span>${Arrow()}</span>
            </div>
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

        <div class="dashboard-form-container">
          <div class="centered-svg-container">
            <h3> Validations </h3>
            <div class="dashboard-svg-container"> ${BigBillable()} </div>
           </div>
        </div>
      </div>
    </div>`
  )
}