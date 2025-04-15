import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery"
import Services from "./components/Services"
import ContactUs from "./components/ContactUs"
import Faqs from "./components/Faqs"
import "./App.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/gallery" element={<Gallery/>}/>
      <Route exact path="/services" element={<Services/>}/>
      <Route exact path="/contactus" element={<ContactUs/>}/>
      <Route exact path="/faqs" element={<Faqs/>}/>
    </Routes>
  );
}

export default App;

