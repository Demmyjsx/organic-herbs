
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutUs";
import Nopage from "./pages/Nopage";
import ContactPage from "./pages/ContactUs";
import OtherProducts from "./pages/OtherProducts";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/otherproducts" element={<OtherProducts />} />
          <Route path="*" element={<Nopage />} />

 
      </Routes>
    </BrowserRouter>
  );
}
