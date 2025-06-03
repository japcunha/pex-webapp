import { useState } from "react";
import api from "../utils/api.js";
import Alert from "./Alert.jsx";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [product, setProduct] = useState({});
  const token = localStorage.getItem("token");
  const navigate = useNavigate();


  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api
      .post("/products/", product, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        Alert({
          title: "Produto cadastrado com sucesso!",
          type: "success",
        });
        navigate("/products/all");
        return response.data;
      })
      .catch((error) => {
        Alert({
          title: "Erro ao cadastrar produto!",
          type: "error",
        });
        return error.message;
      });
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl w-full mx-auto px-4 py-6 bg-white rounded shadow-md">
      <h2 className="text-2xl text-center font-bold mb-4">
        Cadastro de Produtos
      </h2>

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
          className="bg-amber-500 text-white  px-6 py-2 rounded hover:bg-amber-600 transition-colors  hover:bg-amber-600 cursor-pointer"
        >
          {/* {editProduct ? "Salvar Alterações" : "Cadastrar Produto"} */}
          Cadastrar produto
        </button>
      </div>
    </form>
  );
}
