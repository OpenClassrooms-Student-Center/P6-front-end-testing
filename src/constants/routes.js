import Login from "../views/Login.js"
import Bills from "../views/Bills.js"
import NewBill from "../views/NewBill.js"
import Dashboard from "../views/Dashboard.js"
import DashboardSelected from "../views/DashboardSelected.js"

export default {
  '/' : Login(),
  '/employe/note-de-frais' : Bills(),
  '/employe/note-de-frais/nouvelle' : NewBill(),
  '/admin/dashboard' : Dashboard(),
  '/admin/dashboard-selected' : DashboardSelected(),
}