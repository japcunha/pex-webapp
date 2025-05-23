import { Link } from "react-router-dom";
import '../index.css'
import { Context } from "../context/UserContext";
import { useContext } from "react";

export default function Navbar() {
  const {authenticated, logout} = useContext(Context)

  return (
    <nav className="bg-black/85  text-white p-4 fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <div className="text-1xl font-bold">
          <Link to="/" className="hover:text-amber-50">
            fino grão café
          </Link>
        </div>
          {authenticated ? (
            <div className="space-x-6">
              <Link to="/" className="hover:text-amber-50">Home</Link>
              <Link to="/products/menu" className="hover:text-amber-50">Menu</Link>
              <Link to="/products/register" className="hover:text-amber-50">Cadastrar produto</Link>
               <Link to="/products/all" className="hover:text-amber-50">Produtos</Link>
              <Link to="/contact" className="hover:text-amber-50">Contato</Link>
              <Link onClick={logout} className="hover:text-amber-50">Sair</Link>
        </div>
          ) : (
            <div className="space-x-6">
              <Link to="/" className="hover:text-amber-50">Home</Link>
              <Link to="/products/menu" className="hover:text-amber-50">Menu</Link>
              <Link to="/contact" className="hover:text-amber-50">Contato</Link>
              <Link to="/login" className="hover:text-amber-50">Login</Link>
              <Link to="/register" className="hover:text-amber-50">Cadastrar</Link>
            </div>
          )
          }
        
      </div>
    </nav>
    
  );
}
