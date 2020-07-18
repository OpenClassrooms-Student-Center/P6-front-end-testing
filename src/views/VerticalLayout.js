import WindowIcon from "../assets/svg/window.js"
import MailIcon from "../assets/svg/mail.js"
import DisconnectIcon from "../assets/svg/disconnect.js"

export default (height) => {

  const user = JSON.parse(localStorage.getItem('user'))
  console.log('user', user)
  if (user && user.type === 'Employee') {
    return (
      `
      <div class='vertical-navbar'>
        <div class='layout-title'> Billable </div>
        <div id='layout-icon1'>
          ${WindowIcon}
        </div>
        <div id='layout-icon2'>
          ${MailIcon}
        </div>
        <div id='layout-disconnect'>
          ${DisconnectIcon}
        </div>
    </div>
      `
    ) 
  } else {
    return (
      `
      <div class='vertical-navbar' style='height: ${height}vh;'>
        <div class='layout-title'> Billable </div>
          <div id='layout-disconnect'>
            ${DisconnectIcon}
          </div>
        </div>
      `
    )
  }
}