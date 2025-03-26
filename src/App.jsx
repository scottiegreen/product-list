// import React from 'react';

// import NavBar from './components/NavBar';

// import Products from "./components/Products"



// function App() {
//   return (
//     <>
  
//      <NavBar/>
//      <Products />
     
//     </>
//   )
// }
// export default App

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import NoPage from "./components/NoPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> {/* Changed path="/" to index */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NoPage />} /> {/* Added NoPage route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;