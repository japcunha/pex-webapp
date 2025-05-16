import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MenuSection from "./components/MenuSection.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Form from "./pages/Form.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import React, { useState } from "react";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLoginSuccess = (email) => {
    if (email === "joane@admin.com") {
      setIsAdmin(true);
    }
  };

  return (
    <Router>
      <Navbar isAdmin={isAdmin}/>

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu isAdmin={isAdmin} />} />
            <Route path="/form" element={<Form isAdmin={isAdmin} />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/login"
              element={<Login onLoginSuccess={handleLoginSuccess} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
