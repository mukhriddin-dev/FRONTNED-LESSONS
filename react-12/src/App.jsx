import Header from "./components/header";
import MainSection from "./components/layouts/main-section";
import Footer from "./components/footer";
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Service from "./pages/service"
import Error from "./pages/erorr"

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <MainSection>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
        
      </MainSection>
      <Footer />
    </>
  );
};

export default App;
