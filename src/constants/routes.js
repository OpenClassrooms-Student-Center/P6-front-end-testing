import LoginUI from "../views/LoginUI.js"
import BillsUI from "../views/BillsUI.js"
import NewBillUI from "../views/NewBillUI.js"
import DashboardUI from "../views/DashboardUI.js"

export const ROUTES_PATH = {
  Login: '/',
  Bills: '/employe/note-de-frais',
  NewBill : '/employe/note-de-frais/nouvelle',
  Dashboard: '/admin/dashboard'
}

export const ROUTES = ({ pathname, data }) => {
  switch (pathname) {
    case ROUTES_PATH['Login']:
      return LoginUI()
    case ROUTES_PATH['Bills']:
      return BillsUI(data)
    case ROUTES_PATH['NewBill']:
      return NewBillUI()
    case ROUTES_PATH['Dashboard']:
      return DashboardUI()
    default:
      return LoginUI()
  }
}

