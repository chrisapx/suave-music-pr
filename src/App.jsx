import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
      </Routes>
    </>
  )
}

export default App
