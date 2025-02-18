import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';

const ClientRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
    </Routes>
  );
};

export default ClientRoutes;