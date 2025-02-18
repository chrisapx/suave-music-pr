import { Route, Routes } from "react-router-dom"
import AdminRoutes from "./layout/AdminRoutes"
import ClientRoutes from "./layout/ClientRoutes"

function App() {
  const hostname = window.location.hostname;
  const isAdminSubdomain = hostname.startsWith('admin');
  return (
    <>
      <Routes>
        <Route path="*" element={ isAdminSubdomain ? <AdminRoutes/> : <ClientRoutes /> } />
      </Routes>
    </>
  )
}

export default App
