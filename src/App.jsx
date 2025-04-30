import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CategoryCard from "./components/CategoryCard.jsx";
import ProductCard from "./components/ProductCard.jsx";
import SectionMenu from './components/SectionMenu.jsx';
import SectionOpen from './components/SectionOpen.jsx';
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <div>
        
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      
      </div>
       <Footer />
    </Router>
  );
}

export default App;
