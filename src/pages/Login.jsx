import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [Cadastro, setCadastro] = useState(false);
  const [jaCadastrado, setJaCadastrado] = useState({
    email: "joane@admin.com",
    senha: "123456",
  });

  //evitar recarregamento da pagina
  const handleLogin = (e) => {
    e.preventDefault();

    if (email === jaCadastrado.email && senha === jaCadastrado.senha) {
      alert("login realizado com sucesso!");
    } else {
      alert("email ou senha incorretos!");
    }
  };
  const handleCadastro = (event) => {
    event.preventDefault();
    setJaCadastrado({ email, senha });
    alert("cadastro efetuado com sucesso!");
    setCadastro(false);
    setEmail("");
    setSenha("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white/30">
      <form
         onSubmit={Cadastro ? handleCadastro : handleLogin}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-7  text-center">
          {Cadastro ? "Cadastrar" : "Login"}
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
          className="w-full bg-black text-white p-3 rounded hover:bg-gray-800"
        >{Cadastro ? "Cadastrrar" : "Entrar"}
          
        </button>
        
          <button type="button"  onClick={() => setCadastro(!Cadastro)}
            className="w-full text-sm text-blue-500 ">
              {Cadastro ? "ja tem uma conta? fazer login" : "criar nova conta"}
          </button>

      </form>
    </div>
  );
}
