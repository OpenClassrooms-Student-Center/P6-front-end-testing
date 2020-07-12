import LoginUI from "../views/LoginUI.js"
import BillsUI from "../views/BillsUI.js"
import NewBillUI from "../views/NewBillUI.js"
import DashboardUI from "../views/DashboardUI.js"
import DashboardSelectedUI from "../views/DashboardSelectedUI.js"

export const ROUTES = {
  '/' : BillsUI(),
  // '/' : LoginUI(),
  '/employe/note-de-frais' : BillsUI(),
  '/employe/note-de-frais/nouvelle' : NewBillUI(),
  '/admin/dashboard' : DashboardUI(),
  '/admin/dashboard-selected' : DashboardSelectedUI(),
}

export const ROUTES_PATH = {
  Login: '/',
  Bills: '/employe/note-de-frais',
  NewBill : '/employe/note-de-frais/nouvelle',
  Dashboard: '/admin/dashboard',
  DashboardSelected: '/admin/dashboard-selected',
}