import VerticalLayout from './VerticalLayout.js'

export default () => {

  return (`
    <div class='layout'>
      ${VerticalLayout()}
      <div class='content'>
        <div class="text-center">
          <div class="spinner-border">
          </div>
        </div>
    </div>`
  )
}