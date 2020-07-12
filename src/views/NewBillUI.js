import VerticalLayout from './VerticalLayout.js'

export default () => {


  return (`
    <div class='layout'>
      ${VerticalLayout()}
      <div class='content'>
        <div class='content-header'>
          <div class='content-title'> Envoyer une note de frais </div>
        </div>
        <div class="form-newbill-container content-inner">
          <form>
            <div class="row">
                <div class="col-md-6">
                  <div class="col-half">
                    <label for="expense-type" class="bold-label">Type de dépense</label>
                      <select class="form-control blue-border" id="expense-type" default="Transports">
                        <option>Transports</option>
                        <option>Restaurants et bars</option>
                        <option>Hôtel et logement</option>
                        <option>Services en ligne</option>
                        <option>IT et électronique</option>
                        <option>Equipement et matériel</option>
                        <option>Fournitures de bureau</option>
                      </select>
                  </div>
                  <div class="col-half">
                    <label for="expense-name" class="bold-label">Nom de la dépense</label>
                    <input type="text" class="form-control blue-border" id="expense-name" placeholder="Vol Paris Londres" />
                  </div>
                  <div class="col-half">
                    <label for="datepicker" class="bold-label">Date</label>
                    <input type="date" class="form-control blue-border" id="datepicker" />
                  </div>
                  <div class="col-half">
                    <label for="amount" class="bold-label">Montant TTC </label>
                    <input type="number" class="form-control blue-border" id="amount" placeholder="348" />
                  </div>
                  <div class="col-half-row">
                    <div class="flex-col"> 
                      <label for="vat" class="bold-label">TVA</label>
                      <input type="number" class="form-control blue-border" id="vat" placeholder="70" />
                    </div>
                    <div class="flex-col">
                      <label for="pct" class="white-text">%</label>
                      <input type="number" class="form-control blue-border" id="pct" placeholder="20" />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="col-half">
                    <label for="commentary" class="bold-label">Commentaire</label>
                    <textarea class="form-control blue-border" id="commentary" rows="3"></textarea>
                  </div>
                  <div class="col-half">
                    <label for="file" class="bold-label">Justificatif</label>
                    <input type="file" class="form-control blue-border" id="file" />
                  </div>
                </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="col-half">
                  <button type="button" id='btn-send-bill' class="btn btn-primary">Envoyer</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `)
}