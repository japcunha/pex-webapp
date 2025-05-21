import React, { useState, useEffect } from "react";

export default function Form({
  onSubmit,
  editProduct,
  onDelete,
  onCancelEdit,
  fields,
  isAdmin,
}) {
  // estado local de cada produto
  const [product, setProduct] = useState({});

  if (!isAdmin) return null;

  // Atualiza o formulário quando o produto a ser editado ou os campos mudarem
  useEffect(() => {
    if (editProduct) {
      setProduct(editProduct); //Preenche os campos com osdados do produto
    } else {
      // Cria um objeto vazio com os campos definidos
      const emptyProduct = fields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {});
      setProduct(emptyProduct); //limpando fomulario d cadastro
    }
  }, [editProduct, fields]);
  //atualizando estado
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  //valida os dados e os envia!!!
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
  };

  return (
    <div className="bg-white/70  mr-50% p-25">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl text-center font-bold mb-4">
          {editProduct ? "editar produto" : "Cadastro de Produtos"}
        </h2>

        {fields.map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block mb-2">
              {field.label} {field.required && "*"}
            </label>

            {field.type === "select" ? (
              <select
                name={field.name}
                value={product[field.name] || ""}
                onChange={handleChange}
                required={field.required}
                className="w-full p-2 border rounded"
              >
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={product[field.name] || ""}
                onChange={handleChange}
                required={field.required}
                className="w-full p-2 border rounded"
                step={field.type === "number" ? "0.01" : undefined}
              />
            )}
          </div>
        ))}
        <div className="flex justify-center mt-4 gap-2">
          <button
            type="submit"
            className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 cursor-pointer"
          >
            {editProduct ? "Salvar" : "Cadastrar"}
          </button>

          {editProduct && (
            <>
              <button
                type="button"
                onClick={() => onDelete(product.id)}
                className="bg-red-600 text-white px-4 py-2 rounded ml-2 hover:bg-red-70 cursor-pointer"
              >
              Excluir
              </button>
              <button
                type="button"
                onClick={onCancelEdit}
                className="bg-gray-400 text-white px-4 py-2 rounded ml-2 hover:bg-gray-500 cursor-pointer"
              >
                Cancelar
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
