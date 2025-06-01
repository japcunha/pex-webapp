import { Link } from "react-router-dom";
import "../index.css";
import { Context } from "../context/UserContext";
import { useContext, useState } from "react";

export default function Navbar() {
  const { authenticated, logout } = useContext(Context);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkStyle =
    "hover:underline hover:decoration-white hover:text-lg transition-all duration-200 block mt-2 md:mt-0";

  return (
    <nav className="bg-black/85  text-white  py-3 fixed top-0 w-full z-50 shadow-md ">
      <div className="flex justify-between items-center px-4 max-w-full md:max-w-6xl mx-auto">
        <Link to="/" className="text-1xl font-bold hover:text-amber-50">
          <img
            src="/logo.png"
            alt="Fino Grão Café"
            className="h-8 w-auto max-w-[120px]"
          />
        </Link>

        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div
          className={`md:flex md:items-center space-x-6 ${
            menuOpen ? "block" : "hidden"
          } md:block absolute md:static top-full left-0 w-full md:w-auto bg-black/90 md:bg-transparent p-4 md:p-0`}
        >
          <Link
            to="/"
            className="hover:underline hover:decoration-amber-500 hover:text-lg transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/products/menu"
            className="hover:underline hover:decoration-amber-500 hover:text-lg transition-all duration-200"
          >
            Menu
          </Link>
          {authenticated && (
            <>
              <Link
                to="/products/register"
                className="hover:underline hover:decoration-amber-500 hover:text-lg transition-all duration-200"
              >
                Cadastrar produto
              </Link>
              <Link
                to="/products/all"
                className="hover:underline hover:decoration-amber-500 hover:text-lg transition-all duration-200"
              >
                Produtos
              </Link>
            </>
          )}
          <Link
            to="/contact"
            className="hover:underline hover:decoration-amber-500 hover:text-lg transition-all duration-200"
          >
            Contato
          </Link>
          {authenticated ? (
            <Link onClick={logout} className="hover:text-amber-50">
              Sair
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:underline hover:decoration-amber-500 hover:text-lg transition-all duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:underline hover:decoration-amber-500 hover:text-lg transition-all duration-200"
              >
                Cadastrar
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
