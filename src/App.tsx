import "bootstrap/dist/css/bootstrap.min.css"
import { Navigate, Route, Routes } from "react-router-dom"
import Inventory from "./pages/InventoryPage"
import UnitData from "./pages/UnitDataPage"
import UnitStatus from "./pages/UnitStatusPage"
import Dashboard from "./pages/DashboardPage"
// https://www.youtube.com/watch?v=j898RGRw0b4&ab_channel=WebDevSimplified

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/unit-data" element={<UnitData />} />
      <Route path="/unit-status" element={<UnitStatus />} />
      {/* <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route> */}
    </Routes>
  )
}
