import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

export default function Navbar() {
  return (
    <nav className="bg-black/85  text-white p-4 fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <div className="text-1xl font-bold">
          <Link to="/" className="hover:text-amber-50">
            fino grão café
          </Link>
        </div>
          
        <div className="space-x-6">
          <Link to="/" className="hover:text-amber-50">Home</Link>
          <Link to="/menu" className="hover:text-amber-50">Menu</Link>
          <Link to="/contact" className="hover:text-amber-50">Contato</Link>
          <Link to="/login" className="hover:text-amber-50">Login</Link>
        </div>
      </div>
    </nav>
    
  );
}
