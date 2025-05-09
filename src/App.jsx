import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MenuSection from './components/MenuSection.jsx';
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Form from "./components/Form.jsx"
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="flex flex-col min-h-screen">

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
     
    </Router>
  );
}

export default App;
