import React, { useState } from "react";

export default function LoginForm({ onLoginSuccess, jaCadastrado }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === jaCadastrado.email && senha === jaCadastrado.senha) {
      onLoginSuccess(email);
    } else {
      alert("Email ou senha incorretos!");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white p-6 rounded shadow-md w-full max-w-sm"
    >
      <h2 className="text-2xl  text-center font-bold mb-7">Login</h2>

      <input
        type="email"
        placeholder="E-mail"
        className="w-full p-2 border border-gray-300 rounded mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Senha"
        className="w-full p-2 border border-gray-300 rounded mb-3"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />

      <button
        type="submit"
        className="w-full bg-black text-white p-3 rounded hover:bg-gray-800 cursor-pointer "
      >
        Entrar
      </button>
    </form>
  );
}
