import VerticalLayout from './VerticalLayout.js'
import Actions from './Actions.js'

export default (bills) => {

  const row = (bill) => {
    return (`
      <tr>
        <td>${bill.type}</td>
        <td>${bill.name}</td>
        <td>${bill.date}</td>
        <td>${bill.amount} €</td>
        <td>${bill.status}</td>
        <td>
          ${Actions()}
        </td>
      </tr>
      `)
  }
  const rows = (bills) => {
    return (bills && bills.length) ? bills.map(bill => row(bill)) : []
  }

  return (`
    <div class='layout'>
      ${VerticalLayout()}
      <div class='content'>
        <div class='content-header'>
          <div class='content-title'> Mes notes de frais </div>
          <button type="button" data-testid='btn-new-bill' class="btn btn-primary">Nouvelle note de frais</button>
        </div>
        <div id='data-table'>
        <table id="example" class="table table-striped" style="width:100%">
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
            ${rows(bills)}
          </tbody>
          </table>
        </div>
      </div>
      <div class="modal fade" id="modaleFile" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Justificatif</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img src="https://firebasestorage.googleapis.com/v0/b/billable-677b6.appspot.com/o/justificatifs%2Fpreview-facture-free-201801-pdf-1.jpg?alt=media&token=5f9e9bc5-b23a-4595-a13f-d2084a3934c0" />
            </div>
          </div>
        </div>
      </div>
    </div>`
  )
}