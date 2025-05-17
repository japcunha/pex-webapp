import React, { useState, useEffect } from "react";
import Form from "../components/Form.jsx";
import MenuSection from "../components/MenuSection";
import {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../mock/mockProducts.js";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  // 🔸 Carrega os produtos ao montar a página
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProduct(); 
    setProducts(data);
  };

  const handleAddOrUpdateProduct = async (newProduct) => {
    if (newProduct.id) {
      await updateProduct(newProduct.id, newProduct); // chama mock de edição
    } else {
      await createProduct(newProduct); // chama mock de criação
    }
    await loadProducts(); // recarrega os produtos atualizados
    setEditProduct(null);
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm("Deseja realmente excluir este produto?")) {
      await deleteProduct(id); 
      await loadProducts(); 
      setEditProduct(null);
    }
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditProduct(null);
  };

  const categorias = ["bebidas", "salgados", "sobremesas"];

  return (
    <div className="bg-white max-w-4xl mx-auto p-4">
      <div className="m-20">
        <h1 className="text-4xl text-center font-bold my-8 text-amber-700 mt-40 ">
          Gerenciador de Cardápio
        </h1>
      </div>

      {categorias.map((categoria) => {
        const items = products.filter((p) => p.categoria === categoria);
        return items.length > 0 ? (
          <MenuSection
            key={categoria}
            title={categoria}
            items={items}
            onEdit={handleEditProduct}
          />
        ) : null;
      })}

      <div className="mt-10 border-t pt-10">
        <Form
          onSubmit={handleAddOrUpdateProduct}
          editProduct={editProduct}
          onDelete={handleDeleteProduct}
          onCancelEdit={handleCancelEdit}
        />
      </div>
    </div>
  );
}
