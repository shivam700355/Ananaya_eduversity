import GridPractice from "./Components/GridPractice";
import Modal from "./Components/Modal/Modal";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Practicingcss from "./Components/Practicingcss";
import Home from "./pages/Home";
import ModalHome from "./pages/ModalHome";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import Services from "./pages/Services";

function App() {
  return (
    <div>
      {/* <Form />
      <Modal />
      <Practicingcss />
      <GridPractice /> */}
      <Navbar />
      <div className="pt-16">


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modal" element={<ModalHome />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      {/* <Home />
      <ModalHome />
      <AboutUs />
      <ContactPage />
      <Services /> */}
    </div>
    </div>
  );
}

export default App;
