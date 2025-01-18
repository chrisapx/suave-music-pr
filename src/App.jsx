import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </>
  )
}

export default App
