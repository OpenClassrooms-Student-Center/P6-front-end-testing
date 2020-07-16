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
            ${rows(bills)}
          </tbody>
          </table>
        </div>
      </div>
    </div>`
  )
}