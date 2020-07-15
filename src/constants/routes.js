import LoginUI from "../views/LoginUI.js"
import BillsUI from "../views/BillsUI.js"
import NewBillUI from "../views/NewBillUI.js"
import DashboardUI from "../views/DashboardUI.js"

export const ROUTES = {
  // '/' : NewBillUI(),
  '/' : LoginUI(),
  '/employe/note-de-frais' : BillsUI(),
  '/employe/note-de-frais/nouvelle' : NewBillUI(),
  '/admin/dashboard' : DashboardUI()
}

export const ROUTES_PATH = {
  Login: '/',
  Bills: '/employe/note-de-frais',
  NewBill : '/employe/note-de-frais/nouvelle',
  Dashboard: '/admin/dashboard'
}