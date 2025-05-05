import react, { useState } from "react";

export default function Form({ onSubmit }) {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.nome || !product.preco || !product.categoria) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    onSubmit({
      ...product,
      preco: parseFloat(product.preco),
    });

    // Limpar formulário
    setProduct({
      nome: "",
      descricao: "",
      preco: "",
      categoria: "",
    });
  };
  return (
    // integrar visibilidade apenas ao admin;
    //adicionar edit e delete

    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl text-center font-bold mb-4">
        Cadastr de Produtos
      </h2>

      <label className="block mb-2">Nome *</label>
      <input
        type="text"
        name="nome"
        value={product.nome}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      />

      <label className="block mb-2">Preço *</label>
      <input
        type="number"
        name="preco"
        value={product.preco}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        step="0.01"
        required
      />

      <label className="block mb-2">Descrição </label>
      <input
        type="text"
        name="description"
        value={product.description}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        step="0.01"
        required
      />

      <label className="block mb-2">Categoria *</label>
      <select
        name="categoria"
        value={product.categoria}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      >
        <option value=""> Selecione </option>
        <option value="bebidas">Bebidas</option>
        <option value="salgados">Salgados</option>
        <option value="sobremesas">Sobremesas</option>
      </select>

      <button
        type="submit"
        className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600"
      >
        Cadastrar Produto
      </button>
    </form>
  );
}
