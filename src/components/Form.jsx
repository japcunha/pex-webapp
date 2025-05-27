import { useState } from "react";
import api from "../utils/api.js";

export default function Form() {
  const [product, setProduct] = useState({});
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/products/", product, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });

      setMessage("✅ Produto cadastrado com sucesso!");
      setProduct({});
    } catch (error) {
      setMessage(" Erro ao cadastrar produto.");
    }

    setTimeout(() => setMessage(""), 3000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl text-center font-bold mb-4">
        Cadastro de Produtos
      </h2>

      {message && (
        <div className="text-center text-sm text-green-600 mb-4">{message}</div>
      )}

      <label className="block mb-2"> Nome *</label>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      />

      <label className="block mb-2">Preço *</label>
      <input
        type="text"
        name="price"
        value={product.price}
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
      />

      <label className="block mb-2">Categoria *</label>
      <select
        name="categoryId"
        value={product.category}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      >
        <option disabled selected>
          {" "}
          Selecione uma categoria
        </option>
        <option value="1">Bebidas</option>
        <option value="2">Salgados</option>
        <option value="3">Sobremesas</option>
      </select>

      <label className="block">Subcategoria *</label>
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
          {/* {editProduct ? "Salvar Alterações" : "Cadastrar Produto"} */}
          Cadastrar produto
        </button>

        {/* {editProduct && ( */}
        <>
          <button
            type="button"
            onClick={() => {
              setMessage("Produto excluído!");
              setTimeout(() => setMessage(""), 3000);
            }}
            // onClick={() => onDelete(editProduct.id)}
            className="bg-red-600 text-white mt-10  px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
          >
            Excluir Produto
          </button>

          <button
            type="button"
            onClick={() => {
              setProduct({});
              setMessage(" Edição cancelada.");
              setTimeout(() => setMessage(""), 3000);
            }}
            // onClick={onCancelEdit}
            className="bg-gray-700 text-white mt-10 px-4 py-2 rounded hover:bg-black cursor-pointer"
          >
            Cancelar Edição
          </button>
        </>
        {/* )} */}
      </div>
    </form>
  );
}
