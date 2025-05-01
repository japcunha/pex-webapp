import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "joane@admin.com" && senha === "123456") {
      alert("Login realizado com sucesso!");
    } else {
      alert("email/senha incorretos!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white/30">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Login do Administrador
        </h2>

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
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
