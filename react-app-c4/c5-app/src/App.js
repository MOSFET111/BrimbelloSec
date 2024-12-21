import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Compoents/Home';
import Services from './Compoents/Servecis';
import Products from './Compoents/Products';
import Testemonials from'./Compoents/Testemonials';
import ContactUs from'./Compoents/ContactUs';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/testemonials" element={<Testemonials />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} /> {/* Optional: Replace Home with NotFound */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;