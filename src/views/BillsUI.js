import VerticalLayout from './VerticalLayout.js'
import Actions from './Actions.js'

export default () => {
  return (`
    <div class='layout'>
      ${VerticalLayout()}
      <div class='content'>
        <div class='content-header'>
          <div class='content-title'> Mes notes de frais </div>
          <button type="button" id='btn-new-bill' class="btn btn-primary">Nouvelle note de frais</button>
        </div>
        <div id='data-table'>
        <table id="example" class="table table-striped table-bordered" style="width:100%">
          <thead>
              <tr>
                <th>Type</th>
                <th>Nom</th>
                <th>Date</th>
                <th>Montant</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>Transport</td>
              <td>Avion Londres</td>
              <td>12 Janv 2020</td>
              <td>210 €</td>
              <td>En attente</td>
              <td>
                ${Actions()}
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    </div>`
  )
}