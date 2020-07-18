import VerticalLayout from './VerticalLayout.js'

export default (error) => {

  return (`
    <div class='layout'>
      ${VerticalLayout()}
      <div class='content'>
        <div class='content-header'>
          <div class='content-title'> Erreur </div>
        </div>
        <div>
          ${error ? error : ""}
        </div>
    </div>`
  )
}