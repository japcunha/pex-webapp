import React, { useState, useEffect } from "react";

export default function Form({ onSubmit, editProduct, onDelete }) {
  const [product, setProduct] = useState({
    id: null,
    nome: "",
    preco: "",
    descricao: "",
    categoria: "",
    subcategoria: "",
  });

  useEffect(() => {
    if (editProduct) {
      setProduct(editProduct);
    } else {
      setProduct({
        id: null,
        nome: "",
        preco: "",
        descricao: "",
        categoria: "",
        subcategoria: "",
      });
    }
  }, [editProduct]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!product.nome || !product.preco || !product.categoria) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    onSubmit({
      ...product,
      preco: parseFloat(product.preco),
    });

    if (!editProduct) {
      setProduct({
        nome: "",
        preco: "",
        descricao: "",
        categoria: "",
        subcategoria: "",
      });
    }
  };

  return (
    <div className="bg-white/70  mr-50% p-25">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl text-center font-bold mb-4">
          {editProduct ? "editar produto" : "Cadastro de Produtos"}
        </h2>

        <label className="block mb-2"> Nome *</label>
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
          name="descricao"
          value={product.descricao}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          step="0.01"
        />

        <label className="block mb-2">Categoria *</label>

        <select
          name="categoria"
          value={product.categoria}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        >
          <option value="">Selecione </option>
          <option value="bebidas">Bebidas</option>
          <option value="salgados">Salgados</option>
          <option value="sobremesas">Sobremesas</option>
        </select>

        <label className="block">Subcategoria</label>
        <input
          type="text"
          name="subcategoria"
          value={product.subcategoria}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <div className="flex justify-center gap-5">
          <button
            type="submit"
            className="bg-amber-500 text-white  mt-10 px-4 py-2 rounded hover:bg-amber-600 cursor-pointer"
          >
            {editProduct ? "Salvar Alterações" : "Cadastrar Produto"}
          </button>
          
          
          {editProduct && (
            <button
              type="button"
              onClick={() => onDelete(editProduct.id)}
              className="bg-gray-700 text-white mt-10  px-4 py-2 rounded hover:bg-black cursor-pointer"
            >
              Excluir Produto
            </button>
            
          )}
        </div>
      </form>
    </div>
  );
}
