import React, { useState } from "react";

export default function CadastroForm({ onCadastroSuccess }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = (e) => {
    e.preventDefault();
    onCadastroSuccess({ email, senha });
    alert("Cadastro efetuado com sucesso!");
    setEmail("");
    setSenha("");
  };

  return (
    <form
      onSubmit={handleCadastro}
      className="bg-white p-6 rounded shadow-md w-full max-w-sm"
    >
      <h2 className="text-2xl font-bold mb-7 text-center">Cadastrar</h2>

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
        className="w-full bg-black text-white p-3 rounded hover:bg-gray-800 cursor-pointer"
      >
        Cadastrar
      </button>
    </form>
  );
}
