import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../context/UserContext";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { register } = useContext(Context);

  async function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      confPassword,
    };
    try {
      await register(user);
      setSuccess("Cadastro feito com sucesso!");
    } catch (err) {
      setSuccess("");
      setError("Erro ao cadastrar. Verifique os dados e tente novamente.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white/30">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-7  text-center">Cadastrar</h2>

        {success && <p className="text-green-600 text-sm mb-4">{success}</p>}
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="w-full p-2 border border-gray-300 rounded mb-3"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="w-full p-2 border border-gray-300 rounded mb-3"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Senha"
          className="w-full p-2 border border-gray-300 rounded mb-3"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          name="confPassword"
          placeholder="Confirmação de Senha"
          className="w-full p-2 border border-gray-300 rounded mb-3"
          onChange={(e) => setConfPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded hover:bg-gray-800 cursor-pointer"
        >
          Cadastrar
        </button>

        <p className="text-sm text-center mt-4">
          Já tem uma conta? <Link to="/login" className="text-blue-600 hover:underline">fazer login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
