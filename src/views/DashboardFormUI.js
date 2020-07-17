import calendarIcon from '../assets/svg/calendar.js'
import euroIcon from '../assets/svg/euro.js'
import pctIcon from '../assets/svg/pct.js'

export default () => {
  return (`
    <div class="container dashboard-form">
      <div class="row" id="dashboard-row1">
        <div class="col-sm" id="dashboard-form-col1">
          <label for="expense-type" class="bold-label">Type de dépense</label>
          <div class='input-field'> Avion </div>
          <label for="expense-name" class="bold-label">Nom de la dépense</label>
          <div class='input-field'> Vol Paris Londres </div>
          <label for="datepicker" class="bold-label">Date</label>
          <div class='input-field input-flex'>
            <span>26/06/20</span>
            <span> ${calendarIcon} </span>
          </div>
        </div>
        <div class="col-sm" id="dashboard-form-col2">
          <label for="commentary" class="bold-label">Commentaire</label>
          <div class='textarea-field' style="height: 300px;"> Voici la demande de remboursement de mon vol en direction de Londres </div>
        </div>
      </div>
      <div class="row" id="dashboard-row2">
        <div class="col-sm">
          <label for="amount" class="bold-label">Montant TTC </label>
          <div class='input-field input-flex'>
            <span>348</span>
            <span> ${euroIcon} </span>
          </div>
        </div>
        <div class="col-sm">
          <label for="vat" class="bold-label">TVA</label>
          <div id='vat-flex-container'>
            <div class='input-field input-flex vat-flex'>
              <span>70</span>
              <span> ${euroIcon} </span>
            </div>
            <div class='input-field input-flex vat-flex'>
              <span>20</span>
              <span> ${pctIcon} </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="dashboard-row3">
        <div class="col-sm">
          Row 3
        </div>
      </div>
      <div class="row" id="dashboard-row4">
        <div class="col-sm">
          Row 4
        </div>
      </div>
    </div>
  `)
}