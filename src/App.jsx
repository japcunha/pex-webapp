import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import RegisterProduct from "./pages/Register-product.jsx";
import Products from "./pages/Products.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
//import Form from "./components/Form.jsx"
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/register.jsx";
import { UserProvider } from "./context/UserContext.jsx";
//import Container from "./components/Container.jsx";

function App() {
  return (
    <Router>
      <UserProvider>       
          <Navbar />         
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Menu />} />
                <Route path="/products/register" element={<RegisterProduct />} />
                 <Route path="/products/all" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>          
            <Footer />
          </div>         
      </UserProvider>     
    </Router>
  );
}

export default App;
