import { useContext, useState } from "react";
import { Context } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(Context);
  
  async function handleSubmit(e) {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    try {
      await login(user);
      setSuccess("Login realizado com sucesso!");
      setError("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setSuccess("");
      setError("Falha no login. Verifique seu e-mail e senha.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white/30">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-7  text-center">Login</h2>

        {success && <p className="text-green-600 text-sm mb-4">{success}</p>}
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-2 border border-gray-300 rounded mb-3"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 border border-gray-300 rounded mb-3"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded hover:bg-gray-800 cursor-pointer"
        >
          Entrar
        </button>

        <p className="mt-4 text-center">
          Não tem conta?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Cadastrar
          </Link>
        </p>
      </form>
    </div>
  );
}
