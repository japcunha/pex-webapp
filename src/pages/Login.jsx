import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CadastroForm from "../components/CadastroForm.jsx";
import LoginForm from "../components/loginForm.jsx";

export default function Login({ onLoginSuccess }) {
  const [cadastroAtivo, setCadastroAtivo] = useState(false);
  const [jaCadastrado, setJaCadastrado] = useState({
    email: "joane@admin.com",
    senha: "123456",
  });

  const navigate = useNavigate();

  const handleLoginSuccess = (email) => {
    onLoginSuccess(email);
    navigate("/products");
  };

  const handleCadastroSuccess = (novoUsuario) => {
    setJaCadastrado(novoUsuario);
    setCadastroAtivo(false);
  };

  return (
    <div className="min-h-screen flex p-20 flex-col items-center justify-center bg-white/30">
      {cadastroAtivo ? (
        <CadastroForm onCadastroSuccess={handleCadastroSuccess} />
      ) : (
        <LoginForm
          key={jaCadastrado.email}
          onLoginSuccess={handleLoginSuccess}
          jaCadastrado={jaCadastrado}
        />
      )}

      <button
        type="button"
        onClick={() => setCadastroAtivo(!cadastroAtivo)}
        className="mt-4 text-sm text-blue-500 underline cursor-pointer"
      >
        {cadastroAtivo ? "Já tem uma conta? Fazer login" : "Criar nova conta"}
      </button>
    </div>
  );
}
