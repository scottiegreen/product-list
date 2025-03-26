import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import ServicesPage from "./ServicesPage";
import NoPage from "./NoPage";
import "./NavBar.css";
const NavBar = () => {
  return (
  
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
       </Route>
    </Routes>
  </BrowserRouter>
  );
};
export default NavBar;
